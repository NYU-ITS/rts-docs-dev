# Singularity with Conda

-   [What is Singularity?](#what-is-singularity)
-   [Using Singularity Overlays for Miniforge (Python & Julia)](#using-singularity-overlays-for-miniforge-python--julia)
          -   [Preinstallation Warning](#preinstallation-warning)
          -   [Miniforge Environment PyTorch Example](#miniforge-environment-pytorch-example)
          -   [Using your Singularity Container in a SLURM Batch Job](#using-your-singularity-container-in-a-slurm-batch-job)
          -   [Optional: Convert ext3 to a compressed, read-only squashfs filesystem](#optional-convert-ext3-to-a-compressed-read-only-squashfs-filesystem)
          -   [Julia Singularity Image](#julia-singularity-image)
          -   [Using CentOS 8 for Julia (for Module Compatibility)](#using-centos-8-for-julia-for-module-compatibility)

## What is Singularity?
Singularity is a free, cross-platform and open-source program that creates and executes containers on the HPC clusters. Containers are streamlined, virtualized environments for specific programs or packages. Singularity is an industry standard tool to utilize containers in HPC environments. Containers allow for the support of highly specific environments and further increase scientific reproducibility and portability. Using Singularity containers, researchers can work in the reproducible containerized environments of their choice can easily tailor them to their needs.

## Using Singularity Overlays for Miniforge (Python & Julia)
### Preinstallation Warning
If you have initialized Conda in your base environment, your prompt on Greene may show something like: 
```sh
(base) [NETID@log-1 ~]$
```
then you must first comment out or remove this portion of your ~/.bashrc file:

```
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/share/apps/anaconda3/2020.07/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/share/apps/anaconda3/2020.07/etc/profile.d/conda.sh" ]; then
        . "/share/apps/anaconda3/2020.07/etc/profile.d/conda.sh"
    else
        export PATH="/share/apps/anaconda3/2020.07/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<
```

The above code automatically makes your environment look for the default shared installation of Conda on the cluster and will sabotage  any attempts to install packages to a Singularity environment. Once removed or commented out, log out and back into the cluster for a fresh environment.

### Miniforge Environment PyTorch Example
[Conda environments](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html) allow users to create customizable, portable work environments and dependencies to support specific packages or versions of software for research. Common conda distributions include Anaconda, Miniconda and Miniforge. Packages are available via "channels". Popular channels include "conda-forge" and "bioconda".  In this tutorial we shall use [Miniforge](https://github.com/conda-forge/miniforge) which sets "conda-forge" as the package channel. Traditional conda environments, however, also create a large number of files that can cut into quotas. To help reduce this issue, we suggest using [Singularity](https://docs.sylabs.io/guides/4.1/user-guide/), a container technology that is popular on HPC systems. Below is an example of how to create a pytorch environment using Singularity and Miniforge.

Create a directory for the environment
```
mkdir /scratch/<NetID>/pytorch-example
cd /scratch/<NetID>/pytorch-example
```
Copy an appropriate gzipped overlay images from the overlay directory. You can browse available images to see available options
```
ls /scratch/work/public/overlay-fs-ext3
```
In this example we use overlay-15GB-500K.ext3.gz as it has enough available storage for most conda environments. It has 15GB free space inside and is able to hold 500K files
You can use another size as needed.
```
cp -rp /scratch/work/public/overlay-fs-ext3/overlay-15GB-500K.ext3.gz .
gunzip overlay-15GB-500K.ext3.gz
```

Choose a corresponding Singularity image. For this example we will use the following image
```
/scratch/work/public/singularity/cuda12.1.1-cudnn8.9.0-devel-ubuntu22.04.2.sif 
```

For Singularity image available on nyu HPC greene,  please check the singularity images folder
```
/scratch/work/public/singularity/
```

For the most recent supported versions of PyTorch, please check the [PyTorch website](https://pytorch.org/get-started/locally/). 

Launch the appropriate Singularity container in read/write mode (with the :rw flag)
```
singularity exec --overlay overlay-15GB-500K.ext3:rw /scratch/work/public/singularity/cuda12.1.1-cudnn8.9.0-devel-ubuntu22.04.2.sif /bin/bash
```

The above starts a bash shell inside the referenced Singularity Container overlayed with the 15GB 500K you set up earlier. This creates the functional illusion of having a writable filesystem inside the typically read-only Singularity container.

Now, inside the container, download and install miniforge to /ext3/miniforge3
```
wget --no-check-certificate https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
bash Miniforge3-Linux-x86_64.sh -b -p /ext3/miniforge3
# rm Miniforge3-Linux-x86_64.sh # if you don't need this file any longer
```

Next, create a wrapper script /ext3/env.sh using a text editor, like nano.
```
touch /ext3/env.sh
nano /ext3/env.sh
```

The wrapper script will activate your conda environment, to which you will be installing your packages and dependencies. The script should contain the following:
```
#!/bin/bash

unset -f which

source /ext3/miniforge3/etc/profile.d/conda.sh
export PATH=/ext3/miniforge3/bin:$PATH
export PYTHONPATH=/ext3/miniforge3/bin:$PATH
```

Activate your conda environment with the following:
```
source /ext3/env.sh
```

If you have the "defaults" channel enabled, please disable it with
```
conda config --remove channels defaults
```

Now that your environment is activated, you can update and install packages:
```
conda update -n base conda -y
conda clean --all --yes
conda install pip -y
conda install ipykernel -y # Note: ipykernel is required to run as a kernel in the Open OnDemand Jupyter Notebooks
```

To confirm that your environment is appropriately referencing your Miniforge installation, try out the following:
```
unset -f which
which conda
# output: /ext3/miniforge3/bin/conda

which python
# output: /ext3/miniforge3/bin/python

python --version
# output: Python 3.8.5

which pip
# output: /ext3/miniforge3/bin/pip

exit
# exit Singularity
```

#### Install packages

You may now install packages into the environment with either the pip install or conda install commands. 

First, start an interactive job with adequate compute and memory resources to install packages. The login nodes restrict memory to 2GB per user, which may cause some large packages to crash.
```
srun --cpus-per-task=2 --mem=10GB --time=04:00:00 --pty /bin/bash

# wait to be assigned a node

singularity exec --overlay overlay-15GB-500K.ext3:rw /scratch/work/public/singularity/cuda12.1.1-cudnn8.9.0-devel-ubuntu22.04.2.sif /bin/bash

source /ext3/env.sh
# activate the environment
```

After it is running, you’ll be redirected to a compute node. From there, run singularity to setup on conda environment, same as you were doing on login node.

We will install PyTorch as an example:
```
pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu116

pip3 install jupyter jupyterhub pandas matplotlib scipy scikit-learn scikit-image Pillow
```

For the latest versions of PyTorch please check the [PyTorch website](https://pytorch.org/).

You can see the available space left on your image with the following commands:
```
find /ext3 | wc -l
# output: should be something like 45445

du -sh  /ext3        
# output should be something like 4.9G    /ext3
```

Now, exit the Singularity container and then rename the overlay image. Typing 'exit' and hitting enter will exit the Singularity container if you are currently inside it. You can tell if you're in a Singularity container because your prompt will be different, such as showing the prompt 'Singularity>'
```
exit
mv overlay-15GB-500K.ext3 my_pytorch.ext3
```
#### Test your PyTorch Singularity Image
```
singularity exec --overlay /scratch/<NetID>/pytorch-example/my_pytorch.ext3:ro /scratch/work/public/singularity/cuda12.1.1-cudnn8.9.0-devel-ubuntu22.04.2.sif /bin/bash -c 'source /ext3/env.sh; python -c "import torch; print(torch.__file__); print(torch.__version__)"'

#output: /ext3/miniforge3/lib/python3.8/site-packages/torch/__init__.py
#output: 1.8.0+cu111
```
***Note:*** the end ':ro' addition at the end of the pytorch ext3 image starts the image in read-only mode. To add packages you will need to use ':rw' to launch it in read-write mode.

### Using your Singularity Container in a SLURM Batch Job
Below is an example script of how to call a python script, in this case torch-test.py, from a SLURM batch job using your new Singularity image

torch-test.py:
```
#!/bin/env python

import torch

print(torch.__file__)
print(torch.__version__)

# How many GPUs are there?
print(torch.cuda.device_count())

# Get the name of the current GPU
print(torch.cuda.get_device_name(torch.cuda.current_device()))

# Is PyTorch using a GPU?
print(torch.cuda.is_available())
```

Now we will write the SLURM job script, run-test.SBATCH, that will start our Singularity Image and call the torch-test.py script.

run-test.SBATCH:
```
#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks-per-node=1
#SBATCH --cpus-per-task=1
#SBATCH --time=1:00:00
#SBATCH --mem=2GB
#SBATCH --gres=gpu
#SBATCH --job-name=torch

module purge

singularity exec --nv \
	    --overlay /scratch/<NetID>/pytorch-example/my_pytorch.ext3:ro \
	    /scratch/work/public/singularity/cuda12.1.1-cudnn8.9.0-devel-ubuntu22.04.2.sif\
	    /bin/bash -c "source /ext3/env.sh; python torch-test.py"
```

You will notice that the singularity exec command features the '--nv flag' - this flag is reguired to pass the CUDA drivers from a GPU to the Singularity container.

Run the run-test.SBATCH script
```
sbatch run-test.SBATCH
```

Check your SLURM output for results, an example is shown below
```
cat slurm-3752662.out

# example output:
# /ext3/miniforge3/lib/python3.8/site-packages/torch/__init__.py
# 1.8.0+cu111
# 1
# Quadro RTX 8000
# True
```

### Optional: Convert ext3 to a compressed, read-only squashfs filesystem
Singularity images can be compressed into read-only squashfs filesystems to conserve space in your environment. Use the following steps to convert your ext3 Singularity image into a smaller squashfs filesystem.
```
srun -N1 -c4 singularity exec --overlay my_pytorch.ext3:ro /scratch/work/public/singularity/centos-8.2.2004.sif mksquashfs /ext3 /scratch/<NetID>/pytorch-example/my_pytorch.sqf -keep-as-directory -processors 4
```

Here is an example of the amount of compression that can be realized by converting:
```
ls -ltrsh my_pytorch.*
5.5G -rw-r--r-- 1 wang wang 5.5G Mar 14 20:45 my_pytorch.ext3
2.2G -rw-r--r-- 1 wang wang 2.2G Mar 14 20:54 my_pytorch.sqf
```

Notice that it saves over 3GB of storage in this case, though your results may vary.

#### Use a squashFS Image for Running Jobs

You can use squashFS images similarly to the ext3 images.
```
singularity exec --overlay /scratch/<NetID>/pytorch-example/my_pytorch.sqf:ro /scratch/work/public/singularity/cuda12.1.1-cudnn8.9.0-devel-ubuntu22.04.2.sif  /bin/bash -c 'source /ext3/env.sh; python -c "import torch; print(torch.__file__); print(torch.__version__)"'

#example output: /ext3/miniforge3/lib/python3.8/site-packages/torch/__init__.py
#example output: 1.8.0+cu111
```

#### Adding Packages to a Full ext3 or squashFS Image 

If the first ext3 overlay image runs out of space or you are using a squashFS conda enviorment, but need to install a new package inside, please copy another writable ext3 overlay image to work together.

Open the first image in read only mode
```
cp -rp /scratch/work/public/overlay-fs-ext3/overlay-2GB-100K.ext3.gz .
gunzip overlay-2GB-100K.ext3.gz

singularity exec --overlay overlay-2GB-100K.ext3 --overlay /scratch/<NetID>/pytorch-example/my_pytorch.ext3:ro /scratch/work/public/singularity/cuda12.1.1-cudnn8.9.0-devel-ubuntu-22.04.2.sif 
/bin/bash
source /ext3/env.sh
pip install tensorboard
```

***Note:*** Click here for information on how to configure your conda environment.

Please also keep in mind that once the overlay image is opened in default read-write mode, the file will be locked. You will not be able to open it from a new process. Once the overlay is opened either in read-write or read-only mode, it cannot be opened in RW mode from other processes either. For production jobs to run, the overlay image should be open in read-only mode. You can run many jobs at the same time as long as they are run in read-only mode. In this ways, it will protect the computation software environment, software packages are not allowed to change when there are jobs running. 

### Julia Singularity Image
Singularity can be used to set up a Julia environment.

Create a directory for your julia work, such as `/scratch/<NetID>/julia`, and then change to your home directory. An example is shown below.
```
mkdir /home/<NetID>/julia
cd /home/<NetID>/julia
```

Copy an overlay image, such as the 2GB 100K overlay, which generally has enough storage for Julia packages. Once copied, unzip to the same folder, rename to julia-pkgs.ext3
```
cp -rp /scratch/work/public/overlay-fs-ext3/overlay-2GB-100K.ext3.gz .
gunzip overlay-2GB-100K.ext3.gz
mv overlay-2GB-100K.ext3 julia-pkgs.ext3
```

Copy the following wrapper script in the directory
```
cp -rp /share/apps/utils/julia-setup/* .
```

Now launch writable Singularity overlay to install packages
```
module purge
module load knitro/12.3.0
module load julia/1.5.3

~/julia/my-julia-writable

using Pkg
Pkg.add("KNITRO")
Pkg.add("JuMP")
```

Now exit from the container to launch a read only version to test (example below)
```
~/julia/my-julia
              _
  _       _ _(_)_     |  Documentation: https://docs.julialang.org
  (_)     | (_) (_)    |
  _ _   _| |_  __ _   |  Type "?" for help, "]?" for Pkg help.
  | | | | | | |/ _` |  |
  | | |_| | | | (_| |  |  Version 1.5.3 (2020-11-09)
_/ |\__'_|_|_|\__'_|  |  Official https://julialang.org/ release
|__/                   |

julia> using Pkg

julia> using JuMP, KNITRO

julia> m = Model(with_optimizer(KNITRO.Optimizer))
A JuMP Model
Feasibility problem with:
Variables: 0
Model mode: AUTOMATIC
CachingOptimizer state: EMPTY_OPTIMIZER
Solver name: Knitro

julia> @variable(m, x1 >= 0)
x1

julia> @variable(m, x2 >= 0)
x2

julia> @NLconstraint(m, x1*x2 == 0)
x1 * x2 - 0.0 = 0

julia> @NLobjective(m, Min, x1*(1-x2^2))

julia> optimize!(m)
```

You can make the above code into a julia script to test batch jobs. Save the following as test-knitro.jl
```
using Pkg
using JuMP, KNITRO
m = Model(with_optimizer(KNITRO.Optimizer))
@variable(m, x1 >= 0)
@variable(m, x2 >= 0)
@NLconstraint(m, x1*x2 == 0)
@NLobjective(m, Min, x1*(1-x2^2))
optimize!(m)
```

You can add additional packages with commands like the one below (***NOTE***: Please do not install new packages when you have Julia jobs running, this may create issues with your Julia installation)
```
~/julia/my-julia-writable -e 'using Pkg; Pkg.add(["Calculus", "LinearAlgebra"])'
```

Run a SLURM job to test with the following sbatch command (e.g. julia-test.SBATCH)
```
#!/bin/bash 

#SBATCH --nodes=1
#SBATCH --ntasks-per-node=1
#SBATCH --cpus-per-task=1
#SBATCH --time=1:00:00
#SBATCH --mem=2GB
#SBATCH --job-name=julia-test

module purge
module load julia/1.5.3
module load knitro/12.3.0

~/julia/my-julia test-knitro.jl
```

Then run the command with the following:
```
sbatch julia-test.SBATCH
```

Once the job completes, check the SLURM output (example below)
```
cat slurm-1022969.out

=======================================
           Academic License
       (NOT FOR COMMERCIAL USE)
         Artelys Knitro 12.3.0
=======================================

Knitro presolve eliminated 0 variables and 0 constraints.

datacheck:               0
hessian_no_f:            1
par_numthreads:          1

Problem Characteristics                                 (   Presolved)
-----------------------
Objective goal:  Minimize
Objective type:  general
Number of variables:                                  2 (           2)
    bounded below only:                               2 (           2)
    bounded above only:                               0 (           0)
    bounded below and above:                          0 (           0)
    fixed:                                            0 (           0)
    free:                                             0 (           0)
Number of constraints:                                1 (           1)
    linear equalities:                                0 (           0)
    quadratic equalities:                             0 (           0)
    gen. nonlinear equalities:                        1 (           1)
    linear one-sided inequalities:                    0 (           0)
    quadratic one-sided inequalities:                 0 (           0)
    gen. nonlinear one-sided inequalities:            0 (           0)
    linear two-sided inequalities:                    0 (           0)
    quadratic two-sided inequalities:                 0 (           0)
    gen. nonlinear two-sided inequalities:            0 (           0)
Number of nonzeros in Jacobian:                       2 (           2)
Number of nonzeros in Hessian:                        3 (           3)

Knitro using the Interior-Point/Barrier Direct algorithm.

  Iter      Objective      FeasError   OptError    ||Step||    CGits 
--------  --------------  ----------  ----------  ----------  -------
       0    0.000000e+00   0.000e+00

WARNING: The initial point is a stationary point and only the first order
         optimality conditions have been verified.

EXIT: Locally optimal solution found.

Final Statistics
----------------
Final objective value               =   0.00000000000000e+00
Final feasibility error (abs / rel) =   0.00e+00 / 0.00e+00
Final optimality error  (abs / rel) =   0.00e+00 / 0.00e+00
# of iterations                     =          0 
# of CG iterations                  =          0 
# of function evaluations           =          1
# of gradient evaluations           =          1
# of Hessian evaluations            =          0
Total program time (secs)           =       1.03278 (     1.014 CPU time)
Time spent in evaluations (secs)    =       0.00000

===============================================================================
```

### Using CentOS 8 for Julia (for Module Compatibility)
Building on the previous Julia example, this will demonstrate how to set up a similar environment using the Singularity CentOS 8 image for additional customization. Using the CentOS 8 overlay allows for the loading of modules installed on Greene, such as Knitro 12.3.0

Copy overlay image
```
cp -rp /scratch/work/public/overlay-fs-ext3/overlay-2GB-100K.ext3.gz .
gunzip overlay-2GB-100K.ext3.gz
mv overlay-2GB-100K.ext3 julia-pkgs.ext3
```

The path in this example is `/scratch/<NetID>/julia/julia-pkgs.ext3`

To use modules installed into `/share/apps` you can make two directories
```
mkdir julia-compiled julia-logs
```

Now, in this example, the absoulte paths are as follows
```
/scratch/<NetID>/julia/julia-compiled
/scratch/<NetID>/julia/julia-logs
```

To launch Singularity with overlay images in writable mode to install packages 
```
singularity exec \
        --overlay /scratch/<NetID>/julia/julia-pkgs.ext3 \
        --bind /share/apps \
        --bind /scratch/<NetID>/julia/julia-compiled:/ext3/pkgs/compiled \
        --bind /scratch/<NetID>/julia/julia-logs:/ext3/pkgs/logs  \
        /scratch/work/public/apps/greene/centos-8.2.2004.sif \
        /bin/bash
```

Implement a wrapper script /ext3/env.sh
```
#/bin/bash

export JULIA_DEPOT_PATH=/ext3/pkgs # this changes the default installation path to the environment
source /opt/apps/lmod/lmod/init/bash
module use /share/apps/modulefiles
module purge
module load knitro/12.3.0
module load julia/1.5.3
```

Load julia via the wrapper script and check that it loads properly
```
source /ext3/env.sh
which julia
# example output: /share/apps/julia/1.5.3/bin/julia
julia --version
# example output: julia version 1.5.3
```

Run julia to install packages
```
julia
> using Pkg
> Pkg.add("KNITRO")
> Pkg.add("JuMP")
```

Set up a similar test script like the test-knitro.jl script above. Name it test.jl:
```
using Pkg
using JuMP, KNITRO
m = Model(with_optimizer(KNITRO.Optimizer))
@variable(m, x1 >= 0)
@variable(m, x2 >= 0)
@NLconstraint(m, x1*x2 == 0)
@NLobjective(m, Min, x1*(1-x2^2))
optimize!(m)
```

Now implement a wrapper script named julia into ~/bin, the overlay image is in readonly mode
```
#!/bin/bash

args=''
for i in "$@"; do
    i="${i//\\/\\\\}"
    args="$args \"${i//\"/\\\"}\""
done

module purge

singularity exec \
        --overlay /scratch/<NetID>/julia/julia-pkgs.ext3:ro  \
        --bind /share/apps \
        --bind /scratch/<NetID>/julia/julia-compiled:/ext3/pkgs/compiled \
        --bind /scratch/<NetID>/julia/julia-logs:/ext3/pkgs/logs  \
        /scratch/work/public/apps/greene/centos-8.2.2004.sif \
        /bin/bash -c "
source /ext3/env.sh
julia $args
"
```

Make the wrapper executable
```
chmod 755 ~/bin/julia
```

Test your installation with a SLURM job example. The following code has been put into a file called test-julia-centos.SBATCH
```
#!/bin/bash 

#SBATCH --nodes=1
#SBATCH --ntasks-per-node=1
#SBATCH --cpus-per-task=1
#SBATCH --time=1:00:00
#SBATCH --mem=2GB
#SBATCH --job-name=julia-test
module purge

julia test.jl
```

Run the above with the following:
```
sbatch test-julia-centos.SBATCH
```

Read the output (example below)
```
cat slurm-764085.out 
```

#### Installing New Julia Packages Later

Implement another writable julia-writable with overlay image writable in order to install new Julia packages later
```
cd /home/<NetID>/bin
cp -rp julia julia-writable

#!/bin/bash

args=''
for i in "$@"; do
    i="${i//\\/\\\\}"
    args="$args \"${i//\"/\\\"}\""
done

module purge

singularity exec \
        --overlay /scratch/<NetID>/julia/julia-pkgs.ext3  \
        --bind /share/apps \
        --bind /scratch/<NetID>/julia/julia-compiled:/ext3/pkgs/compiled \
        --bind /scratch/<NetID>/julia/julia-logs:/ext3/pkgs/logs  \
        /scratch/work/public/apps/greene/centos-8.2.2004.sif \
        /bin/bash -c "
source /ext3/env.sh
julia $args
"
```

Check the writable image
```
which julia-writable
#example output: ~/bin/julia-writable
```

Install packages to the writable image
```
julia-writable -e 'using Pkg; Pkg.add(["Calculus", "LinearAlgebra"])'
```

If you do not need host packages installed in /share/apps, you can work with Singularity OS image 
```
/scratch/work/public/singularity/ubuntu-20.04.1.sif 
```

download Julia installation package from [https://julialang-s3.julialang.org/bin/linux/x64/1.5/julia-1.5.3-linux-x86_64.tar.gz](https://julialang-s3.julialang.org/bin/linux/x64/1.5/julia-1.5.3-linux-x86_64.tar.gz)

install Julia to `/ext3`, setup PATH properly. It will be easy to move to other servers in future.

---
toc_max_heading_level: 2
sidebar_position: 2
---

# HPC Foundations

The goal of this exercise is to help you understand the fundamentals **_A to Z_** on effecively navigating the cluster for your research or academic projects.

Before we begin this exercise please make sure you have access to the NYU HPC cluster, if not please review the \[Accessing HPC page].

Login to the Greene cluster with ssh at :
> Accessible under NYU Net ( either via VPN or within campus network )
```sh
greene.hpc.nyu.edu
```

Once logged in, you should notice the **_node_** which you are currently on from the _bash prompt_ as shown below :

```sh
[pp2959@log-3 ~]$
```

Prompts follow the format \[`<user_netid>`@`<node_name>` ~]. As you can see the node name is `log-3` (i.e. `login 3`) which is a login node. You may have logged in to a different node, NYU HPC maintains over 4 login nodes for load balancing, users may end up on any login node each time, when they ssh to the cluster based on traffic. 

Run the command `pwd` or also known as **_print working directory_** to print your current directory:

```sh
pwd
```

The output will look like `/home/Net_ID` as shown below:

```sh
[pp2959@log-3 ~]$ pwd
/home/pp2959
[pp2959@log-3 ~]$
```

This is your linux `home` directory and the `Net_ID` is your linux `user account name` on the cluster. 

The ' _/home/**Net_ID**/_ ' is your **workspace** where you **write and maintain your code base**. This is a limited space intended for maintaining projects or code bases only, **_not_** for storing large datasets OR installation of software, you will use a different space designed specifically for this.

If you list the `/home` directory with the `ls` command as:

```sh
ls /home
```

Then you will list **_all_** users of this cluster. These are the **_Net_ID_**s Or the linux **_user accounts_** of all users on the cluster. 

The `/home` directory in this case is a **shared filesystem** mounted across **all 4 login nodes** on which the user(s) home directories ( like /home/**User_Net_ID**/ ) are located. 


For instance, create a new empty file with `touch` command on whichever login node you are currently at:

```sh
touch new_file.txt
```

And include some text to the file with the `echo` command as:

```sh
echo "some text here and there" > new_file.txt
```

Now, jump to a different login node choosing from 1 to 4 except the one you are currently at, for example jumping to **_log-1_** with ssh as:

```sh
[pp2959@log-3 ~]$ ssh log-1
Last login: Sat Jan  4 17:01:08 2025 from 10.27.28.114
[pp2959@log-1 ~]$ 
```

> **_Notice_** the output, it shows your last login date and time to this particular login node 

Then list the contents of the file that you just created with the `cat` command:

```sh
[pp2959@log-1 ~]$ ls
new_file.txt
[pp2959@log-1 ~]$ cat new_file.txt
some text here and there
```

As you can see, it is the same file, same directory, the same filesystem for all users.

Regardless of whichever login node you may end up on, **_all_** users have access to **_a common_** filesystem that is `/home`. It is important to understand that users read and write files to the same filesystem while logged in from any of the 4 login nodes.

> **_REMEMBER_**
>
> - `/home` is your `personal workspace` having a limited space
> - It is intended as a space for `maintaining code bases only`

Now, `exit` from your current `shell instance` by running the command `exit`:

```sh
[pp2959@log-1 ~]$ exit
logout
Connection to log-1 closed.
[pp2959@log-3 ~]$ 
```

> **IMPORTANT - _Notice the output:_**
>
> 1. The first line tells you that you have logged out of your current **_bash shell_**
> 2. The second line tells you that the **_ssh connection_** to log-1 has been **_closed_** 
> 3. Now you are back to your **_previous login_** node, in this example log-3, that is your previous **_bash shell_**
>
> **_Why is this imporatant to understand_** ? 
> Because this will build your foundations in understanding the different kinds of nodes that exists and how you should use them for your projects 

### Other File Systems

Similar to `/home`, users have access to multiple filesystems that are :

| Filesystem | User(s) space       | Purpose         | Env Variable |
| ---------- | ---------------- | --------------- | --- |
| /home      | /home/**Net_ID**/    | Workspace       | $HOME
| /scratch   | /scratch/**Net_ID**/ | General Storage | $SCRATCH
| /archive   | /archive/**Net_ID**/ | Cold Storage    | $ARCHIVE

You will find more details about these filesystems at \[Greene Storage Types page].

You can jump to your `/scratch` directory at `/scratch/Net_ID/` with the `cd` command as `cd /scratch/Net_ID`, Or you could simple use the `$SCRATCH` environment variable as:

```sh
[pp2959@log-1 ~]$ pwd
/home/pp2959/
[pp2959@log-1 ~]$ cd $SCRATCH
[pp2959@log-1 ~]$ pwd
/scratch/pp2959/
[pp2959@log-1 ~]$
```

Also you can view other user(s) `/scratch` space on the cluster with `ls /scratch`.

```sh
ls /scratch
```

The `/scratch` Space:

- This is a special type of filesystem called **_General Parallel File System_** (GPFS) designed for **_large storage_** and **_high IO (Input/Output) throughput_**, supporting parallel reads and writes for the best performance ! 

- An appropriate data space where **_parallel compute resources_** ingest their datasets (and even write back to it) during very large workloads, such as distributed Deep Learning at scale

- **_All nodes_** in the cluster, that includes login, compute, and data transfer nodes share this filesystem

- This is a **_temporary_** space for loading and unloading large datasets, that is files are **_purged_** with a prior notice, to maintain performance, hence the name **_Scratch_** 

The `/archive` Space:

- An **_archival space_** for your projects, a cold storage option where you stash your work long term

- Cannot be accessed by compute resources

- Never purged 

## Running programs on a `login` node

Login nodes. As the name implies are used for interacting with the cluster only. They are not equiped with compute heavy hardware or much memory, and hence you may run simple programs ( that can lag a bit ) but not compute heavy workloads. 

Let us take a look at an example of running a simple lua script on this type of node, create a lua script file named **_hello.lua_** using **_vim_**, a powerful terminal based text editor:

```sh
[pp2959@log-3 ~]$ vim hello.lua
```

> Running the **_vim_** command followed by a `file_name` as an argument creates a new **_text file_** and opens the editor within the terminal

- Press `i` once open, this will switch the editor to `insert mode`.
- In `insert mode` you can start typing to file (it's a temporary buffer) like anyother text editor

Copy the below lua code and paste it in the editor with `Ctrl-v` ( on windows ) or `Cmd-v` on ( MacOS ):

```lua
os.execute("hostname")
print("hello, world")
```

- Now, Press `Esc` key to escape from `insert mode`

> **_Notice_** how you cannot type anything else after escaping from insert mode, however you can go back to insert mode by clicking on `i` ( short for insert mode )

- Then, Press colon `:` (don't press anything else after), _you should notice the `:` appear near **_bottom left_** corner of the editor_
- This is where you type your `editor commands` like save file, discard changes, open a new file, etc
- **_Continue typing_** `wq`, as in the editor command should look like `:wq`
- Press `Enter` key to execute this command
- This saves the file to your current directory and exits the editor, you should be back on your console now

Again the `:` here is to start _typing_ an editor command, followed by the command(s) themselves. Like `w` is to write changes to the file `hello.lua` followed by `q` to quite from the editor. 

> **_In case_** if you would like to **force quite** and start again, then press `Esc` first to exit from `insert mode`, or anyother mode you may have accidentally enabled. This ensures you are completely exited from any modes, then execute the `editor commands` - `:q!` to force quite discrading changes, here `q` for quite and `!` for _force_

Once done, check the contents of your file with the `cat` command:

```sh
[pp2959@log-3 ~]$ ls
new_file.txt hello.lua
[pp2959@log-3 ~]$ cat hello.lua
os.execute("hostname")
print("hello, world")
[pp2959@log-3 ~]$
```

> Here `os.execute()` executes a shell command, in this example the command `hostname` to print the name of the host on which the script is being executed. Followed by printing the message `hello, world`

Now if you try to run the script as `lua hello.lua`, you may get an error like:

```sh
[pp2959@log-3 ~]$ lua hello.lua
-bash: lua: command not found
[pp2959@log-3 ~]$
```

By default software packages are not installed in our working environment.

**_Now, how do we run this lua script ?_** 
Since we would require a lua installation to do so

So let us try and install lua with linux's `apt-get` package manager:

```sh
apt-get install lua
```

As you can see, we encounter an error like the one below:

```sh
[pp2959@log-3 ~]$ apt-get install lua
-bash: apt-get: command not found
[pp2959@log-3 ~]$
```

`apt-get` does not exist, this is because package managers are not allowed on the cluster as they require `root` privileges for installation.
You will need to load pre-installed software pacakges with a command called `module`. 

First, let's search for any versions of `lua` available by running the command `module spider <Software_Package>`:

```sh
module spider lua 
```

This will list all `lua` packages Or modules available for use, as shown below:

```sh
[pp2959@log-3 ~]$ module spider lua

--------------------------------------------------------------
  lua: lua/5.3.6
--------------------------------------------------------------

    This module can be loaded directly: module load lua/5.3.6


[pp2959@log-3 ~]$
```

Read the output carefully, we can see a lua package is available that is `lua/5.3.6` in this example.

If the system administrators add new lua packages sometime in the future then, they appear in the above list, from which you could choose any one of them. 

Pick a version from this list, in this example we select the version `lua/5.3.6`. 

You can also check **_what_** modules are loaded in your current **_shell session_** with the command `module list`:

```sh
module list
```

```sh
[pp2959@log-3 ~]$ module list
No modules loaded
[pp2959@log-3 ~]$
```

To load the lua module, we use the `module load` command as `module load <Software_Package>`:

```sh
module load lua/5.3.6
```

Now, check and verify that the module has been loaded to your current **_shell environment_** with:

```sh
module list
```

Read the output carefully, you may notice that sometimes dependencies are also loaded along with a module.

Verify that we can invoke lua by running `lua -v`, the option `-v` is to print version details:

```sh
lua -v
```

Now, run the lua script `hello.lua`.

```sh
lua hello.lua
```

```sh
[pp2959@log-3 ~]$ lua hello.lua
log-3
hello, world
[pp2959@log-3 ~]$
```

> **_NOTICE:_** First line of this output is the name of the `host` where the script ran, followed by the message `hello, world`

This way we can search for available modules with the command `module spider <Software_Package>` using keywords.

To list **_ALL_** modules try `module spider` without providing any keywords:

```sh
module spider
```

This will open up an **_interactive_** list of **_all_** modules, in linux this is called `paging`.  

To navigate this list (`paging`) try the following steps carefully:
    - Press and hold `j` key to go down
    - Press and hold `k` key to go up
    - Just Click `/` once (don't click anything else after):
        - You will notice the `/` character at the bottom left corner just like in vim
        - **_Continue typing_** the keywords for your module name, for example just type `pytho`
        - Press `Enter`
        - This will bring up matching module names based on those keywords
        - Click `n`, to jump to a next match
        - Similarly, Click `N` to jump to a previous match
    - And finally, to exit from the list just like in vim, use the quit command `:q`
    - Retry, practise.

To unload a module try `module unload <Module_Name>`:

```sh
module unload lua/5.3.6
```
```sh
[pp2959@log-3 ~]$ module list

Currently Loaded Modules:
  1) lua/5.3.6



[pp2959@log-3 ~]$ module unload lua/5.3.6
[pp2959@log-3 ~]$ module list
No modules loaded
[pp2959@log-3 ~]$
```

**_To get rid of all module and start a new, try:_**

```sh
module purge
```

And for more options, try:

```sh
module --help
```

> **_RECAP_**
>
> - `login nodes` are ... 
> - `/home` filesystem and it's purpose
> - Load necessary `modules` to run our programs

## Running Programs on a `Compute` Node

The Greene cluster has over 100s of compute nodes equiped with all kinds of High Performance hardware such as x86 Intel, AMD server CPUs, and Nvidia, AMD server GPUs ( such as the H100s ).

Some of these nodes are categorized as shown below with examples:

Node Category | Description 
------------- | ----------- 
CPU Nodes | **CPU only nodes with sufficient memory**. For example 48 core Intel Cascade lake CPU with 384 GB memory, **_per node_**
Nvidia GPU Nodes | **Nodes that are equiped with Nvidia GPUs**. For example 48 Core Intel server CPU with 384 GB and 4 H100s, per node
AMD GPU Nodes | **Equiped with AMD GPUs**. For example 128 core CPU with 512 GB ram and 8 MI250s, per node

And these nodes are interconnected with **_low latency, high throughput interconnects_** that follow a specific network topology, for example infiniband or ethernet cables. **_And hence it is called as a Cluster_**.

Communication between these nodes takes place with the help of **_message passing protocols_** implemented as a software library. For example Open Source MPI - Message Passing Interface library for inter node communications, or Proprietary NCCL library for communication between Nvidia GPUs across nodes. 

Usually these nodes are busy running programs at high workloads, in order to run your `hello.lua` script on one of these (or across many) nodes, you will have to submit a `job request` which gets `queued` and `scheduled` on the compute node(s) based on priority and availability of resources. 

To do so, we use a `Job Scheduler`, Or also called a workload manager, that manages submitted `jobs` by user(s).

Greene makes use of an Open Source workload manager called `SLURM` which stands for "Simple Linux Utility for Resource Management".


> Make sure that you have loaded the lua `module` before proceeding:
```sh
module load lua/5.3.6
```

To run your `hello.lua` on a compute node we use the `srun` command as shown below:

```sh
srun lua hello.lua
```

```sh
[pp2959@log-2 ~]$ srun lua hello.lua
srun: job 55744835 queued and waiting for resources
srun: job 55744835 has been allocated resources
cm001.hpc.nyu.edu
hello, world
[pp2959@log-2 ~]$
```

> **_Read the Output carefully_**
>
> 1. This job is given an **_id_** that is `55744835`, this is called a `job id`.
> 
> 2. The job `job 55744835` is `queued and waiting` to be scheduled on a compute node, since these nodes are expected to be busy based on demand, it may take some time for your job to be scheduled 
> 
> 3. Once the `job` gets `scheduled`, your program `lua hello.lua` gets run on a chosen `compute node(s)` and the program's output is printed back to your console 
> 
> 4. Based on your output, you may notice the name of the compute node that this program runs on, the node `cm001.hpc.nyu.ed` in this example is a CPU only node, you may notice a different node. You can find more details about the \[specific nodes here].

<br/>

**_Now how do we determine Or specify the amount of resources needed to run our `hello.lua` script ?_**

By defualt slurm schedules just **_1 CPU_** and **_1 GB_** memory to run your programs.

In order to get sufficient resources, you will need to `request` them to `SLURM` by passing the appropriate options with `srun` command as shown below:

```sh
srun --cpus-per-task=4 --mem=8GB lua hello.lua
```
```sh
[pp2959@log-2 ~]$ srun --cpus-per-task=4 --mem=8GB lua hello.lua
srun: job 55744916 queued and waiting for resources
srun: job 55744916 has been allocated resources
hello, world
[pp2959@log-2 ~]$
```

- This will send in a `job request` for `4 cores` and `8 GB` memory to `SLURM` 
- Slurm will queue this `job request` along with many other job requests submitted by users across the cluster 
- Then it will lookup for a compute node that has sufficient resources pertaining to your job
- Once found, it `reserves` the resources and `schedules your job` on **_this particular compute node_** 
- Your job, in this case the command `lua hello.lua` runs independently on the compute node, unless either explicitly canceled by invoking `scancel` command (which you will learn next) OR your program errors out

We can check the status of our submitted jobs by using the `squeue` command. 

To do so open a **_new second_** terminal and ssh to `greene.hpc.nyu.edu`.

In the **first** terminal Submit a job that executes linux `sleep` command as shown below, ( make sure you have logged in to `greene.hpc.nyu.edu` at your second terminal before running the below command ):

```sh
srun --cpus-per-task=4 --mem=8GB /bin/bash -c "echo 'sleep 120s' ; sleep 120"
```

> **_In this Script:_** We are executing a bash script `echo 'sleep 120s' ; sleep 120` where `echo` prints the strings `sleep 120s` followed by `;`, indicating a next command, a second command : `sleep 120` to sleep for 120 seconds. All executed within a `bash shell`

Then in the **_second terminal_**, execute `squeue` command as:

```sh
squeue --me
```

You should see an output like the one below:

```sh
[pp2959@log-2 ~]$ squeue --me
             JOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST(REASON)
          55747638     short     bash   pp2959  R       0:02      1 cm002
[pp2959@log-2 ~]$
```

- Running `squeue` will print the statuses of **_all jobs_** submitted by **_all users_** on the cluster
- Running `squeue --me` will print only the jobs submitted  by you 
- Running `squeue -u <Net_ID>` will print out the jobs submitted by a particular user
- And running `squeue --job <Job_ID>` will print the status of a particular job given it's `job id`
- Try `squeue --help` for more options

Again, submit a new job this time to execute the `sleep` for 5 mins or **_300 seconds_**:

```sh
srun --cpus-per-task=4 --mem=8GB /bin/bash -c "echo sleep 300s; sleep 300"
```

Copy the `job id` that you get. And check it's status with `squeue` as: 

```sh
squeue --job <Job_ID>
```

Then in the second terminal execute `scancel` with your job id as:

```sh
scancel <Job_ID>
```

> Replacing **\<Job_ID>** above with the actual job id

This cancels your job either `queued` or already `scheduled` on a compute node.

- `scancel <Job_ID>` cancels a particular job based on the job id
- `scancel --me` cancels all of your jobs 

To run jobs with a gpu use the `gres` option:

```sh
srun --cpus-per-task=4 --mem=8GB --gres=gpu:1 lua hello.lua
```

- `--gres=gpu:1` to request **one** gpu of any type
- `--gres=gpu:v100:1` to request **one** v100 gpu specifically

> **_Now note the following carefully:_**

Most of the time your jobs are queued and may never be scheduled because of demand and competition for resources. Therefore, it is crucial in understanding how `SLURM` schedules jobs so that you may properly craft job requests that get scheduled faster, for this you will need to consider **_two_** things:

**FIRST:** Jobs are scheduled based on `priority`, higher priority jobs are scheduled first before lower priority jobs.

**SECOND:** However, `Backfill Scheduling` overrides `priority`: 

    - Backfill scheduling is a technique that considers 2 things, a job's `resource requirements` and it's expected `lifetime`. Based on these 2 factors, a `low priority` job that would require **_less compute_** and is expected to run for a **_short time_** may get scheduled before a `high priority` job waiting in queue inorder to `backfill` gaps in compute pools on a `regular basis`.

Therefore, it is crucial to be thoughtful, by requesting only the `necessary compute resources` to run your programs and specifying a reasonable `lifetime` that your job is expected to last.

Thus, it is important to include the `--time` option for every job that you submit, for example `--time=00:40:00` specifies that your job may last for 40 minutes max. `--time` follows the format `HH:MM:SS` :

```sh
srun --cpus-per-task=4 --mem=8GB --gres=gpu:1 --time=00:02:00 lua hello.lua
```

check `srun --help` for more options:

```sh
srun --help
```

So far we have seen on "_how to submit jobs_" for a single node, we can even submit jobs for _multiple nodes_, or also called `tasks`.

We can ask slurm to schedule multiple `tasks` to run our programs `concurrently`. For example consider we require `2 tasks`: '_Task A that does work A_' and '_Task B that does work B_' where, both of these tasks can be done **_independently_** and **_simultaneously_**. They **do not** depend on eachother. For example, consider a simple modification for our `hello.lua` script below:

```lua
local hostname = io.popen('hostname'):read()
local task = 0
if task == 0 then print(hostname .. " (Task A): hello, world") end
if task == 1 then print(hostname .. " (Task B): hello, world") end
```

Modify your current `hello.lua` as above and run it as:

```lua
lua hello.lua
```

> **_Observe the code_**, we extract `name of the host` which this program runs on by executing the command `hostname` within the lua script, using lua's `io.popen()` method which returns the exectued command's outputs as a `file` ( stdout file in linux ). We `read` this file with `:read()` method to get the contents as `string` in this case the `host's name` as a string.  

The output should look like the one below:

```sh
[pp2959@log-1 ~]$ lua hello.lua
log-1 (Task A): hello, world
[pp2959@log-1 ~]$
```

We observe that, with the **_task variable_** set to 0 in the script, we end up executing the `task` of printing the message `(Task A): hello, world` on log-1, in this example. 

Similarly if we set the **_task variable_** to 1 then we end up printing the message `(Task B): hello, world` as shown below: 

```sh
[pp2959@log-2 ~]$ cat hello.lua
local hostname = io.popen('hostname'):read()
local task = 1
if task == 0 then print(hostname .. " (Task A): hello, world") end
if task == 1 then print(hostname .. " (Task B): hello, world") end
[pp2959@log-2 ~]$ lua hello.lua
log-2 (Task B): hello, world
[pp2959@log-2 ~]$
```

**_Carefully notice how both_** of the tasks are **_independent_** and **_simultaneously_** executable.

**_So the question would be "how can we execute both of these `tasks` simultaneously" in a single job submission making use of sufficient resources_**

To do so we can specify the option `--tasks` in our `srun` command like:

```lua
srun --tasks=2 --cpus-per-task=4 --mem=4GB --time=05:00 lua hello.lua
```

And the output may look like below:

```sh
[pp2959@log-2 ~]$ cat hello.lua
local hostname = io.popen('hostname'):read()
local task = 1
if task == 0 then print(hostname .. " (Task A): hello, world") end
if task == 1 then print(hostname .. " (Task B): hello, world") end
[pp2959@log-2 ~]$ srun --tasks=2 --cpus-per-task=4 --mem=4GB --time=05:00 lua hello.lua
srun: job 55792604 queued and waiting for resources
srun: job 55792604 has been allocated resources
cm004.hpc.nyu.edu (Task B): hello, world
cm004.hpc.nyu.edu (Task B): hello, world
[pp2959@log-2 ~]$
```

> **_Notice_** that the task variable is set to `1` in the above example

**_Based on the outputs_** you can observe that we ran our program twice, this is because we specified for 2 `tasks`, where slurm schedules 4 CPUs and 4GB of memory **_in total_** and distributes 2 CPUs per task (tasks share the memory pool).

Usually tasks are run either on the same node, or on different nodes depending on the availability of resources. In this example, both the tasks ran on a same compute node that is `cm004.hpc.nyu.edu`.  

If you would like to explicitly run tasks on different nodes then you may use the `--nodes` option as:

```lua
srun --nodes=2 --cpus-per-task=4 --mem=4GB --time=05:00 lua hello.lua
```
```sh
[pp2959@log-2 ~]$ srun --nodes=2 --cpus-per-task=4 --mem=4GB --time=05:00 lua hello.lua
srun: job 55792637 queued and waiting for resources
srun: job 55792637 has been allocated resources
cm010.hpc.nyu.edu (Task B): hello, world
cm011.hpc.nyu.edu (Task B): hello, world
[pp2959@log-2 ~]$
```

> **_Note:_** Two different nodes are utilized in the example above, `cm010.hpc.nyu.edu` and `cm011.hpc.nyu.edu`.

**_Now, we know that our lua script can be executed simultaneously, then how do we execute two different independent tasks like the tasks of printing 2 different 'hello, world' messages ?_** 

We can do so with the help of `slurm environment variables`, specifically the variable `SLURM_PROCID`, short of slurm process id.

For example execute the tasks again, this time print the `SLURM_PROCID` env variable:

```sh
srun --tasks=2 --cpus-per-task=4 --mem=4GB --time=05:00 printenv SLURM_PROCID
```

> **_In this job_** we are executing `printenv` command 
 to print the value of `SLURM_PROCID` environment variable

And the output should look something like this:

```sh
[pp2959@log-1 ~]$ srun --tasks=2 --cpus-per-task=4 --mem=4GB --time=05:00 printenv SLURM_PROCID
srun: job 55768908 queued and waiting for resources
srun: job 55768908 has been allocated resources
1
0
[pp2959@log-1 ~]$
```

> **_Observe how the env variable `SLURM_PROCID` is different for both the tasks_**

**_This way you can distinguish tasks within a task_**. And therefore let us modify the `hello.lua` script to read from env variables as shown below :

```lua
local hostname = io.popen('hostname'):read()
local task = tonumber(os.getenv("SLURM_PROCID"))
if task == 0 then print(hostname .. " (Task A): hello, world") end
if task == 1 then print(hostname .. " (Task B): hello, world") end
```

> **_In this modified script_** we read the env variable `SLURM_PROCID` as a string (by default) and convert it to a number with `tonumber()` method

And test it without setting any env variables:

```sh
lua hello.lua
```

We should get the expected behavior as shown:

```sh
[pp2959@log-1 ~]$ lua hello.lua
[pp2959@log-1 ~]$
```

No message is printed above because we have not set the `SLURM_PROCID` env variable yet and so the task variable within the lua script is `nil` (NULL value), SLURM sets this variable accordingly once we submit our job.

Now, let us submit a job with `2 tasks`:

```sh
srun --tasks=2 --cpus-per-task=4 --mem=4GB --time=05:00 lua hello.lua
```

You should get an output like below:

```sh
[pp2959@log-2 ~]$ srun --tasks=2 --cpus-per-task=4 --mem=4GB --time=05:00 lua hello.lua
srun: job 55792659 queued and waiting for resources
srun: job 55792659 has been allocated resources
cm004.hpc.nyu.edu (Task A): hello, world
cm004.hpc.nyu.edu (Task B): hello, world
[pp2959@log-2 ~]$
```

We successfully ran the same script twice `simultaneously` that performs two different independent tasks based on a task id or in this case `SLURM_PROCID`.

Slurm offers many environment variables to work with, you can find the full list of slurm environment variables at the [slurm documentation page](https://slurm.schedmd.com/sbatch.html#SECTION_INPUT-ENVIRONMENT-VARIABLES).


To explicitly perform tasks across two different nodes replace `--tasks` with `--nodes` as:

```sh
srun --nodes=2 --cpus-per-task=4 --mem=4GB --time=05:00 lua hello.lua
```
```sh
[pp2959@log-2 ~]$ srun --nodes=2 --cpus-per-task=4 --mem=4GB --time=05:00 lua hello.lua
srun: job 55792666 queued and waiting for resources
srun: job 55792666 has been allocated resources
cm028.hpc.nyu.edu (Task A): hello, world
cm029.hpc.nyu.edu (Task B): hello, world
[pp2959@log-2 ~]$
```

> And notice how the tasks are performed on two separate nodes from the hostnames

You can even perform multiple tasks per node with the option `--tasks-per-node` along with `--nodes` for example:

```sh
srun --nodes=2 --tasks-per-node=1 --cpus-per-task=4 --mem=4GB --time=05:00 lua hello.lua
```
```sh
[pp2959@log-2 ~]$ srun --nodes=2 --tasks-per-node=1 --cpus-per-task=4 --mem=4GB --time=05:00 lua hello.lua
srun: job 55792708 queued and waiting for resources
srun: job 55792708 has been allocated resources
cm043.hpc.nyu.edu (Task B): hello, world
cm042.hpc.nyu.edu (Task A): hello, world
[pp2959@log-2 ~]$
```

Also, for debugging purposes it is recommended to use the `--label` option as:

```sh
srun --label --nodes=1 --tasks-per-node=2 --cpus-per-task=4 --mem=4GB --time=05:00 lua hello.lua
```

This will prepend the task id label with your program's outputs as shown below:

```sh
[pp2959@log-2 ~]$ srun --label --nodes=1 --tasks-per-node=2 --cpus-per-task=4 --mem=4GB --time=05:00 lua hello.lua
srun: job 56142474 queued and waiting for resources
srun: job 56142474 has been allocated resources
1: cm025.hpc.nyu.edu (Task B): hello, world
0: cm025.hpc.nyu.edu (Task A): hello, world
[pp2959@log-2 ~]$
```

> **_NOTE:_**
>
> - In the above example, both the tasks 0 and 1 ran simultaneously and their outputs are line buffered, meaning whichever task prints a line first it's output is displayed first.
>
> - For example outputs from `task 1` may get printed first before `task 0` during their concurrent execution and hence we see `task 1`'s output first in the above example. **_You cannot expect 'output lines' from 'concurrently executing tasks' to be printed in any order_**. Lines are printed in any arbitary order depending on whichever task prints first. 
>
> - Therefore, it is recommended to use the `--label` option for keeping track of which lines in the output belongs to which tasks during their concurrent execution. 
>
> - `--label` labels standard output of tasks based on task ID from 0 to N.

So far we understood that slurm chooses '_on which nodes our programs should run on_' based on it's scheduling decisions, however it also provides more control like specifying explicitly on which `partition` we can run our programs on.

Here partitions are similar nodes grouped together as a list. For example H100 nodes are grouped together as a partition named `H100_Partition`. Whenever we submit a job request for H100s then nodes sequentially along this partition are reserved and our job is scheduled on them.

You can check the list of **_all partitions_** and their **_compute node list_** with the `sinfo` command. This will provide you with more information about the partitions, and their statuses:

```sh
sinfo
```

To specify a particular partition, you can use the `--partition` option as shown below:

```sh
srun --partition=cs --nodes=2 --tasks-per-node=1 --cpus-per-task=4 --mem=4GB --time=05:00 lua hello.lua
```



> **_(A) SLURM OVERVIEW_**
> 
> - Users submit jobs on the cluster. 
> 
> - Slurm ( or also called slurm controller ) that runs exclusively on it's own node, `queues` up these submitted jobs based on `priority` and schedules them across compute nodes based on the jobs' `compute requirements` and expected `execution time` (Priority, and Backfill scheduling).
> 
> - Once a job has been `scheduled` on a compute node(s) it runs without interruption. The slurm controller continously monitors the job's status throughout it's life cycle and manages a `database` ( i.e. MySQL ) where it temporarily maintains the `status` of all running jobs across the cluster.   
> 
> - Whenever users make a slurm query such as the `squeue` command, to check on the status of their jobs ( or anyother slurm commands ). Such commands invoke a `Remote Procedure Call` (RPC for short) to the slurm controller, that fetches the job's status from it's database for the user. 
>
> - **Too many RPCs** to the slurm controller in a short span of time may result in overloading of operations on the slurm's database. **_Resulting in slurm's poor performance_** ( RPCs are usually not rate limited for various reasons )
>
> - Hence it is **recommended** to _takecare_ Or **limit invoking slurm commands very frequently** in case of invoking them within a bash script or a python script
>
> - **_Failing_** to follow may result in the user account being **_suspended_**


> **_(B) IMPORTANT NOTE !_**
>
> It is **_crucial_** to understand everything until this point, this builds your foundations in understanding further topics covered from this point onwards.
> Please make sure to cover all the topics until this point in case you may have missed anything. It gets easier from here.


> **_RECAP:_**
> 
> - So far we have learn what compute clusters are ...
> - How srun works ...
> - squeue ...
> - scancel ... 
> - And more ...


## Submitting `Batch jobs`

Previously we have seen how we could submit individual `interactive jobs` mostly to run individual programs, however there is an issue with this method :

> **_What happens if we get disconnected from our ssh session while running our jobs ?_**
> 
> - To understand this we need to understand how `ssh sessions` and `bash shells` are setup in our case
>
> - First, when we ssh to `greene.hpc.nyu.edu`, we land on a `login node` running a `bash shell`, the console is our shell where we execute the linux commands
> 
> - Then when we submit a job with `srun`, our program runs **_within_** a `new bash sub-shell` belonging to this particular **_srun_** within which slurm sets the necessary environment variables accordingly, like the `SLURM_PROCID` environment variable as we have seen before 
> 
> - Therefore, "hello, world" `output(s)` printed by this program executing on `compute node(s)` are `buffered` all the way from their `sub-shell(s)` to our `bash shell` running on the login node, and are displayed line after line on console
> 
> - Hence, if our `ssh gets disconnected` for any reason, the `current bash shell is destroyed`, and the job currently being executed within this `sub-shell` is `cancelled`

Therefore, we make use of `slurm batch` scripts also called `sbatch` instead of interactive jobs. Basically they are simple bash scripts `with special directives` that we **_submit to slurm_** instead of running them interactively.

Within a `sbatch` script we either specify a single job by invoking `srun` or **_batch multiple jobs_** by invoking multiple `srun` and **_submit it to slurm_** under a single job id hence called a `batch job`. 

Once we submit a `batch job`, they are independently scheduled regardless of what happens to our shell. We can safely disconnect from our ssh session, and return later on to check on the status of our submitted batch job.

> **_NOTE_**: 
>
> **_Submitting Batch jobs is the preferred way of submitting jobs to slurm_**

A simple batch job can be written as :

```sh
#!/bin/bash

#SBATCH --nodes=1
#SBATCH --tasks-per-node=1
#SBATCH --cpus-per-task=1
#SBATCH --mem=1GB
#SBATCH --time=00:05:00

srun /bin/bash -c "sleep 60; echo 'hello, world' "
```

As you can see, we provide the familiar slurm options in a format that is `#SBATCH`, these are called slurm `directives` in our bash script.  

Create a batch script like the above named `hello.sbatch` and submit it using the `sbatch` command:

```sh
sbatch hello.sbatch
```

Check the status of this job with:

```sh
squeue --me
```

Once done, notice that in the same directory from where you submitted this job, there is a new file created `slurm-55815161.out`, where the number `55815161` is the **_job id_** in this example.

Check the contents of this file:

```sh
cat slurm-<Job_ID>.out
```
```sh
[pp2959@log-1 slurm_hello_world]$ cat slurm-55815161.out
hello, world
[pp2959@log-1 slurm_hello_world]$
```

This is the output of your job. A new file is created by default named `slurm-<Job_ID>.out` and the outputs are written to it.

You can write the outputs to a custom file name for example `hello.out` using the directive `#SBATCH --output=hello.out`. Add this directive to your `hello.sbatch` file as shown below:

```sh
#!/bin/bash

#SBATCH --nodes=1
#SBATCH --tasks-per-node=1
#SBATCH --cpus-per-task=1
#SBATCH --mem=1GB
#SBATCH --time=00:05:00

#SBATCH --output=hello.out

srun /bin/bash -c "echo 'hello, world' "
```

And re-submit your batch job:

```sh
sbatch hello.sbatch
```

You should notice a new file `hello.out` gets created, and your `hello, world` message output is redirected to this file.

```sh
[pp2959@log-1 slurm_hello_world]$ cat hello.out
hello, world
[pp2959@log-1 slurm_hello_world]$
```

By default **_error messages_** that gets generated by your programs are redirected to the same output file, but you can also specify an exclusive file just for writing error messages at, using the directive `#SBATCH --error=hello.err` in this example.

Modify `hello.sbatch` to include this directive and also a modified program that prints `hello, world` then throws an **_error_** with exit code `1`:

```sh
#!/bin/bash

#SBATCH --nodes=1
#SBATCH --tasks-per-node=1
#SBATCH --cpus-per-task=1
#SBATCH --mem=1GB

#SBATCH --output=hello.out
#SBATCH --error=hello.err

srun /bin/bash -c "echo 'hello, world'; exit 1"
```

Submit this job:

```sh
sbatch hello.sbatch
```

Once done check both, output and error outputs of your program:

```sh
[pp2959@log-3 slurm_hello_world]$ cat hello.err
srun: error: cm013: task 0: Exited with exit code 1
srun: Terminating StepId=55815589.0
[pp2959@log-3 slurm_hello_world]$ cat hello.out
hello, world
[pp2959@log-3 slurm_hello_world]$
```

> The error messages are redirected to a seperate file `hello.err`

In this example the error message states as follows, 

- In the first line, slurm tells us that the program running on host `cm013`, which is a compute node, with task 0, for this particular `srun` exited with an error message of exit code 1, since we used `exit 1` in our bash script. You may use any error codes from 1 to 255 for debugging purposes, where code 0 is to exit with no errors.
- Also we have a `StepId` in this error message as `StepId=55815589.0`. Here this particular `srun` is assigned a step id of 0. 
- Invoking a `srun` is also called a `job step` in a `batch job`.

We can invoke multiple `job steps` within our `batch job` as shown below:

```sh
#!/bin/bash

#SBATCH --nodes=1
#SBATCH --tasks-per-node=1
#SBATCH --cpus-per-task=1
#SBATCH --mem=1GB

#SBATCH --output=hello.out
#SBATCH --error=hello.err

srun --time=02:00 /bin/bash -c "echo '(step 0): hello, world'; "
srun --time=02:00 /bin/bash -c "echo '(step 1): hello, world'; "
```

Every `srun` declared in the `batch script` is called a `job step` that will get it's own `step id` from 0 to N.

Modify `hello.sbatch` file with the above code and submit the batch job:

```sh
sbatch hello.sbatch
```

Now instead of squeue, you can check the status of your batch jobs with the command `sacct` or also known as `slurm accounting`, this is a much easier method of observing your batch jobs than using squeue.

Once the job is done, check it's history with slurm accounting as:

```sh
sacct --jobs <Batch_Job_ID>
```

And the output should look like this:

```sh
[pp2959@log-1 ~]$ sacct -jobs 55879998
JobID           JobName  Partition    Account  AllocCPUS      State ExitCode
------------ ---------- ---------- ---------- ---------- ---------- --------
55879998     hello.sba+      short      users          1  COMPLETED      0:0
55879998.ba+      batch                 users          1  COMPLETED      0:0
55879998.ex+     extern                 users          1  COMPLETED      0:0
55879998.0         bash                 users          1  COMPLETED      0:0
55879998.1         bash                 users          1  COMPLETED      0:0
[pp2959@log-1 ~]$ 
```

Let's disect the output,
- Every row is a timeline of your `batch job`'s execution each step at a time. 
- Observe that the first step is the submission of your batch script named `hello.sbatch` to slurm as indicated in `JobName` column as `hello.sba+`, here `+` indicates more letters. 
- Also notice that the `short` partition is selected for this job as indicated at `Partition` column.
- The second row, or next step is the `resource allocation` step for this particular batch job also called `batch step` given a Job ID of `55879998.batch`, seen as `55879998.ba+` at `JobID` column.
- Third row is an `external step` that accounts for all resource usage by this job given a Job ID of `55879998.extern` or `55879998.ex+`.
- And the subsequent steps are the `normal steps` created when `srun` is invoked within the script in the format as `<Job_ID>.<Step_ID>`, in this example `55879998.0` and `55879998.1`. 
- Do observe how `normal steps` have their own `State` and `ExitCodes` columns. The State of these two steps is `COMPLETED` and their exit codes are `0:0` which means they completed without any errors. So for example if one of the steps say `step 0` exits because of an error, then it's `State` will change to `Failed` and it's `ExitCode` will be displayed there.

Let's consider the below example:

```sh
#!/bin/bash

#SBATCH --nodes=1
#SBATCH --tasks-per-node=1
#SBATCH --cpus-per-task=1
#SBATCH --mem=1GB

#SBATCH --output=hello.out
#SBATCH --error=hello.err

srun --time=02:00 /bin/bash -c "echo '(step 0): hello, world'; exit 1 "
srun --time=02:00 /bin/bash -c "echo '(step 1): hello, world'; "
```

Modify the `hello.sbatch` script with the above code and submit the job, once done check it's accounting with `sacct`:

```sh
[pp2959@log-1 slurm_hello_world]$ sacct -j 55880839
JobID           JobName  Partition    Account  AllocCPUS      State ExitCode
------------ ---------- ---------- ---------- ---------- ---------- --------
55880839     hello.sba+      short      users          1  COMPLETED      0:0
55880839.ba+      batch                 users          1  COMPLETED      0:0
55880839.ex+     extern                 users          1  COMPLETED      0:0
55880839.0         bash                 users          1     FAILED      1:0
55880839.1         bash                 users          1  COMPLETED      0:0
[pp2959@log-1 slurm_hello_world]$
```

Observe the `state` of each step. In this example the following "_Batch job submission step_" (`55880839`), "_resource allocation step_" (`55880839.ba+`), and "_batch script execution step_" (`55880839.ex+`) are `COMPLETED` successfully based on their `State` columns, but the first "_normal step_" (`55880839.0`) `FAILED` with exit code `1`, whereas the second "normal step" (`55880839.1`) `COMPLETED` successfully.

You can verify this from your output files `hello.out` and `hello.err`:

```sh
cat hello.out hello.err
```

```sh
[pp2959@log-1 slurm_hello_world]$ cat hello.out hello.err
(step 0): hello, world
(step 1): hello, world
srun: error: cm009: task 0: Exited with exit code 1
srun: Terminating StepId=55880839.0
[pp2959@log-1 slurm_hello_world]$
```

We can even control how we `distribute` resources among these steps by passing options to `srun` as usual.

For example let's allocate a pool of 4 CPUs and 8 GB memory for a batch job, then `distribute` just 2 CPUs and 4 GB memory from this pool to our first step, `step 0`:

```sh
#!/bin/bash

#SBATCH --nodes=1
#SBATCH --tasks-per-node=1
#SBATCH --cpus-per-task=4
#SBATCH --mem=8GB
#SBATCH --time=02:00

#SBATCH --output=hello.out
#SBATCH --error=hello.err

echo "number of CPUs: $(nproc)"

srun --cpus-per-task=2 --mem=4GB --time=02:00 /bin/bash -c ' echo "(step 0) number of CPUs: $(nproc)"; sleep 60'

srun /bin/bash -c ' echo "(step 1) number of CPUs: $(nproc)"; sleep 60'
```

Modify `hello.sbatch` script with the above code and submit a batch job. Once the job is done, check the outputs:

```sh
[pp2959@log-3 slurm_hello_world]$ cat hello.out
number of CPUs: 4
(step 0) number of CPUs: 2
(step 1) number of CPUs: 4
[pp2959@log-3 slurm_hello_world]$
```

- As you can see, we are able to control the resources allocated for a step. In this case we distributed just 2 CPUs from the overall pool of 4 CPUs to our first step that is step 0. 
- We did not mention any options to `srun` in our second step therefore by default step 1 inherits all resources during it's execution.
- Since we used the `sleep` command to simulate the execution time for each step, let us check their execution times with `sacct` by using the `--format` option, run:

```sh
sacct --job <Job_ID> --format=JobID,JobName,State,AllocCPUS,Elapsed 
```

> **_Here `--format=JobID,JobName,State,AllocCPUS,Elapsed` will show only these columns in the `sacct` output for the job `--job <Job_ID>`_** 

```sh
[pp2959@log-3 slurm_hello_world]$ sacct --format=JobID,JobName,State,AllocCPUS,Elapsed,Start,End  --job 56061185
JobID           JobName      State  AllocCPUS    Elapsed               Start                 End
------------ ---------- ---------- ---------- ---------- ------------------- -------------------
56061185     hello.sba+    TIMEOUT          4   00:02:03 2025-01-18T14:40:26 2025-01-18T14:42:29
56061185.ba+      batch  COMPLETED          4   00:02:03 2025-01-18T14:40:26 2025-01-18T14:42:29
56061185.ex+     extern  COMPLETED          4   00:02:03 2025-01-18T14:40:26 2025-01-18T14:42:29
56061185.0         bash  COMPLETED          2   00:01:00 2025-01-18T14:40:27 2025-01-18T14:41:27
56061185.1         bash  COMPLETED          4   00:01:02 2025-01-18T14:41:27 2025-01-18T14:42:29
[pp2959@log-3 slurm_hello_world]$
```

- From the `Elapsed` times (5th column), it took `2:03` minutes for the job to be scheduled after waiting in queue.
- Then `step 0` takes `1:00` minute to execute and complete because of the use of `sleep 60` command.
- And `step 1` also takes roughly `1:02` minute to execute and finish because of `sleep 60`.
- Notice the `Start` and `End` columns of `step 0` and `step 1`. In this example `step 1` starts at `14:41:27` only after `step 0` completes it's execution at `14:41:27`. 
- From this we learn that `step 1` starts once the `step 0` completes its execution.

We can `distribute tasks` among these steps within our batch job to execute them `simultaneously` for example modify `hello.sbatch` with the below code:

```sh
#!/bin/bash

#SBATCH --nodes=1
#SBATCH --tasks-per-node=2
#SBATCH --cpus-per-task=2
#SBATCH --mem=8GB
#SBATCH --time=04:00

#SBATCH --output=hello.out
#SBATCH --error=hello.err

srun --ntasks=1 --mem=4GB /bin/bash -c 'echo "(step 0): hello, world"; sleep 60' &

srun --ntasks=1 --mem=4GB /bin/bash -c 'echo "(step 1): hello, world"; sleep 60' &

wait
```

Once the job finishes executing, check on it's accounting information with:

```sh
sacct --format=JobID,JobName,State,AllocCPUS,Elapsed,Start,End  --job <Job_ID>
```

```sh
[pp2959@log-3 slurm_hello_world]$ sacct --format=JobID,JobName,State,AllocCPUS,Elapsed,Start,End  --job 56062529
JobID           JobName      State  AllocCPUS    Elapsed               Start                 End
------------ ---------- ---------- ---------- ---------- ------------------- -------------------
56062529     hello.sba+  COMPLETED          4   00:01:02 2025-01-18T15:41:47 2025-01-18T15:42:49
56062529.ba+      batch  COMPLETED          4   00:01:02 2025-01-18T15:41:47 2025-01-18T15:42:49
56062529.ex+     extern  COMPLETED          4   00:01:02 2025-01-18T15:41:47 2025-01-18T15:42:49
56062529.0         bash  COMPLETED          2   00:01:02 2025-01-18T15:41:47 2025-01-18T15:42:49
56062529.1         bash  COMPLETED          2   00:01:02 2025-01-18T15:41:47 2025-01-18T15:42:49
[pp2959@log-3 slurm_hello_world]$
```

From this example above, observe the `Start` and `End` times for `step 0` and `step 1`. We see that both steps run `concurrently` as we asked for 2 tasks using the directive `#SBATCH --tasks-per-node=2` and ended up distributing them among our steps with srun option `--ntasks=1`. 

> **_DO NOTE:_** You need to distribute the compute resource properly by specifying exactly how much tasks, CPUs, memory and GPUs are to be inherited by a **job step** in order to execute all your steps simultaneously. 
>
> Since a **job step** (`srun`) by default inherits all resource if not specified. Then that step may end up consuming more resource ( like mem ) than required otherwise could have been allocated for other steps.
>
> This can cause other job steps to wait until the one that that is currently consuming the resource to finish it's execution and free up those resource (e.g. mem).

Let's run our `hello.lua` example by submitting a `batch job`, modify the contents of your previous lua script as:

```sh
local hostname = io.popen('hostname'):read()
local task = tonumber(os.getenv("SLURM_PROCID"))
local stepid = os.getenv("SLURM_STEP_ID")

if task == 0 then print(hostname .. " (Step ID): " .. stepid .. " ;(Task A): hello, world") end
if task == 1 then print(hostname .. " (Step ID): " .. stepid .. " ;(Task B): hello, world") end
```

> This lua script executes 2 tasks (Task A and B) simultaneously and also prints the job's step ID

Now modify the `hello.sbatch` script as below:

```sh
#!/bin/bash

#SBATCH --nodes=2
#SBATCH --tasks-per-node=2
#SBATCH --cpus-per-task=1
#SBATCH --mem=8GB
#SBATCH --time=04:00

#SBATCH --output=hello.out
#SBATCH --error=hello.err

module purge
module load lua/5.3.6

srun --ntasks=2 --mem=2GB lua hello.lua &

srun --ntasks=2 --mem=2GB lua hello.lua &

wait
```

Once the job is done, check your program's outputs, it should look like the one below:

```sh
[pp2959@log-3 slurm_hello_world]$ cat hello.out
cm005.hpc.nyu.edu (Step ID): 1 ;(Task A): hello, world
cm006.hpc.nyu.edu (Step ID): 1 ;(Task B): hello, world
cm006.hpc.nyu.edu (Step ID): 0 ;(Task B): hello, world
cm005.hpc.nyu.edu (Step ID): 0 ;(Task A): hello, world
[pp2959@log-3 slurm_hello_world]$
```

- From the output, we were able to execute `4` `tasks` `simultaneously`, 2 tasks on both different nodes based on the directives `#SBATCH --nodes=2; #SBATCH --tasks-per-node=2` for our `batch job`.
- Then we were able to utilize these 2 tasks within a `job step` itself to perform the tasks A and B, of printing "hello, world" twice simultaneously.
- Hence, we were able to execute in total `4` tasks simultaneously across `2` nodes, each executing a single `job step` that performs `2` independent `tasks` A and B simultaneously. 

You may verify this from the job's accounting information:

```sh
sacct --format=JobID,JobName,State,AllocCPUS,Elapsed,Start,End  --job <Job_ID>
```

```sh
[pp2959@log-3 slurm_hello_world]$ sacct --format=JobID,JobName,State,AllocCPUS,Elapsed,Start,End  --job 56063037
JobID           JobName      State  AllocCPUS    Elapsed               Start                 End
------------ ---------- ---------- ---------- ---------- ------------------- -------------------
56063037     hello.sba+  COMPLETED          4   00:00:00 2025-01-18T16:43:52 2025-01-18T16:43:52
56063037.ba+      batch  COMPLETED          2   00:00:00 2025-01-18T16:43:52 2025-01-18T16:43:52
56063037.ex+     extern  COMPLETED          4   00:00:00 2025-01-18T16:43:52 2025-01-18T16:43:52
56063037.0          lua  COMPLETED          2   00:00:00 2025-01-18T16:43:52 2025-01-18T16:43:52
56063037.1          lua  COMPLETED          2   00:00:00 2025-01-18T16:43:52 2025-01-18T16:43:52
[pp2959@log-3 slurm_hello_world]$
```

Check `Start` and `End` times verify that the job steps have indeed ran concurrently.

## Run jobs `interactively` with Compute node(s)  

So far we have seen how one could:
- Submit `single interactive jobs` to slurm using `srun` alone
- Submit `batch jobs` to slurm with `sbatch`
- Now we will learn on "how to `reserve compute resources` for interactive workflows" with `salloc`

Recall how we used **_options_** with `srun` in requesting compute resources to run our programs, we can do the same with `salloc` command as shown: 

```sh
salloc --nodes=1 --tasks=2 --cpus-per-task=1 --mem=4GB --time=10:00 /bin/bash
```
> But without providing any programs to run in the arguments, only requesting resources and running a new bash shell as `/bin/bash`.

The output should look like this:

```sh
[pp2959@log-2 ~]$ salloc --nodes=1 --tasks=2 --cpus-per-task=1 --mem=4GB --time=10:00
salloc: Pending job allocation 56149258
salloc: job 56149258 queued and waiting for resources
salloc: job 56149258 has been allocated resources
salloc: Granted job allocation 56149258
salloc: Nodes cm[036-037] are ready for job
bash-5.1$
```

Read the output carefully, we submitted a `salloc` job request that generated a job id `56149258`, here we just made an `allocation` request to slurm for the resources.

The request waits in queue and once the resources are available, in this example nodes `cm[036-037]` with requested CPUs and memory, are allocated and we enter a new console `bash-5.1` which is nothing but a new `bash sub-shell` on our login node.

Verify that we are still on our login node by running:

```sh
bash-5.1$ hostname
log-2
bash-5.1$
```

But now, we can `interactively` submit `job steps` exactly like we did with our `batch scripts` that utilizes the currently allocated pool of compute resources, for example run:

```sh
srun hostname
```

```sh
bash-5.1$ srun hostname
cm037.hpc.nyu.edu
cm036.hpc.nyu.edu
bash-5.1$
```

We can limit resources to our `job steps` exactly like how we did within our `batch scripts`:

```sh
srun --ntasks=1 --cpus-per-task=1 --mem=2GB hostname
```
```sh
bash-5.1$ srun --ntasks=1 --cpus-per-task=1 --mem=2GB hostname
cm006.hpc.nyu.edu
bash-5.1$ 
```

We can even load a lua module and run the lua script as:

```sh
module load lua/5.3.6
srun lua hello.lua
```

```sh
bash-5.1$ srun lua hello.lua
cm028.hpc.nyu.edu (Task A): hello, world
cm028.hpc.nyu.edu (Task B): hello, world
bash-5.1$
```

And finally, you can keep track of all your interactive `job steps` in real time within this allocation using `sacct`.

```sh
sacct --job <Current_Job_id>
```
```sh
bash-5.1$ sacct --job 56149430
JobID           JobName  Partition    Account  AllocCPUS      State ExitCode
------------ ---------- ---------- ---------- ---------- ---------- --------
56149430     interacti+      short      users          2    RUNNING      0:0
56149430.ex+     extern                 users          2    RUNNING      0:0
56149430.0          lua                 users          2  COMPLETED      0:0
56149430.1     hostname                 users          2  COMPLETED      0:0
bash-5.1$
```

This way `salloc` can be used to **_work interactively_** with compute nodes for **_development and debugging purposes_**.

Once done, you can exit and relenquish the resources by running:

```sh
exit
```
```sh title="Output"
bash-5.1$ exit
exit
salloc: Relinquishing job allocation 56149430
salloc: Job allocation 56149430 has been revoked.
[pp2959@log-2 ~]$
```

## Transfer Data with `Data Transfer nodes`

## Package Software with `Containers`

## Burst priority jobs to Cloud with `Burst nodes`

## `Secure Research Data` Environments


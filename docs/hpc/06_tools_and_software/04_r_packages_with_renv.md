# R Packages with renv

You may use the renv R package to create a personal R Project environment for R packages. Documentation on renv can be found on the [RStudio site](https://rstudio.github.io/renv/).

## Setup
Say your R code is in directory /scratch/$USER/projects/project1
```sh
cd /scratch/$USER/projects/project1
module purge
module load r/gcc/4.4.0

R
```

### Automatic deletion of your files
This page describes the installation of packages on /scratch. One has to remember, though, that files stored in the HPC scratch file system are subject to the HPC Scratch old file purging policy: Files on the `/scratch` file system that have not been accessed for 60 or more days will be purged (read [more](../03_storage/01_intro_and_data_management.mdx)).

Thus you can consider the following options:

-   Reinstall your packages if some of the files get deleted
    -   You can do this manually 
    -   You can do this automatically. For example, within a workflow of a pipeline software like [Nextflow](https://www.nextflow.io/)
-   Pay for "Research Project Space" - read more [here](../03_storage/05_research_project_space.md) 
-   Use Singularity and install packages within a corresponding overlay file - read more [here](../07_containers/04_squash_file_system_and_singularity.md)

### Cache directory setup
By default, renv will cache package installation files to your home directory (most likely either in `~/.local/share/renv` or `~/.cache/R/renv/` or something similar). 

To avoid filling up your home directory, we advise to set up path to alternative cache directory (otherwise your home directory may fill up quickly)

-   Create directory
```sh   
mkdir -p /scratch/$USER/.cache/R/renv
```
-   Create a file in you project directory named .Renviron and put the following in in the file. It is the R project directory (`/scratch/$USER/projects/project1`) in this example.
```sh
RENV_PATHS_ROOT=/scratch/<USER_NETID>/.cache/R/renv
```

### Init renv
The renv package is already installed for module `r/gcc/4.4.0`. You need to install it yourself if you use other R module version
```R
## Do this if renv is not available (already installed for r/gcc/4.4.0)
# install.packages("renv")  ## By default this will install renv package into a sub-directory within your home directory

## init renv in project's directory
renv::init(".")
```

-   Restart R for renv to take effect. Once you start R, your renv environment will be loaded automatically.
```R
R version 4.4.0 (2024-04-24) -- "Puppy Cup"
...

* Project '/scratch/$USER/projects/project1' loaded. [renv 1.0.7]
```

### Check
-   You can check your library paths with the .libPaths() command
```R
> .libPaths()
[1] "/scratch/$USER/projects/project1/renv/library/R-4.1/x86_64-pc-linux-gnu"
```

-   You can check where the cache is set with the following:
```R
renv::paths$cache()
#[1] "/home/$USER/.cache/R/renv/cache/v5/R-4.1/x86_64-pc-linux-gnu"
```

### Add/remove, etc. packages
Install a package, such as reshape2. Below we can see it is not yet installed and then install it.
```R
R
library(reshape2)

Error in library(reshape2) : there is no package called ‘reshape2’
install.packages("reshape2")
```
:::note
You must be in the project1 directory for renv to load your project and the appropriate personal environment that you have created. If you want to copy your environment to a new location, use the bundle package, as shown below.
:::

Test R file
```R
print("hello")
renv::restore()
library(reshape2)
names(airquality) <- tolower(names(airquality))
head(airquality)
aql <- melt(airquality)
print("hello again")
```

For testing run it as
```R
srun --pty /bin/bash

Rscript test.R
```
:::note
Your `.Rprofile` file will include line `source("renv/activate.R")`
:::

The file will output the following:
```R
[1] "hello"
* The library is already synchronized with the lockfile.
  ozone solar.r wind temp month day
1    41     190  7.4   67     5   1
2    36     118  8.0   72     5   2
3    12     149 12.6   74     5   3
4    18     313 11.5   62     5   4
5    NA      NA 14.3   56     5   5
6    28      NA 14.9   66     5   6
No id variables; using all as measure variables
[1] "hello again"
```

### Clean up
Keep only the packages that you use in this particular project (not all the packages available on the system)
```R
R # launch R
renv::clean() # remove packages not recorded in the lockfile from the target library
```

### Recommended Workflow
The general workflow when working with renv is:

1.  Call `renv::init()` to initialize a new project-local environment with a private R library,
2.  Work in the project as normal, installing and removing new R packages as they are needed in the project,
3.  Call `renv::snapshot()` to save the state of the project library to the lockfile (called `renv.lock`),
    -   By default, `renv::snapshot()` will only capture packages listed in your R scripts within the R Project. For more options read the [`renv::snapshot()` documentation](https://rstudio.github.io/renv/reference/snapshot.html).
4.  Continue working on your project, installing and updating R packages as needed.
5.  If needed, call `renv::restore()` to revert to the previous state as encoded in the lockfile if your attempts to update packages introduced some new problems.

The `renv::init()` function attempts to ensure the newly-created project library includes all R packages currently used by the project. It does this by crawling R files within the project for dependencies with the `renv::dependencies()` function. The discovered packages are then installed into the project library with the `renv::hydrate()` function, which will also attempt to save time by copying packages from your user library (rather than reinstalling from CRAN) as appropriate.

Calling `renv::init()` will also write out the infrastructure necessary to automatically load and use the private library for new R sessions launched from the project root directory. This is accomplished by creating (or amending) a project-local `.Rprofile` with the necessary code to load the project when the R session is started.

If you’d like to initialize a project without attempting dependency discovery and installation – that is, you’d prefer to manually install the packages your project requires on your own – you can use `renv::init(bare = TRUE)` to initialize a project with an empty project library.

## Use with sbatch
When you launch a job with sbatch,  R will check if there is renv directory, and if renv is on it will pick up packages, installed using renv in the current directory.

Before you launch sbatch job, you need to make sure your project renv environment is ready, as outlined in the previous section.

### Store and Share your R Project's R version and R Package Versions
#### Reproduce Environment
If you already have file renv.lock or bundle file skip step 1

1.  In the original location (your own laptop for example) go to project directory and execute
(Make sure the whole path to project directory and names of your script files don't have empty spaces!)
```R
R
# install.packages("renv")  ## if needed
renv::init()
renv::snapshot()
```
2.  Take file renv.lock and copy it to a new location for the project
3.  At the new location - restore environment: go to directory of the project and execute. (Make sure version of R is the same)
```R
## Reproduce environment
module purge
module load r/gcc/4.4.0
R
renv::restore()
renv::init()
```
renv will install/compile what is needed on any system (Linux, Windows, etc). You can share your code with other researchers no matter what system they use. However, you should be careful that the same version of R is used between systems.

#### What to save/publish/commit with Git
In order to have your work reproducible by you or/and others, save and/or commit your code in git, please including

renv.lock (which lists all packages and versions that you use including the version of R)

#### Migrating from Packrat
The renv package has replaced the now deprecated Packrat package. The `renv::migrate()` function makes it possible to migrate projects from Packrat to renv. See the ?migrate documentation for more details. In essence, calling `renv::migrate("<project path>")` will be enough to migrate the Packrat library and lockfile such that they can then be used by renv.

### Useful links
-   [https://rstudio.github.io/renv/articles/renv.html](https://rstudio.github.io/renv/articles/renv.html)


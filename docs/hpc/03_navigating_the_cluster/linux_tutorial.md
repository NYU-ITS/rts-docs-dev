---
toc_max_heading_level: 2
sidebar_position: 1
---

# Linux Tutorial

- [Getting a new Account on the NYU HPC cluster](#getting-a-new-account-on-the-nyu-hpc-cluster)

- [Getting Started on HPC Greene Cluster](#getting-started-on-hpc-greene-cluster)

- [Available file systems on Greene](#available-file-systems-on-greene)

- [Basic Linux Commands](#basic-linux-commands)

- [Copying, moving or deleting files locally](#copying-moving-or-deleting-files-locally)

- [Text Editor (NANO)](#text-editor-nano)

- [Writing Scripts](#writing-scripts)

- [Setting execute permission with chmod](#setting-execute-permission-with-chmod)

## Getting a new Account on the NYU HPC cluster

It is expected of everyone to have an NYU HPC Cluster Account. If not follow the steps from \[Getting and Renewing an Account page] to apply for a new account.

## Getting Started on HPC Greene Cluster

In a Linux cluster, there are hundreds of computing nodes interconnected by high-speed networks. Linux operating system runs on each of the nodes individually. The resources are shared among many users for their technical or scientific computing purposes.

### The process to log into the Greene Cluster:

**NYU Campus:** From within the NYU network, that is from an on-campus location, or after you have establisehd a VPN connection with the NYU network, you can login to the HPC clusters directly.

**Off-campus:** The host name of Greene is _`greene.hpc.nyu.edu`_. Logging in to Greene is a two-stage process. The HPC clusters (Greene) are not directly visible to the internet (outside the NYU Network). If you are outside NYU's Network (off-campus) you must first login to a bastion host named _`gw.hpc.nyu.edu`_ .

From within the NYU network, that is, from an on-campus location, or after you are in the NYU's network via VPN, you can login to the HPC clusters directly. You do not need to login to the bastion host.

To login into the HPC cluster ( Greene ), simply use:

```sh
ssh <NYUNetID>@greene.hpc.nyu.edu
```

- To access from Windows Operating System with PuTTY, please follow the steps at \[Accessing HPC via windows page]
- Or To connect to VPN from Linux/Mac OS, please follow the steps at \[Accessing HPC via linux/MacOS page]

From an off-campus location or without a VPN (outside NYU-NET), logging in to the HPC clusters is a 2 step process:

1. Frist login to the bastion host, _`gw.hpc.nyu.edu`_. From a Mac or Linux workstation, this is a simple terminal command. Your password is the same password you use for NYU Home:

```sh
ssh <NYUNetID>@gw.hpc.nyu.edu
```

_Windows users will need to use Putty, see \[Accessing HPC via windows page]_

2. Next login to the cluster. For Greene, this is done with:

```sh
ssh <NYUNetID>@greene.hpc.nyu.edu
```

## Available file systems on Greene

Files Systems for usage:

The NYU HPC clusters have multiple file systems for user's file storage needs. Each file system is configured differently to serve a different purpose.

| **Space** | **Environment Variabe** | **Space Purpose** | **Flushed** | **Allocation** (per user) |
| :-- | :-- | :-- | :-- | :-- |
| `/home` | $HOME | Program Development space; For storing small files, source code, scripts etc that are backed up | NO | 20GB |
| `/scratch` | $SCRATCH | Computational Workspace; For storing large files/data, infrequent reads and writes | YES Files not accessed for 60 days are deleted | 5TB |
| `/archive` | $ARCHIVE | Long Term Storage ( Cold storage ) | NO | 2TB |

## Basic Linux Commands

### Navigating the directory structure

We've already seen ssh, which takes us from the host we are on to a different host, and hostname, which tells us which host we are on now. Mostly you'll move around filesystems and directories, which resemble inverted tree structures as shown below schematically:

` ls ` - To **_list_** files in the current directory

If this is your first time using the HPC Cluster, ` ls ` probably won't return anything, because you have no files to list.

There are a couple of useful options for ls:

- ` ls -l ` lists the directory contents in long format, one file or directory per line, with extra information about who own the file, how big it is, and what permissions are set.

- ` ls -a ` lists hidden files. In Unix, files whose names begin with dot (` . `) are hidden. This does not stop anything from using those files, it simply instructs ` ls ` not to show the files unless the ` -a ` option is used.

A command typed at the Unix command prompt, looks something like this:


` pwd ` - print working directory, or "**where am i now ?**" in the directory space.

In Unix, filesystems and directories are arranged in a hierarchy. **A forward slash "`/`" is the directory separator, and the topmost directory visible to a host is called "`/`". Filesystems are also mounted into this directory structure, so you can access everything that is visible on this host by moving around in the directory hierarchy.

You should see something like ` /home/NetID `

**_` cd `_** - To change to a different directory,

use "cd" ("change directory"). You'll need to give it the path to the directory you wish to change into, eg "cd /scratch/NetID". You can go up one directory with "` cd .. `".

If you run "` cd `" with no arguments, you will be returned to your home directory and if you run "` cd - `", you will be returned to the directory you were in most recently.

**_` mkdir `_** - To create a new location, use "` mkdir new_directory_name `".

**_` rmdir `_** - To remove a directory, use "` rmdir new_directory_name `".

**_` man `_** - Manual page. This command provides more information about a command eg., "` man ls `"

**_` cat `_** - Prints the content of the file eg., "` cat filename `"


## Copying, moving or deleting files locally

**Copying:** The "` cp `" command makes a duplicate copy of files and directories within a cluster or machine. The general usage is "` cp source destination `":

| command | Explanation |
| :------ | :---------- |
| cp `test_file.txt` `test_file2.txt` | Makes a duplicate copy of test_file.txt with a new name test_file2.txt |
| cp -r subdir subdir2 | That is, a new directory "subdir2" is created and each file under subdir is copied ` recursively ` to the new subdir2 |

**Moving:** The "` mv `" command renames files and directories within a cluster or machine. The general usage is "` mv source_dir destination_dir `"

| command | Explanation |
| :------ | :---------- |
| mv dummy_file.txt test_file.txt | Renames dummy_file.txt as test_file.txt |
| mv subdir new_subdir | Renames the directory "subdir" to a new directory "new_subdir" |

**Deleting files:** The "` rm `" ( remove ) command deletes files and optionally directories within a cluster or machine. 

> **_WARNING:_** There is no undelete in Unix. Once it is removed, it's gone !


| command | Explanation |
| :------ | :---------- |
| rm dummy_file.txt | Remove a file |
| rm -i dummy_file.txt | If you use -i you will be prompted for confirmation before each file is deleted |
| rm -f serious_file.txt | Forcibly remove a file |
| rmdir subdir/ | Remove subdir only if it's empty |
| rm -r subdir/ | Recursively delete the directory subdir and everything else in it. ` Use it with care ! ` |

## Text Editor (NANO)

"nano" is a friendly text editor that can be used to edit the content of an existing file or create a new file. Here are some options used in nano editor.

| Options | Explanation |
| :------ | :---------- |
| Ctrl + O | Save Changes |
| Ctrl + X | Exit nano |
| Ctrl + K | Cut single line |
| Ctrl + U | Paste the text |

## Writing Scripts

An entire sequence of commands can be captured in a script for repeated or later execution. This is the mechanism by which batch jobs are run on the HPC clusters. The essential elements of a script are illustrated in the example below:

```sh
#!/bin/bash
# the first line should begin with #! and the path to the interpreter under which the script should run
 
# do stuff as if it were an interactive session:
cd $HOME/some_place
date
ls -l
pwd
 
# scripts can use loops and conditionals. See 'man bash' for syntax
for f in `ls`; do
  echo "found a file called $f"
done
```

There are two ways to run scripts:

1. Give the script execute permission. and run it as a command:

```sh
chmod u+x my_script
./my_script
```

2. Run a shell, and pass the script as an argument

```sh
bash my_script
```

Notice in the first example that to run the script, we prefixed it with "` ./ `". If the script is not somewhere in the shell's ` $PATH `, it won't find it to run unless it's location is explicitly specified. This is even true when the script is in the normally in the ` $PATH `. Therefore, we specify that the script is in the current directory with ` ./ `.

## Setting execute permission with chmod

In Unix, a file has three basic permissions, each of which can be set for three levels of user. The permissions are:

- Read permission (" r ") - numeric value 4

- Write permission (" w ") - numeric value 2

- Execute permission (" x ") - numeric value 1. 

> **_NOTE:_** When applied to a directory, execute permission refers to whether the directory can be entered with 'cd'

The three levels of user are:

- The user who owns the file ( the "user", referred to with "u")

- The group to which the file belongs - referred to with "g". Each user has a primary group and is optionally a member of other groups, when a user creates a file it is normally associated with the user's primary group. At NYU HPC all users are in a group named " users ", so group permissions has little meaning

- All other users are referred to with " o "

You grant permissions with "` chmod who+what file `" and revoke them with "` chmod who-what file `". 

> **_NOTICE:_** The first has "+" and the second "-"

Here "who" some combination of "u", "g" and "o" and what is some combination of "r", "w" and "x". So to set execute permission, as in the example above, we use:

```sh
chmod u+x my_script
```



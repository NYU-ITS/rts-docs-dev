---
sidebar_position: 2
---

# Using a Terminal

## Mac/Linux

To connect with a gateway server, simply open a terminal application and enter the following command :

```sh
ssh <NetID>@gw.hpc.nyu.edu
```

After typing in your password you will be logged in to the cluster. Once this connection is established, you can make one more hop and connect to one of the HPC clusters:

```sh
ssh <NetID>@greene.hpc.nyu.edu
```

## Windows 

Windows 11 users have several options : 
- WSL2 ( Windows Sub-system for Linux ) 
- Setting up SSH Keys
- Using PuTTY ( Only for Windows ) 

### WSL2
If you run Windows 11, you can install WSL, and then install any Linux distribution like Ubuntu (for example, from Microsoft Store). You will have a fully functional Ubuntu with terminal and can connect to the cluster using instructions provided above for Linux/Mac users 

    Instructions on WSL installation: https://learn.microsoft.com/en-us/windows/wsl/install

:::tip

    One of many options to get terminal that support tabs, etc. is to install 'Windows Terminal' from Microsoft Store.

:::

:::tip

    If you are using WSL 2 (Windows subsystem for Linux), you may not be able to access internet when Cisco AnyConnect VPN, installed from exe file, is activated. A potential solution: uninstall Cisco AnyConnect and install AnyConnect using Microsoft Store, and then setup new VPN connection using settings described on [IT webpage](https://www.nyu.edu/servicelink/KB0011177).

:::

### Setting up SSH Keys

Instead of typing your password every time you need to log in, you can also specify an ssh key.

- Only do that on the computer you trust
- Generate ssh key pair (terminal in Linux/Mac or cmd/WSL in Windows): https://www.ssh.com/ssh/keygen/
- Note the path to ssh key files. Don't share key files with anybody - anybody with this key file can login to your account
- Log into cluster using regular login/password and then add the content of generated public key file (the one with .pub) to `$HOME/.ssh/authorized_keys` on the cluster
- Next time you will log into cluster no password will be required. 

For additional recommendations on how to configure your SSH sessions, [see this page](https://sites.google.com/nyu.edu/nyu-hpc/training-support/general-hpc-topics/tunneling-and-x11-forwarding?authuser=0).



# Greene Spec Sheet

[vast home page]: https://www.vastdata.com/

## Hardware Specs

Please find Greene's hardware specification in detail at the [google sheets here](https://docs.google.com/spreadsheets/d/1czgPi6x8Qa5PNRIX_VLSt7mDpe8zgg5MRqdVmINJzxc?rm=minimal):

:::tip
Hover a mouse over a cell with a black triangle to see more details_  
:::

<iframe src="https://docs.google.com/spreadsheets/d/1czgPi6x8Qa5PNRIX_VLSt7mDpe8zgg5MRqdVmINJzxc?rm=minimal" width="100%" height="500"></iframe>

## Mounted Storage Systems 

Please find the details on Greene's available storage offerings at the [google sheets here](https://docs.google.com/spreadsheets/d/1pYZ0YtN1fhMN7kxcGcm6U-HZxMKLRBXXr2BwemxeS7Y?rm=minimal):

<iframe src="https://docs.google.com/spreadsheets/d/1pYZ0YtN1fhMN7kxcGcm6U-HZxMKLRBXXr2BwemxeS7Y?rm=minimal" width="100%" height="300"></iframe>


## General Parallel File System (GPFS)

The NYU HPC Clusters are served by a `General Parallel File System (GPFS)` storage cluster. GPFS is a high-performance clustered file system software developed by IBM that provides concurrent high-speed file access to applications executing on multiple nodes of clusters.

The cluster storage runs on Lenovo Distributed Storage Solution DSS-G hardware:


- **_2x DSS-G 202_**
    - 116 Solid State Drives (SSDs)
    - 464 TB raw storage
- **_2x DSS-G 240_**
    - 668 Hard Disk Drives (HDDs)
    - 9.1 PB raw storage

### GPFS Performance

|     |     |
| --- | --- |
| Read Bandwidth | **_78 GB_** per second reads |
| Write Bandwidth | **_42 GB_** per second writes |
| I/O Performance | **_~650k_** Input/Output operations per second (IOPS) |

## Flash Tier Storage (VAST)

An all flash file system, using [VAST Flash storage][vast home page] is now available on Greene. Flash storage is optimal for computational workloads with high I/O rates. For example, if you have jobs to run with huge number of _tiny files_, VAST may be a good candidate.

Please contact the team hpc@nyu.edu for more information.

- NVMe Interface
- _778 TB_ Total Storage
- Available to **all** users as **read only**
- **Write** access available to **approved** users only

## Research Project Space (RPS)

- Research Project Space (RPS) volumes provide working spaces for sharing data and work amongst project or lab members for long term research needs.
- RPS directories are available on the Greene HPC cluster.
- RPS is backed up. There is no file purging policy on RPS.
- There is a _cost per TB per year_, and _inodes per year_ for RPS volumes.

Please find more inforamtion at [Research Project Space page]. 


## Data Transfer Nodes (gDTN)

|     |     |
| --- | --- |
| Node Type | Lenovo SR630 |
| Number of Nodes | 2 |
| CPUs | 2x Intel Xeon Gold 6244 8C 150W 3.6 GHz Processor.
| Memory |  192 GB (total) - 12x 16GB DDR4, 2933 MHz
| Local Disk | 1x 1.92 TB SSD
| Infiniband Interconnect | 1x Mellanox ConnectX-6 HDR100/100GbE VPI 1-Port x16 PCIe 3.0 HCA
| Ethernet Connectivity to the NYU High-Speed Research Network (HSRN) | 200 Gbit - 1x Mellanox ConnectX-5 EDR IB/100GbE VPI Dual-Port x16 PCIe 3.0 HCA

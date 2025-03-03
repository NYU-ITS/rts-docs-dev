# Available storage systems

The NYU HPC clusters are served by a General Parallel File System (GPFS) storage cluster. GPFS is a high-performance clustered file system software developed by IBM that provides concurrent high-speed file access to applications executing on multiple nodes of clusters.

## GPFS 
### Configuration
The NYU HPC cluster storage runs on Lenovo Distributed Storage Solution DSS-G hardware: 
-   2x DSS-G 202
    -   116 Solid State Drives (SSDs)
    -   464TB raw storage
-   2x DSS-G 240
    -   668 Hard Disk Drives (HDDs)
    -   9.1PB raw storage

### Performance
-   Read Speed: 78 GB per second read speeds
-   Write Speed: 42 GB per second write speeds
-   I/O Performance: up to 650k input/output operations per second (IOPS)

## Flash Tier Storage (VAST)
-   An all flash file system, using [VAST Flash storage](https://www.vastdata.com/), is now available on Greene. Flash storage is optimal for computational workloads with high I/O rates. For example, If you have jobs to run with huge amount of tiny files, VAST may be a good candidate.  If you and your lab members are interested, please reach out to [hpc@nyu.edu](mailto:hpc@nyu.edu) for more information.
-   NVMe interface
-   Total size: 778 TB
-   Access: /vast is available for all users to read and available to approved users to write data.

## Research Project Space (RPS)
-   Research Project Space (RPS) volumes provide working spaces for sharing data and code amongst project or lab members.
-   RPS directories are available on the Greene HPC cluster.
-   There is no old-file purging policy on RPS.
-   RPS is backed up. 
-   There is a cost per TB per year and inodes per year for RPS volumes.

More information on the [Research Project Space is available page](./05_research_project_space.md).

## Data Transfer Nodes Specs (gDTN)
-   Node type: Lenovo SR630
-   Number of nodes: 2
-   CPU:  2x Intel Xeon Gold 6244 8C 150W 3.6GHz Processor
-   Memory: 192GB   (total) - 12x 16GB DDR4, 2933MHz
-   Local disk:  1x 1.92TB SSD
-   Infiniband interconnect: 1x Mellanox ConnectX-6 HDR100 /100GbE VPI 1-Port x16 PCIe 3.0 HCA
-   Ethernet connectivity to the NYU High-Speed Research Network ( HSRN ):  200Gbit  - 1x Mellanox ConnectX-5 EDR IB/100GbE VPI Dual-Port x16 PCIe 3.0 HCA

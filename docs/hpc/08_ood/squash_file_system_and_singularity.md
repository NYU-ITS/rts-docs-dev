# Squash File System and Singularity

View available datasets on the [Datasets page](./datasets.md).

## Working with Datasets
Writable ext3 overlay images have conda environments installed inside, Singularity can work with squashFS for fixed datasets, such as the coco datasets.

```sh
/scratch/work/public/ml-datasets/coco/coco-2014.sqf
/scratch/work/public/ml-datasets/coco/coco-2015.sqf
/scratch/work/public/ml-datasets/coco/coco-2017.sqf


singularity exec \
--overlay /scratch/wang/zzz/pytorch1.8.0-cuda11.1.ext3:ro \
--overlay /scratch/work/public/ml-datasets/coco/coco-2014.sqf:ro \
--overlay /scratch/work/public/ml-datasets/coco/coco-2015.sqf:ro \
--overlay /scratch/work/public/ml-datasets/coco/coco-2017.sqf:ro \
/scratch/work/public/singularity/cuda11.1-cudnn8-devel-ubuntu18.04.sif /bin/bash
```

If you have many tiny files as fixed datasets, please make squashFS files to work with Singularity. Here is an example

1.  Make a temporary folder in /state/partition1, it is a folder in local hard drive on each computer node
```sh
mkdir -p /state/partition1/sw77
cd /state/partition1/sw77
```

2.  Unzip files there, for example
```sh
tar -vxzf /scratch/work/public/examples/squashfs/imagenet-example.tar.gz
```

3.  Change access permissions in case we'll share files with others
```sh
find imagenet-example -type d -exec chmod 755 {} \;
find imagenet-example -type f -exec chmod 644 {} \;
```

4.  Convert to a single squashFS file on host
```sh
mksquashfs imagenet-example imagenet-example.sqf  -keep-as-directory
```
For more details on working with squashFS, please see [this page from the SquashFS documentation](http://www.iitk.ac.in/LDP/HOWTO/SquashFS-HOWTO/mksqoverview.html). 

5.  Copy this file to /scratch
```sh
cp -rp /state/partition1/sw77/imagenet-example.sqf /scratch/sw77/.
```

6.  To test, files are in /imagenet-example inside Singularity container 
```sh
singularity exec --overlay /scratch/sw77/imagenet-example.sqf:ro /scratch/work/public/singularity/ubuntu-20.04.1.sif /bin/bash
Singularity> find /imagenet-example | wc -l
1303
Singularity> find /state/partition1/sw77/imagenet-example | wc -l
1303
```

7.  To delete the tempoary folder on host
```sh
rm -rf /state/partition1/sw77
```

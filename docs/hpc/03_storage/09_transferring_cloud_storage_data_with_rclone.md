# Transferring Cloud Storage Data with rclone

## Transferring files to and from Google Drive with RCLONE
Having access to Google Drive from the HPC environment provides an option to archive data and even share data with collaborators who have no access to the NYU HPC environment. Other options to archiving data include the HPC Archive file system and using Globus to share data with collaborators.

Access to Google Drive is provided by [rclone](https://rclone.org/drive/) - rsync for cloud storage - a command line program to sync files and directories to and from cloud storage systems such as Google Drive, Amazon Drive, S3, B2 etc. [rclone](https://rclone.org/drive/) is available on Greene cluster as a module, the module currently (November 2022) is **rclone/1.60.1** 

For more details on how to use rclone to sync files to Google Drive, please see: [https://rclone.org/drive/](https://rclone.org/drive/)

rclone can be invoked in one of the three modes:
-   [Copy](https://rclone.org/commands/rclone_copy/) mode to just copy new/changed files
-   [Sync](https://rclone.org/commands/rclone_sync/) (one way) mode to make a directory identical
-   [Check](https://rclone.org/commands/rclone_check/) mode to check for file hash equality

Please try with these options: 
```sh
rclone --transfers=32 --checkers=16 --drive-chunk-size=16384k --drive-upload-cutoff=16384k copy source:sourcepath dest:destpath
```

This option works great for file sizes 1Gb+ to 250GB. Keep in mind that there is a rate limiting of 2 files/sec for upload into Google Drive.  Small file transfers don’t work that well. If you have many small jobs, please tar the parent directory of such folders and splits the tar file into 100GB chunks and uploads then into Google Drive.

## rclone Configuration
You need to configure rclone before you will be able to move files between the HPC Environment and Google Drive

There are specific instruction on the rclone web site: [https://rclone.org/drive/](https://rclone.org/drive/)

### Step 1: Login to Greene:

Follow [instructions](../02_connecting_to_hpc/01_connecting_to_hpc.md) to log into the Greene HPC cluster.

### Step 2: Load the rclone module
```sh
$ module load rclone/1.60.1
```

### Step 3: Configure rclone

Configuring rclone and setting up remote access to your Google Drive, using the command:
```sh
$ rclone config
```

This will try to open the config files and you will see the below content:

You can select one of the options (here we show how to set up a new remote)
```sh
2021/03/23 18:10:29 NOTICE: Config file "/home/netid/.config/rclone/rclone.conf" not found - using defaults
No remotes found - make a new one
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n
name> remote1
Type of storage to configure.
Enter a string value. Press Enter for the default ("").
Choose a number from below, or type in your own value
 1 / 1Fichier
   \ "fichier"
 2 / Alias for an existing remote
   \ "alias"
 3 / Amazon Drive
   \ "amazon cloud drive"
 4 / Amazon S3 Compliant Storage Provider (AWS, Alibaba, Ceph, Digital Ocean, Dreamhost, IBM COS, Minio, Tencent COS, etc)
   \ "s3"
 5 / Backblaze B2
   \ "b2"
 6 / Box
   \ "box"
 7 / Cache a remote
   \ "cache"
 8 / Citrix Sharefile 
   \ "sharefile"
 9 / Dropbox
   \ "dropbox"
10 / Encrypt/Decrypt a remote 
   \ "crypt"
11 / FTP Connection
   \ "ftp" 
12 / Google Cloud Storage (this is not Google Drive)
   \ "google cloud storage"
13 / Google Drive
   \ "drive" 
14 / Google Photos
   \ "google photos"
....
....
....
37 / premiumize.me
   \ "premiumizeme"
38 / seafile
   \ "seafile"
Storage> 13
** See help for drive backend at: https://rclone.org/drive/ **
Google Application Client Id
Setting your own is recommended.
See https://rclone.org/drive/#making-your-own-client-id for how to create your own.
If you leave this blank, it will use an internal key which is low performance.
Enter a string value. Press Enter for the default ("").
client_id> Just Hit Enter
OAuth Client Secret
Leave blank normally.
Enter a string value. Press Enter for the default ("").
client_secret> Just Hit Enter
Scope that rclone should use when requesting access from drive.
Enter a string value. Press Enter for the default ("").
Choose a number from below, or type in your own value
 1 / Full access all files, excluding Application Data Folder.
   \ "drive"
 2 / Read-only access to file metadata and file contents.
   \ "drive.readonly"
   / Access to files created by rclone only.
 3 | These are visible in the drive website.
   | File authorization is revoked when the user deauthorizes the app.
   \ "drive.file"
   / Allows read and write access to the Application Data folder.
 4 | This is not visible in the drive website.
   \ "drive.appfolder"
   / Allows read-only access to file metadata but
 5 | does not allow any access to read or download file content.
   \ "drive.metadata.readonly"
scope> 1
ID of the root folder
Leave blank normally.
Fill in to access "Computers" folders (see docs), or for rclone to use
a non root folder as its starting point.
Enter a string value. Press Enter for the default ("").
root_folder_id> Just Hit Enter
Service Account Credentials JSON file path
Leave blank normally.
Needed only if you want use SA instead of interactive login.
Leading `~` will be expanded in the file name as will environment variables such as `${RCLONE_CONFIG_DIR}`.
Enter a string value. Press Enter for the default ("").
service_account_file> Just Hit Enter
Edit advanced config? (y/n)
y) Yes
n) No (default)
y/n> n
Remote config
Use auto config?
 * Say Y if not sure
 * Say N if you are working on a remote or headless machine
y) Yes (default)
n) No
y/n> n
Please go to the following link: https://accounts.google.com/o/oauth2/auth?access_type=offline&client_id=
 CUT AND PASTE The URL ABOVE INTO A BROWSER ON YOUR LAPTOP/DESKTOP 
Log in and authorize rclone for access
Enter verification code> ENTER VERIFICATION CODE HERE
Configure this as a team drive?
y) Yes
n) No (default)
y/n> n
--------------------
[remote1]
type = drive
scope = drive
token = {"access_token":", removed "}
--------------------
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
Current remotes:
Name                 Type
====                 ====
remote1              drive
e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```
### Step 4:

Sample commands:
```sh
$ rclone lsd remote1:
```

Transferring files to Google Drive, using the command below:
```sh
$ rclone copy <source_folder> <remote_name>:<name_of_folder_on_gdrive>
```

It looks something like below:
```sh
$ rclone copy /home/user1 remote1:backup_home_user1
```

### Step 5:

The files are transferred and you can find the files on your Google Drive.

:::note
Rclone only copies new files or files different from the already existing files on Google Drive.
:::

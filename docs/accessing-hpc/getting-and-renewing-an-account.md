---
sidebar_position: 5
---

# Getting and Renewing an Account

[Follow this link to request HPC accounts](https://identity.it.nyu.edu/) ( NYU VPN is required ).

## Who is eligible for an NYU HPC account ?

NYU HPC clusters and related resources are available to full-time NYU faculty and to all other NYU staff and students with sponsorship from a full-time NYU faculty.

Please note:
- All **sponsored accounts** will be created for a period of 12 months, at which point a renewal process is required to continue to use the clusters.
- Faculty, students and staff from the **NYU School of Medicine** require the sponsorship of an eligible NYU faculty member to access the NYU HPC clusters.
- Non-NYU Researchers who are collaborating with NYU researchers must obtain an affiliate status before applying for an NYU HPC account. Please see the section at the bottom of the page.


## VPN

In order to request a new HPC account or renew an expired one, you need to be connected to the NYU VPN if you are working remotely. Please see [instructions on how to install and use the NYU VPN](https://www.nyu.edu/life/information-technology/infrastructure/network-services/vpn.html). Linux clients are not officially supported, however we were able to successfully use openVPN client. Here are installation and connection instructions for an apt-based linux distribution:

Install openconnect with :
```sh
apt-get install openconnect
```

Then connect to NYU VPN as :
```sh
sudo openconnect -b vpn.nyu.edu
```
When prompted follow the instructions and provide your nnetID, password, and second password ( 'push' or 'sms' ).


## Getting a new account on the NYU HPC clusters

To request an NYU HPC account please log in to [NYU Identity Management service](https://identity.it.nyu.edu/) and follow the link to “Request HPC account”. We have a walkthrough of how to [request an account through IIQ](https://sites.google.com/nyu.edu/nyu-hpc/accessing-hpc/getting-and-renewing-an-account/requesting-an-hpc-account-with-iiq?authuser=0). If you are a student, alumni or an external collaborator you need an NYU faculty sponsor.

## Renewing HPC account

Each year, non-faculty users must renew their HPC account by filling in the account renewal form from the [NYU Identity Management service](https://identity.it.nyu.edu/). See  [Renewing your HPC account with IIQ](https://sites.google.com/nyu.edu/nyu-hpc/accessing-hpc/getting-and-renewing-an-account/renewing-your-hpc-account-with-iiq?authuser=0) for a walkthrough of the process.

## Information for faculty who sponsor HPC users

All full-time NYU faculty members (other than NYU Med School) are eligible to become sponsors, and in turn can sponsor:

- NYU Degree program students
- Scholars visiting NYU
- NYU Research staff
- NYU School of Medicine faculty, staff and students
- Other NYU staff/affiliates with a NetID
- Non-NYU researchers with whom they are actively collaborating

If you need to sponsor an HPC account for an external collaborator (for example, for an NYU alumnus), please, request a "research affiliate" affiliation for your collaborator. You can find the instructions [here](https://www.nyu.edu/servicelink/KB0010299). 

You can request a NetID for your student(s) or collaborator(s) [here](https://start.nyu.edu/). The request form has additional information about affiliates.

HPC faculty sponsors are expected to:
- Approve/disapprove sponsored users' association with you
- Approve/disapprove the purpose for which user is requesting an account on NYU HPC resources
- Agree to supervise the sponsored individual, to the extent necessary, to ensure proper use of the NYU HPC resources and compliance with all applicable policies
- Respond promptly to account-related requests from HPC staff

Each year, your sponsored users must renew their account. You will need to approve the renewal by logging into the [NYU Identity Management service](https://identity.it.nyu.edu/). [We have a walkthrough of the approval process, with screenshots](https://sites.google.com/nyu.edu/nyu-hpc/accessing-hpc/getting-and-renewing-an-account/how-to-approve-an-hpc-account-request?authuser=0).

## Bulk HPC Accounts for Courses

HPC bulk accounts request is disabled for HPC sponsors.
- If you would like to use JupyterHub for your classes, please don't submit the form below, read [here instead](https://sites.google.com/nyu.edu/nyu-hpc/training-support/resources-for-classes/jupyterhub?authuser=0) (the link to an intake form is also there)
- Please fill out this [Request Form](https://docs.google.com/forms/d/e/1FAIpQLSdehngqL1xso-YV6MOhplKNwxXjASHYnDtM_5THB3P2vrDKcg/viewform?usp=sf_link) for the course, we’ll create HPC accounts for the class per request
- Please note that accounts created for courses last until the end of the semester, rather than a full year

## Getting an account with one of NYU partners

NYU partners ([look for the list here](https://sites.google.com/nyu.edu/nyu-hpc/about/collaborations?authuser=0)) with many state and national facilities with a variety of HPC systems and expertise. [Contact us](https://sites.google.com/nyu.edu/nyu-hpc/training-support/support?authuser=0) for assistance setting up a collaboration with any of these.

## Non-NYU Researchers

If you are part of collaboration with NYU researcher you need to obtain an **affiliate** status before applying for an NYU HPC account. A full-time NYU faculty member must sponsor a non-NYU collaborator for an affiliate status. Please see [instructions for affiliate management](https://nyu.service-now.com/sp?sys_kb_id=621146614050d5442a5dc4baadd48b32&id=kb_article_view&sysparm_rank=1&sysparm_tsqueryId=7d719c551b2820d0a54ffdd51a4bcb90) (NYU NetID login is required to follow the link). [Please read instructions about sponsoring external collaborators](https://sites.google.com/nyu.edu/nyu-hpc/accessing-hpc/getting-and-renewing-an-account/hpc-accounts-for-sponsored-external-collaborators?authuser=0).

## Access to cluster after Graduation

If you will still work on a project with an NYU researchers after graduation - refer to the section above for "Non-NYU Researchers"

If you are not part of a collaboration, your access to cluster will end together with NetID becoming non-active. Please copy all your data from cluster (if you need any) before that time.

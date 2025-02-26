"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8647],{993:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"srde/user_guide/data_transfers","title":"Managing Data Transfer","description":"Every research project that is using the Secure Research Data Environment (SRDE) must have an assigned Data Steward. The Data Steward is responsible for  ingesting to and egressing data from the secure environment, following the processes described below. Currently, the data steward role cannot be combined with other roles in the project, in other words, a data steward cannot also be a user/researcher in the project.","source":"@site/docs/srde/02_user_guide/03_data_transfers.mdx","sourceDirName":"srde/02_user_guide","slug":"/srde/user_guide/data_transfers","permalink":"/rts-docs-dev/pr-preview/pr-65/docs/srde/user_guide/data_transfers","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/srde/02_user_guide/03_data_transfers.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"srdeSidebar","previous":{"title":"Data Access","permalink":"/rts-docs-dev/pr-preview/pr-65/docs/srde/user_guide/data_access"},"next":{"title":"Troubleshooting","permalink":"/rts-docs-dev/pr-preview/pr-65/docs/srde/user_guide/troubleshooting"}}');var a=s(5105),r=s(3881);const i={},o="Managing Data Transfer",c={},d=[{value:"Data Ingestion process",id:"data-ingestion-process",level:2},{value:"Uploading Data to the Staging Area",id:"uploading-data-to-the-staging-area",level:3},{value:"Option1: Using the Web Console Interface",id:"option1-using-the-web-console-interface",level:4},{value:"Option2: Using the CLI",id:"option2-using-the-cli",level:4},{value:"Push Data to the Research Workspace Using Airflow",id:"push-data-to-the-research-workspace-using-airflow",level:3},{value:"Data Egress Process",id:"data-egress-process",level:2},{value:"Push the data from the Research Workspace to Staging",id:"push-the-data-from-the-research-workspace-to-staging",level:3},{value:"Check the DLP inspection report",id:"check-the-dlp-inspection-report",level:3},{value:"Pass or fail the inspection",id:"pass-or-fail-the-inspection",level:3},{value:"Moving Files to Export",id:"moving-files-to-export",level:2},{value:"Auto-Inspection",id:"auto-inspection",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"managing-data-transfer",children:"Managing Data Transfer"})}),"\n",(0,a.jsx)(t.p,{children:"Every research project that is using the Secure Research Data Environment (SRDE) must have an assigned Data Steward. The Data Steward is responsible for  ingesting to and egressing data from the secure environment, following the processes described below. Currently, the data steward role cannot be combined with other roles in the project, in other words, a data steward cannot also be a user/researcher in the project."}),"\n",(0,a.jsx)(t.admonition,{title:"Data Steward role",type:"tip",children:(0,a.jsx)(t.p,{children:"The project PI must inform the SRDE team who the assigned Data Steward is for the research project before the project is deployed on the SRDE."})}),"\n",(0,a.jsx)(t.h2,{id:"data-ingestion-process",children:"Data Ingestion process"}),"\n",(0,a.jsxs)(t.p,{children:["Ingesting data into the secure environment is a two-step process; First the Data Steward must upload the data onto the staging GCP Storage Bucket and then \u201cpush\u201d the data into the secure Workspace environment.\n",(0,a.jsx)(t.img,{alt:"Data ingestion process overview",src:s(8170).A+"",width:"681",height:"81"})]}),"\n",(0,a.jsx)(t.h3,{id:"uploading-data-to-the-staging-area",children:"Uploading Data to the Staging Area"}),"\n",(0,a.jsx)(t.h4,{id:"option1-using-the-web-console-interface",children:"Option1: Using the Web Console Interface"}),"\n",(0,a.jsxs)(t.p,{children:["Log into GCP console, set project to your staging project (i.e. srde-staging-dev), and navigate on the side panel to Cloud Storage -> Buckets:\n",(0,a.jsx)(t.img,{alt:"GCP Cloud Storage Buckets",src:s(997).A+"",width:"970",height:"803"})]}),"\n",(0,a.jsxs)(t.p,{children:["Navigate to your research workspace\u2019s corresponding Staging Ingress bucket:\n",(0,a.jsx)(t.img,{alt:"GCP Cloud Storage staging ingress buckets",src:s(5810).A+"",width:"985",height:"425"})]}),"\n",(0,a.jsxs)(t.p,{children:["Copy data to the Staging Ingress bucket:\n",(0,a.jsx)(t.img,{alt:"GCP Cloud Storage copy to ingress bucket",src:s(8320).A+"",width:"1277",height:"633"})]}),"\n",(0,a.jsx)(t.h4,{id:"option2-using-the-cli",children:"Option2: Using the CLI"}),"\n",(0,a.jsx)(t.p,{children:"Follow the instructions in section 2 to install and configure gcloud on your workstation.  Once this is done, run the following command to find your workspace\u2019s bucket:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"gsutil ls | fgrep [Workspace Name]\n"})}),"\n",(0,a.jsx)(t.p,{children:"The workspace name will be given to you by the SRDE team after your workspace has been provisioned.  The command above should output two buckets\u2013 one will be for data ingest (ingress) and the other will be for data egress:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"nyu10003@cloudshell:~ (srde-staging-dev-cedd)$ gsutil ls | fgrep example\ngs://nyu-us-east4-example-staging-egress-9d94/\ngs://nyu-us-east4-example-staging-ingress-4bd9/\n"})}),"\n",(0,a.jsx)(t.p,{children:"To ingest data into the SRDE, run the following command to copy individual files into the ingress bucket:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"gsutil cp [FILENAME] gs://[INGRESS BUCKET]\n"})}),"\n",(0,a.jsx)(t.p,{children:"So for instance, the following command would copy an individual text file (1661-0.txt) into the example ingress bucket:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"gsutil cp 1661-0.txt gs://nyu-us-east4-example-staging-ingress-4bd9/\n"})}),"\n",(0,a.jsx)(t.p,{children:"To copy a folder, you need to add -r after cp:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"gsutil cp -r [FOLDER] gs://[INGRESS BUCKET]\n"})}),"\n",(0,a.jsx)(t.p,{children:"We would use the following command to copy a folder named dataset into the example ingress bucket:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"gsutil cp -r dataset gs://nyu-us-east4-example-staging-ingress-4bd9/\n"})}),"\n",(0,a.jsx)(t.h3,{id:"push-data-to-the-research-workspace-using-airflow",children:"Push Data to the Research Workspace Using Airflow"}),"\n",(0,a.jsxs)(t.p,{children:["Once the data is in the Staging Ingress bucket, navigate to Cloud Composer and click on Airflow:\n",(0,a.jsx)(t.img,{alt:"Push data using airflow",src:s(7111).A+"",width:"1228",height:"270"})]}),"\n",(0,a.jsxs)(t.p,{children:["In Airflow you will see the DAG workflows for your project. If you do not see any DAGs, contact ",(0,a.jsx)(t.a,{href:"mailto:srde-support@nyu.edu",children:"srde-support@nyu.edu"})," with subject line \u201cMissing Airflow Permissions\u201d\n",(0,a.jsx)(t.img,{alt:"Airflow permissions",src:s(4258).A+"",width:"1722",height:"956"})]}),"\n",(0,a.jsxs)(t.p,{children:["Once you see the workflows for your project, pick the one named ",(0,a.jsx)(t.strong,{children:"[project-id]_Ingress_1_Staging_to_Workspace"}),", which will bring you to the DAG page. On the DAG page, click on the \u201cplay\u201d button at the top right to trigger the DAG:\n",(0,a.jsx)(t.img,{alt:"DAG trigger",src:s(7310).A+"",width:"1115",height:"530"})]}),"\n",(0,a.jsxs)(t.p,{children:["The DAG may take a few minutes to run. You can see its progress in the status display  on the bottom left.\n",(0,a.jsx)(t.img,{alt:"DAG status",src:s(1578).A+"",width:"1115",height:"530"})]}),"\n",(0,a.jsx)(t.p,{children:"The display shows a list of tasks executed by the DAG. A light green square will appear next to the task when it is running, and turn dark green when it is complete. When all tasks have finished successfully, the DAG is done."}),"\n",(0,a.jsx)(t.p,{children:"Researchers will now be able to see the data in the ingress bucket in the research project workspace."}),"\n",(0,a.jsx)(t.admonition,{title:"Access policy for Data Stewards",type:"note",children:(0,a.jsx)(t.p,{children:"Data stewards do not have access to the research project workspace."})}),"\n",(0,a.jsxs)(t.p,{children:["Instructions for researchers who need to access the ingested data in the research workspace are found in the ",(0,a.jsx)(t.a,{href:"/rts-docs-dev/pr-preview/pr-65/docs/srde/user_guide/data_access",children:"Data Access section"})," of this document."]}),"\n",(0,a.jsx)(t.h2,{id:"data-egress-process",children:"Data Egress Process"}),"\n",(0,a.jsxs)(t.p,{children:["To transport data out of the SRDE project workspace, research team members copy files to be exported to the 'export' folder in the Researcher Workspace Egress bucket, sample command below:\n",(0,a.jsx)(t.img,{alt:"Data egress via gsutils cp",src:s(6854).A+"",width:"815",height:"72"})]}),"\n",(0,a.jsxs)(t.p,{children:["After the files have been copied to the export folder in the egress bucket within the workspace, researchers will notify the Data Steward that they are ready to export.  The Data Steward will first move the files to the Staging Egress folder and scan them using the Data Loss Prevention API, a tool for automatically detecting sensitive data types. Next, they will check the generated report and either pass the inspection or fail it. Passing the inspection moves the data onwards to the Research Data Egress project for external sharing. Failing the inspection blocks the export.\n",(0,a.jsx)(t.img,{alt:"Data egress process overview",src:s(113).A+"",width:"694",height:"247"})]}),"\n",(0,a.jsx)(t.h3,{id:"push-the-data-from-the-research-workspace-to-staging",children:"Push the data from the Research Workspace to Staging"}),"\n",(0,a.jsx)(t.p,{children:"First, run Egress DAG #1 to move files to the Staging Egress folder. Follow the same instructions as above to navigate to the Airflow page."}),"\n",(0,a.jsxs)(t.p,{children:["Once on the Airflow page, find the DAG named ",(0,a.jsx)(t.strong,{children:"[project-id]_Egress_1_Workspace_to_Staging_Inspection."}),"\n",(0,a.jsx)(t.img,{alt:"Find the relevant Airflow DAG",src:s(2029).A+"",width:"861",height:"478"})]}),"\n",(0,a.jsx)(t.p,{children:"Once on the DAG page, follow the steps to trigger the DAG, as instructed above. This DAG executes several tasks:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"An archive copy of the export files is created within the workspace."}),"\n",(0,a.jsx)(t.li,{children:"The export files are moved to the staging environment."}),"\n",(0,a.jsx)(t.li,{children:"A DLP inspection is run to scan the exported files for sensitive data.\nThe DLP scan may take some time to run, so wait for all tasks to be marked as successful (dark green) before proceeding."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"check-the-dlp-inspection-report",children:"Check the DLP inspection report"}),"\n",(0,a.jsxs)(t.p,{children:["After Stage 1 is successfully completed, the DLP inspection findings are written to BigQuery.  To examine results, navigate to BigQuery by going to Google console webpage, typing BigQuery on the search bar, and selecting it from the list.\n",(0,a.jsx)(t.img,{alt:"Big Query",src:s(7964).A+"",width:"1035",height:"331"})]}),"\n",(0,a.jsxs)(t.p,{children:["Once in BigQuery, on the Explorer tab on the left, click on the corresponding project, then on the table that corresponds to the scan that was done. The name will contain the UTC date and time of the scan, using the format ",(0,a.jsx)(t.strong,{children:"dlp_YYYY-MM-DD-HHMMSS"}),". You can verify the report\u2019s creation time under the \u201cDetails\u201d tab.\n",(0,a.jsx)(t.img,{alt:"Big Query exporter tab",src:s(2226).A+"",width:"1266",height:"740"})]}),"\n",(0,a.jsx)(t.p,{children:"Select \u201cQuery > In new tab\u201d to examine the results. The following default query will return a sample of 1000 results:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM \u201ctable_id\u201d LIMIT 1000\n"})}),"\n",(0,a.jsx)(t.p,{children:"For more information on querying the DLP report, see the DLP Interpretation Guide (TODO Add section on DLP Interp. guide!)"}),"\n",(0,a.jsxs)(t.p,{children:["Click on Run to run the query and review the results of the scan. After running the query you will see the results on the lower half of the window:\n",(0,a.jsx)(t.img,{alt:"Big Query scan result",src:s(6116).A+"",width:"1374",height:"771"})]}),"\n",(0,a.jsx)(t.h3,{id:"pass-or-fail-the-inspection",children:"Pass or fail the inspection"}),"\n",(0,a.jsx)(t.p,{children:"Once the results are reviewed, the Data Steward approves or denies movement to the external egress bucket.  They navigate back to the Airflow page and choose one of the following options:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["If DLP scan results are NOT approved, Data Steward fails the data export by running ",(0,a.jsx)(t.strong,{children:"Egress_2_Staging_Fail_inspection"}),". Once on the DAG page, follow the steps to trigger the DAG, as instructed above. The data will be fully deleted from staging, and only the archived copy will remain in the workspace."]}),"\n",(0,a.jsxs)(t.li,{children:["If DLP scan results ARE approved, Data Steward passes the data export by running ",(0,a.jsx)(t.strong,{children:"Egress_3_Staging_Pass_Inspection"}),". Once on the DAG page, follow the steps to trigger the DAG, as instructed above. The data will be transferred to the project\u2019s external egress bucket, where the researchers will be able to access and share it.\nAfter the final egress DAG completes successfully, the Data Steward should notify the researchers either a) that their data is available in the external egress bucket or b) that their data export was denied and why."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"moving-files-to-export",children:"Moving Files to Export"}),"\n",(0,a.jsx)(t.p,{children:"You can use the gsutil cp command to copy data from your home directory to the Egress export folder in the workspace using the following steps. Use the gsutil ls command to see the list of folders in your workspace. Copy your file into the Egress folder, adding /export/yourfilename to the Egress folder path:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"gsutil cp data_file.txt gs://egress_bucket_path/export/data_file.txt\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"cp from export via gsutils",src:s(6513).A+"",width:"901",height:"175"})}),"\n",(0,a.jsx)(t.h2,{id:"auto-inspection",children:"Auto-Inspection"}),"\n",(0,a.jsx)(t.p,{children:"When files are added to the export folder, they are automatically scanned for sensitive data using the Data Loss Prevention API. This is the same tool that the Data Steward will use to examine your exported data and approve or deny the export, so you should review the results of auto-inspection carefully. Before notifying the Data Steward that an export is ready, make sure that the DLP inspection does not detect sensitive info, or that if it does, you are aware of the items it flags and can explain why they are false alarms."}),"\n",(0,a.jsx)(t.p,{children:"The DLP scan is automatically triggered by any new file in the export folder. It may take several minutes to run. When it is complete, a summary file will be written back to the \u201cdlp\u201d folder in the egress bucket."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"gsutil ls gs://egress_bucket_path/dlp\n"})}),"\n",(0,a.jsx)(t.p,{children:"Within this folder, a folder is created for each exported file, and within that are dated summary reports for each version."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"gsutil ls gs://egress_bucket_path/dlp/data_file.txt/\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You should see a file of the format ",(0,a.jsx)(t.strong,{children:"dlp_results_YYYY-MM-DD-HHMMSS"})," corresponding to approximately when you added the file to the export folder. Note that the scan takes about a minute to pick up new files, and may behave oddly if you upload several versions very close together."]}),"\n",(0,a.jsx)(t.p,{children:"To see the summary file contents, use the command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"gsutil cat gs://egress_bucket_path/dlp/data_file.txt/dlp_results_YYYY-MM-DD-HHMMSS \n"})}),"\n",(0,a.jsxs)(t.p,{children:["If sensitive information is detected, you will see it listed by type and count\n",(0,a.jsx)(t.img,{alt:"Type and count of sensitive info",src:s(4793).A+"",width:"886",height:"448"})]}),"\n",(0,a.jsxs)(t.p,{children:["If no sensitive information is detected, you will see a clean scan report. Double-check that the \u201cProcessed bytes\u201d and \u201cTotal estimated bytes\u201d approximately line up with the size of your file\u2013if both values are 0 it is likely that there was an error in the scan.\n",(0,a.jsx)(t.img,{alt:"No sensitive info",src:s(832).A+"",width:"890",height:"174"})]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},4258:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/airflow_permissions-d312474d9f121152c82d6b487e8a5748.png"},7964:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/big_query-9eee21463be4775c680422d780b657bc.png"},2226:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/big_query_exporter_tab-cfc60654ce0b07cd0ffceb8048d567bb.png"},6116:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/big_query_scan_result-9d6726ce2573371a329e21b46333a8f8.png"},1578:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/dag_status-986386918a90a6b59ef4552a0213469b.png"},7310:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/dag_trigger-cd761b28b57c7db2d04fa6fde03cbb48.png"},113:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/data_egress_process_overview-5d9e3bfd6227349f23f6ca77fdc8045c.png"},8170:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/data_ingestion_process_overview-77a4be2f0e6a383da9c4248eb2fc2e13.png"},2029:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/find_relevant_dag-79681050683a47722c4d449c43466d4c.png"},997:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/gcp_cloud_storage_buckets-990188b3efdbd33d1bbeaa5814acd373.png"},8320:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/gcp_copy_to_ingress_bucket-8757b3634d5b6b35c99458119551a32a.png"},5810:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/gcp_staging_ingress_bucket-eeb791fac6440c6c7b916c3a89ed453e.png"},6854:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/gsutils_cp_egress-5397f96ce72523843ffb76372d504d66.png"},6513:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/gsutils_cp_export-9dce0723d61c0c3b5fd7c944084f3ce5.png"},832:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/no_sensitive_info-e7c9a06a9d61f7de854d25f4ea0159fb.png"},7111:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/push_using_airflow-74e2e3826b0ed70246be3383c52b1398.png"},4793:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/sensitive_info_type_count-b4c094cd342d8c9f434f0e78b3cd7f56.png"},3881:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var n=s(8101);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
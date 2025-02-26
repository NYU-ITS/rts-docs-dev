"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2150],{1752:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"hpc/datasets/intro","title":"Datasets Available","description":"General","source":"@site/docs/hpc/04_datasets/01_intro.md","sourceDirName":"hpc/04_datasets","slug":"/hpc/datasets/intro","permalink":"/rts-docs-dev/pr-preview/pr-65/docs/hpc/datasets/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/NYU-ITS/rts-docs-dev/blob/main/docs/hpc/04_datasets/01_intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"hpcSidebar","previous":{"title":"Sharing Data on HPC","permalink":"/rts-docs-dev/pr-preview/pr-65/docs/hpc/storage/sharing_data_on_hpc"},"next":{"title":"Squash File System and Singularity","permalink":"/rts-docs-dev/pr-preview/pr-65/docs/hpc/datasets/squash_file_system_and_singularity"}}');var n=a(5105),i=a(3881);const r={},o="Datasets Available",l={},c=[{value:"General",id:"general",level:2},{value:"Format",id:"format",level:2},{value:"Data Sets",id:"data-sets",level:2},{value:"COCO Dataset",id:"coco-dataset",level:3},{value:"ImageNet and ILSVRC",id:"imagenet-and-ilsvrc",level:3},{value:"ILSVRC (subset of ImageNet)",id:"ilsvrc-subset-of-imagenet",level:4},{value:"Get access to Data",id:"get-access-to-data",level:5},{value:"Millions Songs",id:"millions-songs",level:3},{value:"Twitter Decahose",id:"twitter-decahose",level:3},{value:"ProQuest Congressional Record",id:"proquest-congressional-record",level:3},{value:"C4",id:"c4",level:3},{value:"GQA",id:"gqa",level:3},{value:"MJSynth",id:"mjsynth",level:3},{value:"open-images-dataset",id:"open-images-dataset",level:3},{value:"Pile",id:"pile",level:3},{value:"Waymo open dataset",id:"waymo-open-dataset",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"datasets-available",children:"Datasets Available"})}),"\n",(0,n.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,n.jsx)(s.p,{children:"The HPC team makes available a number of public sets that are commonly used in analysis jobs. The data sets are available Read-Only under"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/scratch/work/public/ml-datasets/"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/vast/work/public/ml-datasets/"})}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["We recommend to use version stored at ",(0,n.jsx)(s.code,{children:"/vast"})," (when available) to have better read performance"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"For some of the datasets users must provide a signed usage agreement before accessing"})}),"\n",(0,n.jsx)(s.h2,{id:"format",children:"Format"}),"\n",(0,n.jsx)(s.p,{children:"Many datasets are available in the form of '.sqf' file, which can be used with Singularity.\nFor example, in order to use coco dataset, one can run the following commands"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"$ singularity exec \\\n  --overlay /<path>/pytorch1.8.0-cuda11.1.ext3:ro \\\n  --overlay /vast/work/public/ml-datasets/coco/coco-2014.sqf:ro \\\n  --overlay /vast/work/public/ml-datasets/coco/coco-2015.sqf:ro \\\n  --overlay /vast/work/public/ml-datasets/coco/coco-2017.sqf:ro \\\n  /scratch/work/public/singularity/cuda11.1-cudnn8-devel-ubuntu18.04.sif /bin/bash\n\n$ singularity exec \\\n  --overlay /<path>/pytorch1.8.0-cuda11.1.ext3:ro \\\n  --overlay /vast/work/public/ml-datasets/coco/coco-2014.sqf:ro \\\n  --overlay /vast/work/public/ml-datasets/coco/coco-2015.sqf:ro \\\n  --overlay /vast/work/public/ml-datasets/coco/coco-2017.sqf:ro \\\n  /scratch/work/public/singularity/cuda11.1-cudnn8-devel-ubuntu18.04.sif find /coco | wc -l\n\n532896\n"})}),"\n",(0,n.jsx)(s.h2,{id:"data-sets",children:"Data Sets"}),"\n",(0,n.jsx)(s.h3,{id:"coco-dataset",children:"COCO Dataset"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"About data set"}),": ",(0,n.jsx)(s.a,{href:"https://cocodataset.org/#home",children:"https://cocodataset.org/"})]}),"\n",(0,n.jsx)(s.p,{children:"Common Objects in Context (COCO) is a large-scale object detection, segmentation, and captioning dataset."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Dataset is available under"}),"\n",(0,n.jsx)(s.code,{children:"/scratch"})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/scratch/work/public/ml-datasets/coco/coco-2014.sqf"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/scratch/work/public/ml-datasets/coco/coco-2015.sqf"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/scratch/work/public/ml-datasets/coco/coco-2017.sqf"})}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"/vast"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/vast/work/public/ml-datasets/coco/coco-2014.sqf"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/vast/work/public/ml-datasets/coco/coco-2015.sqf"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/vast/work/public/ml-datasets/coco/coco-2017.sqf"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"imagenet-and-ilsvrc",children:"ImageNet and ILSVRC"}),"\n",(0,n.jsxs)(s.p,{children:["About data set: ",(0,n.jsx)(s.a,{href:"https://image-net.org/",children:"ImageNet (image-net.org)"})]}),"\n",(0,n.jsxs)(s.p,{children:["ImageNet is an image dataset organized according to the ",(0,n.jsx)(s.a,{href:"https://wordnet.princeton.edu/",children:"WordNet"})," hierarchy (Miller, 1995). Each concept in WordNet, possibly described by multiple words or word phrases, is called a \u201csynonym set\u201d or \u201csynset\u201d. ImageNet populates 21,841 synsets of WordNet with an average of 650 manually verified and full resolution images. As a result, ImageNet contains 14,197,122 annotated images organized by the semantic hierarchy of WordNet (as of August 2014). ImageNet is larger in scale and diversity than the other image classification datasets (",(0,n.jsx)(s.a,{href:"https://arxiv.org/abs/1409.0575",children:"https://arxiv.org/abs/1409.0575"}),")."]}),"\n",(0,n.jsxs)(s.admonition,{type:"note",children:[(0,n.jsx)(s.mdxAdmonitionTitle,{}),(0,n.jsxs)(s.p,{children:["WordNet\xae is a large lexical database of English. Nouns, verbs, adjectives and adverbs are grouped into sets of cognitive synonyms (synsets), each expressing a distinct concept (",(0,n.jsx)(s.a,{href:"https://wordnet.princeton.edu/",children:"https://wordnet.princeton.edu/"}),")"]})]}),"\n",(0,n.jsx)(s.h4,{id:"ilsvrc-subset-of-imagenet",children:"ILSVRC (subset of ImageNet)"}),"\n",(0,n.jsxs)(s.p,{children:["ILSVRC uses a subset of ImageNet images for training the algorithms and some of ImageNet\u2019s image collection protocols for annotating additional images for testing the algorithms (",(0,n.jsx)(s.a,{href:"https://arxiv.org/abs/1409.0575",children:"https://arxiv.org/abs/1409.0575"}),"). The name comes from 'ImageNet Large Scale Visual Recognition Challenge (",(0,n.jsx)(s.a,{href:"https://image-net.org/challenges/LSVRC/2017/",children:"ILSVRC"}),")'. Competition was moved to Kaggle (",(0,n.jsx)(s.a,{href:"http://image-net.org/challenges/LSVRC/2017/",children:"http://image-net.org/challenges/LSVRC/2017/"}),")"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"What is included"})," (",(0,n.jsx)(s.a,{href:"https://arxiv.org/abs/1409.0575",children:"https://arxiv.org/abs/1409.0575"}),")."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"1000 object classes"}),"\n",(0,n.jsx)(s.li,{children:"approximately 1.2 million training images"}),"\n",(0,n.jsx)(s.li,{children:"50 thousand validation images"}),"\n",(0,n.jsx)(s.li,{children:"100 thousand test images"}),"\n",(0,n.jsx)(s.li,{children:"Size of data is about 150 GB (for train and validation)"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Dataset is available under"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/scratch/work/public/ml-datasets/imagenet"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/vast/work/public/ml-datasets/imagenet"})}),"\n"]}),"\n",(0,n.jsx)(s.h5,{id:"get-access-to-data",children:"Get access to Data"}),"\n",(0,n.jsx)(s.p,{children:"New York University does not own this dataset."}),"\n",(0,n.jsxs)(s.p,{children:["Please open the ImageNet site, find the terms of use (",(0,n.jsx)(s.a,{href:"http://image-net.org/download",children:"http://image-net.org/download"}),"), copy them, replace the needed parts with your name, send us an email including the terms with your name - thereby confirming you agree to the these terms. Once you do this, we can grant you access to the copy of the dataset on the cluster."]}),"\n",(0,n.jsx)(s.h3,{id:"millions-songs",children:"Millions Songs"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"About data set"}),":  ",(0,n.jsx)(s.a,{href:"https://labrosa.ee.columbia.edu/millionsong/",children:"https://labrosa.ee.columbia.edu/millionsong/"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Dataset is available under"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/scratch/work/public/MillionSongDataset"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/vast/work/public/ml-datasets/millionsongdataset/"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"twitter-decahose",children:"Twitter Decahose"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"About data set"}),":  ",(0,n.jsx)(s.a,{href:"https://developer.twitter.com/en/docs/twitter-api/enterprise/decahose-api/overview/decahose",children:"https://developer.twitter.com/en/docs/twitter-api/enterprise/decahose-api/overview/decahose"})]}),"\n",(0,n.jsx)(s.p,{children:"NYU has a subscription to Twitter Decahose - 10% random sample of the realtime Twitter Firehose through a streaming connection"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Data are stored"})," in GCP cloud (BigQuery) and on HPC clusters Greene and Peel (Parquet format)."]}),"\n",(0,n.jsxs)(s.p,{children:["Please contact Megan Brown at ",(0,n.jsx)(s.a,{href:"https://csmapnyu.org/",children:"The Center for Social Media & Politics"})," to get access to data and learn the tools available to work with it."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"On cluster dataset is available under (given that you have permissions)"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/scratch/work/twitter_decahose/"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"proquest-congressional-record",children:"ProQuest Congressional Record"}),"\n",(0,n.jsxs)(s.p,{children:["About data set: ",(0,n.jsx)(s.a,{href:"https://guides.nyu.edu/tdm/proquest-congressional-record-tdm-guide",children:"ProQuest Congressional Record"})]}),"\n",(0,n.jsx)(s.p,{children:"The ProQuest Congressional Record text-as-data collection consists of machine-readable files capturing the full text and a small number of metadata fields for a full run of the Congressional Record between 1789 and 2005. Metadata fields include the date of publication, subjects (for issues for which such information exists in the ProQuest system), and URLs linking the full text to the canonical online record for that issue on the ProQuest Congressional platform. A total of 31,952 issues are available."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Dataset is available under"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/scratch/work/public/proquest/"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"c4",children:"C4"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"About data set"}),": ",(0,n.jsx)(s.a,{href:"https://www.tensorflow.org/datasets/catalog/c4",children:"c4  |  TensorFlow Datasets"})]}),"\n",(0,n.jsxs)(s.p,{children:["A colossal, cleaned version of Common Crawl's web crawl corpus.  Based on Common Crawl dataset: ",(0,n.jsx)(s.a,{href:"https://commoncrawl.org",children:"https://commoncrawl.org"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Dataset is available under"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/scratch/work/public/ml-datasets/c4"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/vast/work/public/ml-datasets/c4"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"gqa",children:"GQA"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"About data set"}),": ",(0,n.jsx)(s.a,{href:"https://cs.stanford.edu/people/dorarad/gqa/index.html",children:"GQA: Visual Reasoning in the Real World (stanford.edu)"})]}),"\n",(0,n.jsx)(s.p,{children:"Question Answering on Image Scene Graphs"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Dataset is available under"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/scratch/work/public/ml-datasets/gqa"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/vast/work/public/ml-datasets/gqa"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"mjsynth",children:"MJSynth"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"About data set"}),": ",(0,n.jsx)(s.a,{href:"https://www.robots.ox.ac.uk/~vgg/data/text/",children:"Visual Geometry Group - University of Oxford"})]}),"\n",(0,n.jsx)(s.p,{children:"This is synthetically generated dataset which found to be sufficient for training text recognition on real-world images"}),"\n",(0,n.jsx)(s.p,{children:"This dataset consists of 9 million images covering 90k English words, and includes the training, validation and test splits used in the author's work (archived dataset is about 10 GB)"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Dataset is available under"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/vast/work/public/ml-datasets/mjsynth"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"open-images-dataset",children:"open-images-dataset"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"About data set"}),": ",(0,n.jsx)(s.a,{href:"https://storage.googleapis.com/openimages/web/index.html",children:"Open Images Dataset \u2013 opensource.google"})]}),"\n",(0,n.jsx)(s.p,{children:"A dataset of ~9 million varied images with rich annotations"}),"\n",(0,n.jsx)(s.p,{children:"The images are very diverse and often contain complex scenes with several objects (8.4 per image on average). It contains \timage-level labels annotations, object bounding boxes, object segmentations, visual relationships, localized narratives, and \tmore"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Dataset is available under"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/scratch/work/public/ml-datasets/open-images-dataset"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/vast/work/public/ml-datasets/open-images-dataset"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"pile",children:"Pile"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"About data set"}),": ",(0,n.jsx)(s.a,{href:"https://pile.eleuther.ai/",children:"The Pile (eleuther.ai)"})]}),"\n",(0,n.jsx)(s.p,{children:"The Pile is a 825 GiB diverse, open source language modeling data set that consists of 22 smaller, high-quality datasets combined together."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Dataset is available under"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/scratch/work/public/ml-datasets/pile"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/vast/work/public/ml-datasets/pile"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"waymo-open-dataset",children:"Waymo open dataset"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"About data set"}),": ",(0,n.jsx)(s.a,{href:"https://waymo.com/open/",children:"Open Dataset \u2013 Waymo"})]}),"\n",(0,n.jsx)(s.p,{children:"The field of machine learning is changing rapidly. Waymo is in a unique position to contribute to the research community with \tsome of the largest and most diverse autonomous driving datasets ever released."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Dataset is available under"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"/vast/work/public/ml-datasets/waymo_open_dataset_v_1_2_0_individual_files"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3881:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>o});var t=a(8101);const n={},i=t.createContext(n);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);
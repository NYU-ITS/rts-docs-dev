import MountainSvg from "@site/static/img/undraw_docusaurus_mountain.svg";
import ReactSvg from "@site/static/img/undraw_docusaurus_react.svg";
import TreeSvg from "@site/static/img/undraw_docusaurus_tree.svg";
import Heading from "@theme/Heading";
import clsx from "clsx";

import styles from "./styles.module.css";

interface FeatureItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: React.ReactNode;
}

const FeatureList: FeatureItem[] = [
  {
    title: "High Performance Computing",
    Svg: MountainSvg,
    description: (
      <>
        Seamless access to advanced computing resources, consultation services
        and expertise for research.
      </>
    ),
  },
  {
    title: "High Speed Research Network",
    Svg: TreeSvg,
    description: (
      <>
        The High Speed Research Network (HSRN) is NYU&apos;s high-throughput,
        low-latency computer network dedicated to supporting data-intensive
        sciences.
      </>
    ),
  },
  {
    title: "Pythia",
    Svg: TreeSvg,
    description: (
      <>
        The Pythia Platform is a suite of tools for researchers to harness
        generative AI including a secure access to a chat portal, API access to
        LLMs and an on-prem vector database.
      </>
    ),
  },
  {
    title: "RTC",
    Svg: ReactSvg,
    description: (
      <>
        Research Technology Cloud is our hybrid cloud platform for researchers
        that includes access to an on-prem OpenShift cluster and access to the
        Google Cloud Platform.
      </>
    ),
  },
  {
    title: "SRDE",
    Svg: ReactSvg,
    description: (
      <>
        The Secure Research Data Environment (SRDE) is a centralized secure
        computing platform designed to support research projects that require
        storage and computational resources specifically for sensitive data.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, index) => (
            <Feature key={index} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

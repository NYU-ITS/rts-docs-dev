import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'High Performance Computing',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Seamless access to advanced computing resources, consultation services
         and expertise for research.
      </>
    ),
  },
  {
    title: 'High Speed Research Network',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The High Speed Research Network (HSRN) is NYU's high-throughput,
        low-latency computer network dedicated to supporting data-intensive
        sciences. 
      </>
    ),
  },  
  {
    title: 'Pythia',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The Pythia Platform is a suite of tools for researchers to harness
        generative AI including a secure access to a chat portal, API access
        to LLMs and an on-prem vector database.
      </>
    ),
  },
  {
    title: 'RTC',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Research Technology Cloud is our hybrid cloud platform for researchers
        that includes access to an on-prem OpenShift cluster and access to
        the Google Cloud Platform.
      </>
    ),
  },
  {
    title: 'SRDE',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
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
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

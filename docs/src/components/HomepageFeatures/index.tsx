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
    title: 'Fullstack-Wide Actions',
    Svg: require('@site/static/img/fullstack.svg').default,
    description: (
      <>
        The goal of GitHub Actions Core is to support the entire software development components - Frontend, Backend,
        DevOps, and ML
      </>
    ),
  },
  {
    title: 'Focus on Continuous Integration',
    Svg: require('@site/static/img/ci.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your CI/CD logics, and we&apos;ll do the chores to make happen.
      </>
    ),
  },
  {
    title: 'Powered by GitHub',
    Svg: require('@site/static/img/cloud.svg').default,
    description: (
      <>
        The actions runs on GitHub, making our remote CI infrastructure stable and secure
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

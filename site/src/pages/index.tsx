import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const QUICK_LINKS = [
  { to: '/docs/intro', label: 'Start here' },
  { to: '/docs/daily-workflow/spec-first', label: 'Daily workflow' },
  { to: '/docs/reference/ai-config', label: 'Reference (Exact Text)' },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={clsx('hero hero--primary', styles.hero)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <section className={styles.startSection}>
            <Heading as="h2" className={styles.startHeading}>
              Quick links
            </Heading>
            <ul className={styles.startList}>
              {QUICK_LINKS.map(({to, label}) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Get started
            </Link>
          </section>
        </div>
      </main>
    </Layout>
  );
}

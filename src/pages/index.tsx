import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroBackground} aria-hidden="true">
        <div className={styles.heroGrid} />
        <div className={styles.heroGlowA} />
        <div className={styles.heroGlowB} />
      </div>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          <span className={styles.heroTitleInner}>
            <Translate id="homepage.hero.title">A Ripple Song</Translate>
            <span className={styles.betaBadge}>v0.6.0-beta</span>
          </span>
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          <Translate id="homepage.hero.tagline">All-in-one podcast theme for WordPress</Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.primaryCta)}
            to="/docs/intro">
            <Translate id="homepage.hero.primaryCta">Theme Tutorial · 5min</Translate>
          </Link>
          <Link className={clsx('button button--secondary button--lg', styles.secondaryCta)} to="/blog">
            <Translate id="homepage.hero.secondaryCta">What's new</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

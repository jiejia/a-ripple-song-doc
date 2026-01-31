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
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            <span className={styles.heroTitleInner}>
              <Translate id="homepage.hero.title">A Ripple Song</Translate>
            </span>
          </Heading>
          <p className={styles.heroSubtitle}>
            <Translate id="homepage.hero.tagline">
              All-in-one podcast theme for WordPress.
              Now with modular plugin architecture.
            </Translate>
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.primaryCta)}
              to="/docs/intro">
              <Translate id="homepage.hero.primaryCta">Get Started</Translate>
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.secondaryCta)}
              to="https://github.com/jiejia/a-ripple-song">
              <Translate id="homepage.hero.secondaryCta">GitHub</Translate>
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}>
              <div className={styles.terminalDot}></div>
              <div className={styles.terminalDot}></div>
              <div className={styles.terminalDot}></div>
            </div>
            <div className={styles.terminalBody}>
              <div className={styles.codeLine}>
                <span className={styles.codePrefix}>$</span>
                <span className={styles.codeCommand}># Install the core plugin</span>
              </div>
              <div className={styles.codeLine}>
                <span className={styles.codePrefix}>$</span>
                <span className={styles.codeCommand}>wp plugin install a-ripple-song-podcast</span>
              </div>
              <br />
              <div className={styles.codeLine}>
                <span className={styles.codePrefix}>$</span>
                <span className={styles.codeCommand}># Install the theme</span>
              </div>
              <div className={styles.codeLine}>
                <span className={styles.codePrefix}>$</span>
                <span className={styles.codeCommand}>wp theme install a-ripple-song</span>
              </div>
            </div>
          </div>
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

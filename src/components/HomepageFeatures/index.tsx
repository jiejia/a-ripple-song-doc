import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';
import type {LucideIcon} from 'lucide-react';
import {
  AudioWaveform,
  ArrowLeftRight,
  BarChart3,
  Code2,
  LayoutGrid,
  Languages,
  Palette,
  Podcast,
  Smartphone,
} from 'lucide-react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: LucideIcon;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.features.podcast.title',
      message: 'Professional Podcast Management',
    }),
    icon: Podcast,
    description: (
      <Translate id="homepage.features.podcast.description">
        Complete podcast content management solution with episode numbering, season management, and member/guest systems. Automatically extracts audio metadata (duration, file size, format), compliant with iTunes and Podcasting 2.0 standards. Built-in RSS feed generation for one-click distribution to major podcast platforms.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.audio.title',
      message: 'Immersive Audio Experience',
    }),
    icon: AudioWaveform,
    description: (
      <Translate id="homepage.features.audio.description">
        High-performance player powered by Howler.js with real-time spectrum waveform visualization. Supports variable playback speed (0.5x-2x), progress memory, volume control, and playlist management. Maintains playback state during page transitions for a smooth single-page app experience.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.themes.title',
      message: '56 Beautiful Theme Colors',
    }),
    icon: Palette,
    description: (
      <Translate id="homepage.features.themes.description">
        Built with DaisyUI + OKLCH color space, offering 28 light and 28 dark themes. Supports automatic/manual dark mode switching with carefully calibrated colors ensuring visual consistency and accessibility.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.tech.title',
      message: 'Modern Tech Stack',
    }),
    icon: Code2,
    description: (
      <Translate id="homepage.features.tech.description">
        Built on Roots Sage framework with Laravel Blade templating, TailwindCSS v4, Alpine.js state management, and Vite build tool. Clean code structure with excellent developer experience, supporting hot reload and fast builds.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.i18n.title',
      message: 'Comprehensive Internationalization',
    }),
    icon: Languages,
    description: (
      <Translate id="homepage.features.i18n.description">
        Built-in WordPress multilingual translation system supporting podcast metadata in 14 languages. Smart date formatting (relative time/absolute dates) automatically adapts to different language conventions including Chinese, Japanese, and Korean.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.analytics.title',
      message: 'Data Tracking & Analytics',
    }),
    icon: BarChart3,
    description: (
      <Translate id="homepage.features.analytics.description">
        Built-in view and play count statistics system that records user behavior in real-time via AJAX. Supports batch metric data retrieval to provide data support for content operations.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.widgets.title',
      message: 'Flexible Widget System',
    }),
    icon: LayoutGrid,
    description: (
      <Translate id="homepage.features.widgets.description">
        Provides 7 professional widgets: podcast list, blog list, member showcase, subscription links, tag cloud, carousel banner, and footer links. Quickly build page layouts through the visual editor.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.responsive.title',
      message: 'Mobile-First Responsive Design',
    }),
    icon: Smartphone,
    description: (
      <Translate id="homepage.features.responsive.description">
        Fully responsive layout with fixed bottom player on mobile and static display on desktop. Supports touch gestures, keyboard navigation, and screen readers to ensure a great experience for all users.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.transitions.title',
      message: 'Seamless Page Transitions',
    }),
    icon: ArrowLeftRight,
    description: (
      <Translate id="homepage.features.transitions.description">
        Integrated Swup page transition engine for smooth SPA-like navigation. Maintains audio playback state during page switches with automatic form plugin and script reloading for a native app-like experience.
      </Translate>
    ),
  },
];

function Feature({title, icon: Icon, description, index}: FeatureItem & {index: number}) {
  return (
    <div className={clsx('col col--4', styles.col)}>
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <div className={styles.badge} aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className={styles.media} aria-hidden="true">
            <Icon className={styles.icon} aria-hidden="true" focusable="false" />
          </div>
        </div>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <div className={styles.cardDesc}>{description}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={styles.background} aria-hidden="true">
        <div className={styles.grid} />
        <div className={styles.glowA} />
        <div className={styles.glowB} />
      </div>
      <div className="container">
        <header className={styles.header}>
          <p className={styles.kicker}>
            <Translate id="homepage.features.kicker">Everything you need</Translate>
          </p>
          <Heading as="h2" className={styles.title}>
            <Translate id="homepage.features.title">A modern podcast theme, built for speed</Translate>
          </Heading>
          <p className={styles.subtitle}>
            <Translate id="homepage.features.subtitle">
              CMS, player, widgets, i18n, analytics, and buttery-smooth navigation — all designed to feel like a
              polished product.
            </Translate>
          </p>
        </header>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
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
    title: '专业播客管理系统',
    icon: Podcast,
    description: (
      <>
        完整的播客内容管理解决方案，支持剧集编号、季度管理、成员和嘉宾系统。自动提取音频元数据（时长、文件大小、格式），符合 iTunes 和 Podcasting 2.0 标准。内置 RSS 源生成，一键分发到各大播客平台。
      </>
    ),
  },
  {
    title: '沉浸式音频播放体验',
    icon: AudioWaveform,
    description: (
      <>
        基于 Howler.js 的高性能播放器，配备实时频谱波形可视化。支持变速播放（0.5x-2x）、进度记忆、音量控制、播放列表管理。无刷新页面切换时保持播放状态，提供流畅的单页应用体验。
      </>
    ),
  },
  {
    title: '56 套精美主题配色',
    icon: Palette,
    description: (
      <>
        采用 DaisyUI + OKLCH 色彩空间，提供 28 套浅色和 28 套深色主题。支持自动/手动切换深色模式，所有颜色经过精心调校，确保视觉一致性和可访问性。
      </>
    ),
  },
  {
    title: '现代化技术栈',
    icon: Code2,
    description: (
      <>
        基于 Roots Sage 框架构建，使用 Laravel Blade 模板引擎、TailwindCSS v4、Alpine.js 状态管理和 Vite 构建工具。代码结构清晰，开发体验优秀，支持热重载和快速构建。
      </>
    ),
  },
  {
    title: '完善的国际化支持',
    icon: Languages,
    description: (
      <>
        内置 WordPress 多语言翻译系统，支持 14 种语言的播客元数据。智能日期格式化（相对时间/绝对日期），自动适配中文、日文、韩文等不同语言习惯。
      </>
    ),
  },
  {
    title: '数据追踪与分析',
    icon: BarChart3,
    description: (
      <>
        内置浏览量和播放量统计系统，通过 AJAX 实时记录用户行为。支持批量获取指标数据，为内容运营提供数据支持。
      </>
    ),
  },
  {
    title: '灵活的小部件系统',
    icon: LayoutGrid,
    description: (
      <>
        提供 7 个专业小部件：播客列表、博客列表、成员展示、订阅链接、标签云、轮播横幅、页脚链接。通过可视化编辑器快速搭建页面布局。
      </>
    ),
  },
  {
    title: '移动优先响应式设计',
    icon: Smartphone,
    description: (
      <>
        完全响应式布局，移动端固定底部播放器，桌面端静态展示。支持触摸手势、键盘导航和屏幕阅读器，确保所有用户都能获得良好体验。
      </>
    ),
  },
  {
    title: '无刷新页面转换技术',
    icon: ArrowLeftRight,
    description: (
      <>
        集成 Swup 页面转换引擎，实现类似单页应用的流畅导航体验。页面切换时保持音频播放状态不中断，支持表单插件和脚本自动重载，提供原生应用般的使用体验。
      </>
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
          <p className={styles.kicker}>Everything you need</p>
          <Heading as="h2" className={styles.title}>
            A modern podcast theme, built for speed
          </Heading>
          <p className={styles.subtitle}>
            CMS, player, widgets, i18n, analytics, and buttery-smooth navigation — all designed to feel like a
            polished product.
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

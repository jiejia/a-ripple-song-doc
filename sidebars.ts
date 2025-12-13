import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '开始使用',
      items: ['quickstart', 'installation', 'configuration'],
    },
    {
      type: 'category',
      label: '内容制作',
      items: ['content/episodes', 'content/rss'],
    },
    {
      type: 'category',
      label: '功能说明',
      items: ['player', 'widgets', 'i18n', 'analytics'],
    },
    {
      type: 'category',
      label: '维护与支持',
      items: ['troubleshooting', 'changelog'],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;

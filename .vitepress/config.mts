import { defineConfig } from 'vitepress'

const logo = {
  src: '/podcast.svg',
  alt: 'A Ripple Song logo'
}

const socialLinks = [
  { icon: 'github', link: 'https://github.com/jiejia/a-ripple-song' }
]

const copyright = 'Copyright © 2026 A Ripple Song'

function makeDocsLocale({
  label,
  lang,
  baseLink,
  title,
  description,
  homeLabel,
  themeLabel,
  introLabel,
  usageLabel,
  themeSectionLabel,
  whatIsLabel,
  gettingStartedLabel,
  manageLabel,
  categoryLabel,
  settingsLabel,
  rssGenerationLabel,
  footerMessage,
  prevLabel,
  nextLabel,
  outlineLabel,
  sidebarMenuLabel,
  returnToTopLabel,
  darkModeSwitchLabel
}) {
  return {
    label,
    lang,
    link: baseLink,
    title,
    description,
    themeConfig: {
      logo,
      nav: [
        { text: homeLabel, link: baseLink },
        { text: themeLabel, link: `${baseLink}themes/daisy` }
      ],
      sidebar: [
        {
          text: introLabel,
          items: [
            { text: whatIsLabel, link: `${baseLink}guide/what-is-a-ripple-song` },
            { text: gettingStartedLabel, link: `${baseLink}guide/getting-started` }
          ]
        },
        {
          text: usageLabel,
          items: [
            { text: manageLabel, link: `${baseLink}podcast/manage` },
            { text: categoryLabel, link: `${baseLink}podcast/category` },
            { text: settingsLabel, link: `${baseLink}podcast/settings` },
            { text: rssGenerationLabel, link: `${baseLink}podcast/rss-generation` }
          ]
        },
        {
          text: themeSectionLabel,
          items: [
            { text: themeLabel, link: `${baseLink}themes/daisy` }
          ]
        }
      ],
      socialLinks,
      footer: {
        message: footerMessage,
        copyright
      },
      docFooter: {
        prev: prevLabel,
        next: nextLabel
      },
      outline: {
        label: outlineLabel
      },
      darkModeSwitchLabel,
      sidebarMenuLabel,
      returnToTopLabel
    }
  }
}

export default defineConfig({
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/podcast.svg' }]
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'A Ripple Song',
      description: 'A WordPress Podcast Plugin',
      themeConfig: {
        logo,
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Theme', link: '/themes/daisy.html' }
        ],
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'What is A Ripple Song?', link: '/guide/what-is-a-ripple-song' },
              { text: 'Getting Started', link: '/guide/getting-started' }
            ]
          },
          {
            text: 'Usage',
            items: [
              { text: 'Managing Podcasts', link: '/podcast/manage' },
              { text: 'Podcast Categories', link: '/podcast/category' },
              { text: 'Podcast Settings', link: '/podcast/settings' },
              { text: 'Podcast RSS Generation', link: '/podcast/rss-generation' }
            ]
          },
          {
            text: 'Theme',
            items: [
              { text: 'Daisy A Ripple Song', link: '/themes/daisy' }
            ]
          }
        ],
        socialLinks,
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2026 A Ripple Song'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        outline: {
          label: 'On this page'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: 'A Ripple Song',
      description: '一个 WordPress 播客插件',
      themeConfig: {
        logo,
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '主题', link: '/zh/themes/daisy.html' }
        ],
        sidebar: [
          {
            text: '简介',
            items: [
              { text: 'A Ripple Song 是什么', link: '/zh/guide/what-is-a-ripple-song' },
              { text: '快速开始', link: '/zh/guide/getting-started' }
            ]
          },
          {
            text: '使用',
            items: [
              { text: '管理播客', link: '/zh/podcast/manage' },
              { text: '播客分类', link: '/zh/podcast/category' },
              { text: '播客设置', link: '/zh/podcast/settings' },
              { text: '播客 RSS 生成', link: '/zh/podcast/rss-generation' }
            ]
          },
          {
            text: '主题',
            items: [
              { text: 'Daisy A Ripple Song', link: '/zh/themes/daisy' }
            ]
          }
        ],
        socialLinks,
        footer: {
          message: '基于 MIT License 发布。',
          copyright: 'Copyright © 2026 A Ripple Song'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        outline: {
          label: '本页目录'
        },
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部'
      }
    },
    zh_TW: makeDocsLocale({
      label: '繁體中文',
      lang: 'zh-TW',
      baseLink: '/zh_TW/',
      title: 'A Ripple Song',
      description: '一個 WordPress 播客外掛',
      homeLabel: '首頁',
      themeLabel: '主題',
      introLabel: '簡介',
      usageLabel: '使用',
      themeSectionLabel: '主題',
      whatIsLabel: 'A Ripple Song 是什麼',
      gettingStartedLabel: '快速開始',
      manageLabel: '管理播客',
      categoryLabel: '播客分類',
      settingsLabel: '播客設定',
      rssGenerationLabel: '播客 RSS 生成',
      footerMessage: '基於 MIT License 發佈。',
      prevLabel: '上一頁',
      nextLabel: '下一頁',
      outlineLabel: '本頁目錄',
      sidebarMenuLabel: '選單',
      returnToTopLabel: '返回頂部',
      darkModeSwitchLabel: '外觀'
    }),
    zh_HK: makeDocsLocale({
      label: '繁體中文（香港）',
      lang: 'zh-HK',
      baseLink: '/zh_HK/',
      title: 'A Ripple Song',
      description: '一個 WordPress 播客外掛',
      homeLabel: '首頁',
      themeLabel: '主題',
      introLabel: '簡介',
      usageLabel: '使用',
      themeSectionLabel: '主題',
      whatIsLabel: 'A Ripple Song 是什麼',
      gettingStartedLabel: '快速開始',
      manageLabel: '管理播客',
      categoryLabel: '播客分類',
      settingsLabel: '播客設定',
      rssGenerationLabel: '播客 RSS 生成',
      footerMessage: '基於 MIT License 發佈。',
      prevLabel: '上一頁',
      nextLabel: '下一頁',
      outlineLabel: '本頁目錄',
      sidebarMenuLabel: '選單',
      returnToTopLabel: '返回頂部',
      darkModeSwitchLabel: '外觀'
    }),
    fr_FR: makeDocsLocale({
      label: 'Français',
      lang: 'fr-FR',
      baseLink: '/fr_FR/',
      title: 'A Ripple Song',
      description: 'Un plugin WordPress pour podcast',
      homeLabel: 'Accueil',
      themeLabel: 'Thème',
      introLabel: 'Introduction',
      usageLabel: 'Utilisation',
      themeSectionLabel: 'Thème',
      whatIsLabel: "Qu'est-ce que A Ripple Song ?",
      gettingStartedLabel: 'Premiers pas',
      manageLabel: 'Gérer les podcasts',
      categoryLabel: 'Catégories de podcast',
      settingsLabel: 'Paramètres du podcast',
      rssGenerationLabel: 'Génération du flux RSS du podcast',
      footerMessage: 'Publié sous licence MIT.',
      prevLabel: 'Page précédente',
      nextLabel: 'Page suivante',
      outlineLabel: 'Sur cette page',
      sidebarMenuLabel: 'Menu',
      returnToTopLabel: 'Retour en haut',
      darkModeSwitchLabel: 'Apparence'
    }),
    es_ES: makeDocsLocale({
      label: 'Español',
      lang: 'es-ES',
      baseLink: '/es_ES/',
      title: 'A Ripple Song',
      description: 'Un plugin de podcast para WordPress',
      homeLabel: 'Inicio',
      themeLabel: 'Tema',
      introLabel: 'Introducción',
      usageLabel: 'Uso',
      themeSectionLabel: 'Tema',
      whatIsLabel: '¿Qué es A Ripple Song?',
      gettingStartedLabel: 'Primeros pasos',
      manageLabel: 'Gestionar podcasts',
      categoryLabel: 'Categorías del podcast',
      settingsLabel: 'Ajustes del podcast',
      rssGenerationLabel: 'Generación RSS del podcast',
      footerMessage: 'Publicado bajo la licencia MIT.',
      prevLabel: 'Página anterior',
      nextLabel: 'Página siguiente',
      outlineLabel: 'En esta página',
      sidebarMenuLabel: 'Menú',
      returnToTopLabel: 'Volver arriba',
      darkModeSwitchLabel: 'Apariencia'
    }),
    pt_BR: makeDocsLocale({
      label: 'Português (Brasil)',
      lang: 'pt-BR',
      baseLink: '/pt_BR/',
      title: 'A Ripple Song',
      description: 'Um plugin de podcast para WordPress',
      homeLabel: 'Início',
      themeLabel: 'Tema',
      introLabel: 'Introdução',
      usageLabel: 'Uso',
      themeSectionLabel: 'Tema',
      whatIsLabel: 'O que é A Ripple Song?',
      gettingStartedLabel: 'Primeiros passos',
      manageLabel: 'Gerenciar podcasts',
      categoryLabel: 'Categorias do podcast',
      settingsLabel: 'Configurações do podcast',
      rssGenerationLabel: 'Geração de RSS do podcast',
      footerMessage: 'Publicado sob a licença MIT.',
      prevLabel: 'Página anterior',
      nextLabel: 'Próxima página',
      outlineLabel: 'Nesta página',
      sidebarMenuLabel: 'Menu',
      returnToTopLabel: 'Voltar ao topo',
      darkModeSwitchLabel: 'Aparência'
    }),
    ru_RU: makeDocsLocale({
      label: 'Русский',
      lang: 'ru-RU',
      baseLink: '/ru_RU/',
      title: 'A Ripple Song',
      description: 'Плагин подкастов для WordPress',
      homeLabel: 'Главная',
      themeLabel: 'Тема',
      introLabel: 'Введение',
      usageLabel: 'Использование',
      themeSectionLabel: 'Тема',
      whatIsLabel: 'Что такое A Ripple Song?',
      gettingStartedLabel: 'Быстрый старт',
      manageLabel: 'Управление подкастами',
      categoryLabel: 'Категории подкаста',
      settingsLabel: 'Настройки подкаста',
      rssGenerationLabel: 'Генерация RSS подкаста',
      footerMessage: 'Опубликовано под лицензией MIT.',
      prevLabel: 'Предыдущая',
      nextLabel: 'Следующая',
      outlineLabel: 'На этой странице',
      sidebarMenuLabel: 'Меню',
      returnToTopLabel: 'Наверх',
      darkModeSwitchLabel: 'Внешний вид'
    }),
    ar: makeDocsLocale({
      label: 'العربية',
      lang: 'ar',
      baseLink: '/ar/',
      title: 'A Ripple Song',
      description: 'إضافة بودكاست ووردبريس',
      homeLabel: 'الرئيسية',
      themeLabel: 'القالب',
      introLabel: 'مقدمة',
      usageLabel: 'الاستخدام',
      themeSectionLabel: 'القالب',
      whatIsLabel: 'ما هو A Ripple Song؟',
      gettingStartedLabel: 'البدء السريع',
      manageLabel: 'إدارة البودكاست',
      categoryLabel: 'تصنيفات البودكاست',
      settingsLabel: 'إعدادات البودكاست',
      rssGenerationLabel: 'توليد RSS للبودكاست',
      footerMessage: 'منشور تحت رخصة MIT.',
      prevLabel: 'الصفحة السابقة',
      nextLabel: 'الصفحة التالية',
      outlineLabel: 'في هذه الصفحة',
      sidebarMenuLabel: 'القائمة',
      returnToTopLabel: 'العودة إلى الأعلى',
      darkModeSwitchLabel: 'المظهر'
    }),
    ur: makeDocsLocale({
      label: 'اردو',
      lang: 'ur',
      baseLink: '/ur/',
      title: 'A Ripple Song',
      description: 'ورڈپریس پوڈکاسٹ پلگ ان',
      homeLabel: 'ہوم',
      themeLabel: 'تھیم',
      introLabel: 'تعارف',
      usageLabel: 'استعمال',
      themeSectionLabel: 'تھیم',
      whatIsLabel: 'A Ripple Song کیا ہے؟',
      gettingStartedLabel: 'آغاز کیسے کریں',
      manageLabel: 'پوڈکاسٹ کا انتظام',
      categoryLabel: 'پوڈکاسٹ کی کیٹیگریز',
      settingsLabel: 'پوڈکاسٹ کی ترتیبات',
      rssGenerationLabel: 'پوڈکاسٹ RSS جنریشن',
      footerMessage: 'MIT لائسنس کے تحت شائع کیا گیا۔',
      prevLabel: 'پچھلا صفحہ',
      nextLabel: 'اگلا صفحہ',
      outlineLabel: 'اس صفحے پر',
      sidebarMenuLabel: 'مینو',
      returnToTopLabel: 'اوپر واپس جائیں',
      darkModeSwitchLabel: 'ظاہری شکل'
    }),
    hi_IN: makeDocsLocale({
      label: 'हिन्दी',
      lang: 'hi-IN',
      baseLink: '/hi_IN/',
      title: 'A Ripple Song',
      description: 'WordPress पॉडकास्ट प्लगइन',
      homeLabel: 'होम',
      themeLabel: 'थीम',
      introLabel: 'परिचय',
      usageLabel: 'उपयोग',
      themeSectionLabel: 'थीम',
      whatIsLabel: 'A Ripple Song क्या है?',
      gettingStartedLabel: 'शुरुआत करें',
      manageLabel: 'पॉडकास्ट प्रबंधन',
      categoryLabel: 'पॉडकास्ट श्रेणियाँ',
      settingsLabel: 'पॉडकास्ट सेटिंग्स',
      rssGenerationLabel: 'पॉडकास्ट RSS जनरेशन',
      footerMessage: 'MIT लाइसेंस के अंतर्गत प्रकाशित।',
      prevLabel: 'पिछला पृष्ठ',
      nextLabel: 'अगला पृष्ठ',
      outlineLabel: 'इस पृष्ठ पर',
      sidebarMenuLabel: 'मेनू',
      returnToTopLabel: 'शीर्ष पर जाएँ',
      darkModeSwitchLabel: 'रूप'
    }),
    bn_BD: makeDocsLocale({
      label: 'বাংলা',
      lang: 'bn-BD',
      baseLink: '/bn_BD/',
      title: 'A Ripple Song',
      description: 'WordPress পডকাস্ট প্লাগইন',
      homeLabel: 'হোম',
      themeLabel: 'থিম',
      introLabel: 'পরিচিতি',
      usageLabel: 'ব্যবহার',
      themeSectionLabel: 'থিম',
      whatIsLabel: 'A Ripple Song কী?',
      gettingStartedLabel: 'শুরু করুন',
      manageLabel: 'পডকাস্ট পরিচালনা',
      categoryLabel: 'পডকাস্ট বিভাগ',
      settingsLabel: 'পডকাস্ট সেটিংস',
      rssGenerationLabel: 'পডকাস্ট RSS তৈরি',
      footerMessage: 'MIT লাইসেন্সের অধীনে প্রকাশিত।',
      prevLabel: 'পূর্ববর্তী পৃষ্ঠা',
      nextLabel: 'পরবর্তী পৃষ্ঠা',
      outlineLabel: 'এই পাতায়',
      sidebarMenuLabel: 'মেনু',
      returnToTopLabel: 'উপরে ফিরে যান',
      darkModeSwitchLabel: 'চেহারা'
    }),
    ko_KR: makeDocsLocale({
      label: '한국어',
      lang: 'ko-KR',
      baseLink: '/ko_KR/',
      title: 'A Ripple Song',
      description: '워드프레스 팟캐스트 플러그인',
      homeLabel: '홈',
      themeLabel: '테마',
      introLabel: '소개',
      usageLabel: '사용',
      themeSectionLabel: '테마',
      whatIsLabel: 'A Ripple Song이란?',
      gettingStartedLabel: '시작하기',
      manageLabel: '팟캐스트 관리',
      categoryLabel: '팟캐스트 카테고리',
      settingsLabel: '팟캐스트 설정',
      rssGenerationLabel: '팟캐스트 RSS 생성',
      footerMessage: 'MIT 라이선스로 배포됩니다.',
      prevLabel: '이전 페이지',
      nextLabel: '다음 페이지',
      outlineLabel: '이 페이지에서',
      sidebarMenuLabel: '메뉴',
      returnToTopLabel: '위로 이동',
      darkModeSwitchLabel: '모양'
    })
  }
})

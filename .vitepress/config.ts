import { defineConfig } from 'vitepress'
import {
  author,
  contributing,
  font,
  github,
  ogImage,
  ogUrl,
  twitter,
  vitestDescription,
  vitestName,
} from './meta'
// import { teamMembers } from './contributors'

export default defineConfig({
  lang: 'en-US',
  title: vitestName,
  description: vitestDescription,
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
    ['meta', { name: 'author', content: author }],
    ['meta', { name: 'keywords', content: 'vitest, vite, test, coverage, snapshot, react, vue, preact, svelte, solid, lit, ruby, cypress, puppeteer, jsdom, happy-dom, test-runner, jest, typescript, esm, tinypool, tinyspy, c8, node' }],
    ['meta', { property: 'og:title', content: vitestName }],
    ['meta', { property: 'og:description', content: vitestDescription }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: vitestName }],
    ['meta', { name: 'twitter:description', content: vitestDescription }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { href: font, rel: 'stylesheet' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
  ],
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/vitest-dev/vitest/tree/main/docs/:path',
      text: 'Suggest changes to this page',
    },

    algolia: {
      appId: 'ZTF29HGJ69',
      apiKey: '9c3ced6fed60d2670bb36ab7e8bed8bc',
      indexName: 'vitest',
      // searchParameters: {
      //   facetFilters: ['tags:en'],
      // },
    },


    socialLinks: [
      { icon: 'twitter', link: twitter },
      // { icon: 'discord', link: discord },
      { icon: 'github', link: github },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-PRESENT Chris Towles',
    },

    nav: [
      //{ text: 'Guide', link: '/guide/' },
      { text: 'Posts', link: '/post/' },
      //{ text: 'API', link: '/api/' },
      //{ text: 'Config', link: '/config/' },
      /*{
        text: `v${version}`,
        items: [
          {
            text: 'Release Notes ',
            link: releases,
          },
          {
            text: 'Contributing ',
            link: contributing,
          },
        ],
      },*/
    ],

    sidebar: {
      // TODO: bring sidebar of apis and config back
      '/': [
        {
          text: 'Posts',
          items: [
            {
              text: 'Posts',
              link: '/posts/',
            },
          ],
        },
        {
          text: 'Guide',
          items: [
            {
              text: 'Why Vitest',
              link: '/guide/why',
            },
            {
              text: 'Getting Started',
              link: '/guide/',
            },
            {
              text: 'Features',
              link: '/guide/features',
            },
            {
              text: 'CLI',
              link: '/guide/cli',
            },
            {
              text: 'Test Filtering',
              link: '/guide/filtering',
            },
            {
              text: 'Coverage',
              link: '/guide/coverage',
            },
            {
              text: 'Snapshot',
              link: '/guide/snapshot',
            },
            {
              text: 'Mocking',
              link: '/guide/mocking',
            },
            {
              text: 'Vitest UI',
              link: '/guide/ui',
            },
            {
              text: 'In-source Testing',
              link: '/guide/in-source',
            },
            {
              text: 'Test Context',
              link: '/guide/test-context',
            },
            {
              text: 'Extending Matchers',
              link: '/guide/extending-matchers',
            },
            {
              text: 'IDE Integration',
              link: '/guide/ide',
            },
            {
              text: 'Debugging',
              link: '/guide/debugging',
            },
            {
              text: 'Comparisons',
              link: '/guide/comparisons',
            },
            {
              text: 'Migration Guide',
              link: '/guide/migration',
            },
          ],
        },
        {
          text: 'API',
          items: [
            {
              text: 'API Reference',
              link: '/api/',
            },
          ],
        },
        {
          text: 'Config',
          items: [
            {
              text: 'Config Reference',
              link: '/config/',
            },
          ],
        },
      ],
    },
  },
})

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
    ['meta', { name: 'keywords', content: 'chris towles, towles, developer, programmer, development, full stack, vitest, vite, test, coverage, snapshot, react, vue, preact, svelte, solid, lit, ruby, cypress, puppeteer, jsdom, happy-dom, test-runner, jest, typescript, esm, tinypool, tinyspy, c8, node' }],
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
      pattern: 'https://github.com/ChrisTowles/Blog/tree/main/docs/:path',
      text: 'Suggest changes to this page',
    },

    algolia: {
      appId: '00000', // TODO: replace with my appId
      apiKey: '000000 ', // TODO: replace with my appId
      indexName: 'vitest',
      // searchParameters: {
      //   facetFilters: ['tags:en'],
      // },
    },


    socialLinks: [
      { icon: 'twitter', link: twitter },
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
      ],
    },
  },
})

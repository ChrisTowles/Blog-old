import { defineConfig } from 'vitepress'
import {
  author,
  font,
  github,
  ogImage,
  ogUrl,
  twitter,
  siteShortName,
  siteDescription,
  authorName,
} from './meta'
import { posts } from './posts'

const sideNavLinks = posts.map((x) => {
  return {
    text: x.title,
    link: x.link,
  };
})

console.log(sideNavLinks);


export default defineConfig({
  lang: 'en-US',
  title: authorName,
  description: siteDescription,
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
    ['meta', { name: 'author', content: author }],
    ['meta', { name: 'keywords', content: 'chris towles, towles, developer, programmer, development, full stack, vitest, vite, test, coverage, snapshot, react, vue, preact, svelte, solid, lit, ruby, cypress, puppeteer, jsdom, happy-dom, test-runner, jest, typescript, esm, tinypool, tinyspy, c8, node' }],
    ['meta', { property: 'og:title', content: siteShortName }],
    ['meta', { property: 'og:description', content: siteDescription }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: siteShortName }],
    ['meta', { name: 'twitter:description', content: siteDescription }],
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
      pattern: 'https://github.com/ChrisTowles/Blog/tree/main/:path',
      text: 'Suggest changes to this page',
    },
    /*
        algolia: {
          appId: '00000', // TODO: replace with my appId
          apiKey: '000000 ', // TODO: replace with my appId
          indexName: 'vitest',
          // searchParameters: {
          //   facetFilters: ['tags:en'],
          // },
        },
    */

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
      { text: 'Posts', link: '/posts/' },
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
      '/': [
        {
          text: 'Posts',
          items: sideNavLinks,
        },
      ],
    },
  },
})

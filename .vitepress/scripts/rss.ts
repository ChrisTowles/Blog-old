import { dirname } from 'path'
import fg from 'fast-glob'
import fs from 'fs-extra'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import type { FeedOptions, Item } from 'feed'
import { Feed } from 'feed'
import { ogUrl, ogImage, authorName, email, siteShortName, siteDescription } from '../meta';
import { slugify } from './slugify'
import { join, resolve } from 'pathe'

const docsDir = resolve(__dirname, '../..')
const postsDir = join(docsDir, 'post')
const PostsJsonFilePath = resolve(docsDir, '.vitepress/posts-data.json')


const AUTHOR = {
  name: authorName,
  email: email,
  link: ogUrl,
}
const markdown = MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
})

async function run() {
  await buildBlogRSS()
}

async function buildBlogRSS() {
  const files = await fg('posts/*.md')

  const options = {
    title: siteShortName,
    description: siteDescription,
    id: ogUrl,
    link: ogUrl,
    copyright: `CC BY-NC-SA 4.0 2022 © ${authorName}`,
    feedLinks: {
      json: `${ogUrl}feed.json`,
      atom: `${ogUrl}feed.atom`,
      rss: `${ogUrl}feed.xml`,
    },
  }
  const posts: any[] = (
    await Promise.all(
      files.filter(i => !i.includes('index'))
        .map(async(i) => {
<<<<<<< HEAD:.vitepress/scripts/rss.ts
   


/*
      
        articles.map(async (article) => {
          const file = matter.read(`./blog/${article}`, {
            excerpt: true,
            excerpt_separator: '<!-- more -->'
          })
      
          const { data, excerpt, path } = file
          const contents = removeMd(excerpt).trim().split(/\r\n|\n|\r/)
      
          return {
            ...data,
            title: contents[0].replace(/\s{2,}/g, '').trim(),
            path: path.replace(/\.md$/, '.html'),
            excerpt: contents.slice(1).join('').replace(/\s{2,}/g, '').trim()
          }
        })
      )

  */
=======
          console.log('rss post:', i)
>>>>>>> 6693a6836713c038518b492d6abce03ff9cb5639:_REMOVE/scripts/rss.ts
          const raw = await fs.readFile(i, 'utf-8')
          const { data, content } = matter(raw)

          console.log('rss post:', data)

          if (data.lang !== 'en')
            return

          const html = markdown.render(content)
            .replace('src="/', `src="${ogUrl}/`)

          if (data.image?.startsWith('/'))
            data.image = ogUrl + data.image

          return {
            ...data,
            date: new Date(data.date),
            content: html,
            author: [AUTHOR],
            link: ogUrl + i.replace(/^pages(.+)\.md$/, '$1'),
          }
        }),
    ))
    .filter(Boolean)

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  await writeFeed('feed', options, posts)
}

async function writeFeed(name: string, options: FeedOptions, items: Item[]) {
  options.author = AUTHOR
<<<<<<< HEAD:.vitepress/scripts/rss.ts
  options.image = ogImage
  options.favicon = `${ogUrl}favicon.png`
=======
  options.image = 'https://chris.towles.dev/og.png'
  options.favicon = 'https://chris.towles.dev/favicon.png'
>>>>>>> 6693a6836713c038518b492d6abce03ff9cb5639:_REMOVE/scripts/rss.ts

  const feed = new Feed(options)

  items.forEach(item => feed.addItem(item))
  items.forEach(i=> console.log(i.title, i.date))

  await fs.ensureDir(dirname(`./dist/${name}`))
  await fs.writeFile(`./dist/${name}.xml`, feed.rss2(), 'utf-8')
  await fs.writeFile(`./dist/${name}.atom`, feed.atom1(), 'utf-8')
  await fs.writeFile(`./dist/${name}.json`, feed.json1(), 'utf-8')
}

run()
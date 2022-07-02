import fg from 'fast-glob'
import fs from 'fs-extra'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import type { Author, FeedOptions, Item } from 'feed'
import { Feed } from 'feed'
import { ogUrl, ogImage, authorName, email, siteShortName, siteDescription } from '../meta';
// import { slugify } from './slugify'
import { dirname, resolve, join } from 'pathe'
import { json } from 'stream/consumers'




const docsDir = resolve(__dirname, '..')




export async function buildPostData(): any[] {
  const files = await fg('posts/*.md')

  
  const posts: Item[] = (
    await Promise.all(
      files.filter(i => !i.includes('index'))
        .map(async(i) => {

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

          const raw = await fs.readFile(i, 'utf-8')
          const { data, content } = matter(raw)

          return {
            ...data,
            date: new Date(data.date),
            content: content,
            link: i.replace(/^pages(.+)\.md$/, '$1'),
          } as Item;
        }),
    ))
    .filter(Boolean)

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  
  return posts;
}

export async function writePostData( posts: any[]) {

  const postFileRaw = JSON.stringify({
    posts: posts
  }, null, 4);


  const file = join(docsDir,`post-data.json`)
  console.log('writing Post Data', file)

  await fs.writeFile(file, postFileRaw, 'utf-8')
  
}
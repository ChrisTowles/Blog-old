// import { dirname } from 'path'
import fg from 'fast-glob'
import fs from 'fs-extra'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import type { Author, FeedOptions, Item } from 'feed'
import { Feed } from 'feed'
import { ogUrl, ogImage, authorName, email, siteShortName, siteDescription } from '../meta';
import { dirname } from 'pathe'




export function getBlogAuthor(): Author {
  const author: Author = {
    name: authorName,
    email: email,
    link: ogUrl,
  }
  return author;
}

export async function buildBlogRSS() {
  const files = await fg('posts/*.md')
  const author = getBlogAuthor();

  const markdown = MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
  })
  
  
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


          const html = markdown.render(content)
            .replace('src="/', `src="${ogUrl}/`)

          if (data.image?.startsWith('/'))
            data.image = ogUrl + data.image

          return {
            ...data,
            date: new Date(data.date),
            content: html,
            author: [author],
            link: ogUrl + i.replace(/^pages(.+)\.md$/, '$1'),
          } as Item;
        }),
    ))
    .filter(Boolean)

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  return posts;
}

export async function writeFeed(items: Item[]) {
  const author = getBlogAuthor();

  const options = {
    title: siteShortName,
    description: siteDescription,
    id: ogUrl,
    author: author,
    link: ogUrl,
    copyright: `CC BY-NC-SA 4.0 2022 © ${authorName}`,
    feedLinks: {
      json: `${ogUrl}feed.json`,
      atom: `${ogUrl}feed.atom`,
      rss: `${ogUrl}feed.xml`,
    },
  } as FeedOptions;

  options.author = author
  options.image = ogImage
  options.favicon = `${ogUrl}favicon.png`

  const feed = new Feed(options)

  items.forEach(item => feed.addItem(item))
  //items.forEach(i=> console.log(i.title, i.date))

  const name = 'feed'
  await fs.ensureDir(dirname(`./dist/${name}`))
  await fs.writeFile(`./dist/${name}.xml`, feed.rss2(), 'utf-8')
  await fs.writeFile(`./dist/${name}.atom`, feed.atom1(), 'utf-8')
  await fs.writeFile(`./dist/${name}.json`, feed.json1(), 'utf-8')
}


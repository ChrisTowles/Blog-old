import fg from 'fast-glob'
import fs from 'fs-extra'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import type { Author, FeedOptions, Item } from 'feed'
import { Feed } from 'feed'
import { ogUrl, ogImage, authorName, email, siteShortName, siteDescription } from '../../src/.vitepress/meta';
// import { slugify } from './slugify'
import { dirname, resolve, join } from 'pathe'
import { json } from 'stream/consumers'




const docsDir = resolve(__dirname, '..')




export async function buildPostData(): any[] {
  const files = await fg('posts/*.md')


  const posts: Item[] = (
    await Promise.all(
      files.filter(i => !i.includes('index'))
        .map(async (postPath) => {


          const file = matter.read(postPath, {
            excerpt: true,
            excerpt_separator: '<!-- more -->'
          })

          const { data, excerpt, content, path } = file

  
  
          // console.table(file);

          const result = {
            ...data,
            date: new Date(data.date),
            content: excerpt || content,
            link: postPath.replace(/\.md$/, '.html'),
          } as Item;

          console.table(result);
          return result;

                  /*
              return {
                ...data,
                title: contents[0].replace(/\s{2,}/g, '').trim(),
                path: path.replace(/\.md$/, '.html'),
                excerpt: contents.slice(1).join('').replace(/\s{2,}/g, '').trim()
              }
*/
        }),
    ))
    .filter(Boolean)

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))


  return posts;
}

export async function writePostData(posts: any[]) {

  const postFileRaw = JSON.stringify({
    posts: posts
  }, null, 4);


  const file = join(docsDir, `post-data.json`)
  console.log('writing Post Data', file)

  await fs.writeFile(file, postFileRaw, 'utf-8')

}
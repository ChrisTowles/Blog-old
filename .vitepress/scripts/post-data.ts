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

export interface PostData {
  title: string;
  lang: string, 
  date: Date;
  content: string; // html
  link: string;

}

export interface PostDataFile {
  posts: PostData[];
}


export async function buildPostData(): Promise<PostData[]> {
  const files = await fg('posts/*.md')

  const markdown = MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
  })
  


  const posts: PostData[] = (
    await Promise.all(
      files.filter(i => !i.includes('index'))
        .map(async (postPath) => {


          const file = matter.read(postPath, {
            excerpt: true,
            excerpt_separator: '<!-- more -->',

          })

          const { data, excerpt, content } = file

          const html = markdown.render(excerpt || content)
  
          // console.table(file);

          const result = {
            ...data,
            lang: 'en',
            date: new Date(data.date),
            content: html,
            link: postPath.replace(/\.md$/, '.html'),
          } as PostData;

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

export async function writePostData(posts: PostData[]) {

  const postFileRaw = JSON.stringify({
    posts: posts
  } as PostDataFile, null, 4);


  const file = join(docsDir, `post-data.json`)
  console.log('writing Post Data', file)

  await fs.writeFile(file, postFileRaw, 'utf-8')

}
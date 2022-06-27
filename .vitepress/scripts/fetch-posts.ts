import { join, resolve } from 'pathe'
import fs from 'fs-extra'

import { teamMembers } from '../contributors'

const docsDir = resolve(__dirname, '../..')
const postsDir = join(docsDir, 'post')
const PostsJsonFilePath = resolve(docsDir, '.vitepress/posts-data.json')
//const dirAvatars = resolve(docsDir, 'public/user-avatars/')
// const dirSponsors = resolve(docsDir, 'public/sponsors/')

async function fetchPosts() {
  await fs.ensureDir(postsDir)
  const posts = await fs.readdir( postsDir)
  posts.forEach(file => {
    console.log(file);
  });
}
/*
  const data = await Promise.all(
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
}

async function fetchSponsors() {
  await fs.ensureDir(dirSponsors)
  await download('https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg', join(dirSponsors, 'antfu.svg'))
  await download('https://cdn.jsdelivr.net/gh/patak-dev/static/sponsors.svg', join(dirSponsors, 'patak-dev.svg'))
}
*/
fetchPosts()


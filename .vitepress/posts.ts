import postsJson from './posts-data.json'

export interface PostAuthor {
  name: string,
  email: string,
  link: string,
}

export interface PostFeedData {
  title: string,
  date: string, 
  lang: string,
  duration: string,
  content: string,
  author: PostAuthor[],
  link: string
}


// not on how to fake data.
// const getAvatarUrl = (name: string) => import.meta.hot ? `https://github.com/${name}.png` : `/user-avatars/${name}.png`

const  posts: PostFeedData[] =  (postsJson as PostFeedData[]);



export { posts }

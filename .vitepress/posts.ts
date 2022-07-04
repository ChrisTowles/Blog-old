import postsJson from './post-data.json'
import { PostData, PostDataFile } from './scripts/post-data';

const  posts: PostData[] =  (postsJson as unknown as PostDataFile).posts
export { posts }

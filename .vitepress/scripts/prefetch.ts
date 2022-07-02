import { buildBlogRSS, writeFeed } from "./rss"
import { buildPostData, writePostData } from "./post-data"



async function run() {

    console.log("Building RSS Feed")
    const feedPosts = await buildBlogRSS()
    await writeFeed(feedPosts)
    console.log("Completed RSS Feed")

    console.log("Writing Post Data")
    const posts = await buildPostData()
    await writePostData(posts)
    console.log("Completed Post Data")
}


run();
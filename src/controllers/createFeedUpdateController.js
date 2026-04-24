import {fetchRssFeed} from "../api/client.js";
import {parseRssFeed} from "../utils/parseRssFeed.js";

export const createFeedUpdateController = (model) => {
  setInterval(
    () => {
      const feeds = model.rssStore.feeds;
      feeds.forEach(feed => {
        fetchRssFeed(feed.rssUrl).then(response => {
          const { posts } = parseRssFeed(response.data.contents)
          const existingPostsLinks = model.rssStore.posts.map(post => post.link)
          const newPosts = posts.filter(post => !existingPostsLinks.includes(post.link))

          model.rssStore.posts = model.rssStore.posts.concat(newPosts)
        }).catch(err => console.log(err));
      })
    }, 5000
  )
}

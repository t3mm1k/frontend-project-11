export const renderFeed = (feed) => {
  return `
    <div class="rss-post m-1">
      <a href="${feed.link}">${feed.title}</a>
      <p>${feed.description}</p>
    </div>
  `
}
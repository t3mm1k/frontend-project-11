export const renderFeed = (feed) => {
  return `
    <div class="rss-post m-1" data-id=${feed.id}>
      <a href="${feed.link}">${feed.title}</a>
      <p>${feed.description}</p>
    </div>
  `
}
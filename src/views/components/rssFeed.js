export const renderFeed = (feed) => {
  return `
    <article class="rss-feed m-1" data-id="${feed.id}">
      <h3 class="h5 mb-2">${feed.title}</h3>
      <p>${feed.description}</p>
    </article>
  `
}

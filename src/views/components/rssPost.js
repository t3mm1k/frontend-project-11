export const renderRssPost = (post) => {
  return `
    <div class="rss-post m-1" data-id=${post.id}>
      <a href="${post.link}">${post.title}</a>  
    </div>
  `
}
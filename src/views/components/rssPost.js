export const renderRssPost = (post, t) => {
  return `
    <div class="rss-post d-flex align-items-start justify-content-between gap-3" data-id="${post.id}">
      <a class="fw-semibold text-decoration-none" href="${post.link}" target="_blank" rel="noopener noreferrer">${post.title}</a>
      <button class="btn btn-outline-primary btn-sm rss-post-preview flex-shrink-0" type="button" data-id="${post.id}">${t('post.preview')}</button>
    </div>
  `
}

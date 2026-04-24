import { renderPage } from './components/page.js'
import { i18n } from '../locales/i18n.js'
import { renderRssPost } from './components/rssPost.js'
import { renderFeed } from './components/rssFeed.js'
import Modal from 'bootstrap/js/dist/modal'

export const createFeedView = (container) => {
  container.innerHTML = renderPage(i18n.t)

  const input = document.getElementById('rss-url')
  const form = document.querySelector('.rss-form')
  const feedbackLabel = form.querySelector('.rss-label')
  const postsContainer = document.querySelector('.rss-posts')
  const feedsContainer = document.querySelector('.rss-feeds')
  const modalElement = document.getElementById('modal')
  const modalTitle = modalElement.querySelector('.modal-title')
  const modalDescription = modalElement.querySelector('.post-modal-description')
  const modalLink = modalElement.querySelector('.post-modal-link')
  const postModal = new Modal(modalElement)

  const onInput = (handle) => {
    input.addEventListener('input', (e) => {
      handle(e.target.value)
    })
  }
  const onSubmit = (handle) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      handle(input.value)
    })
  }
  const onPostPreview = (handle) => {
    postsContainer.addEventListener('click', (event) => {
      const button = event.target.closest('.rss-post-preview')

      if (!button) {
        return
      }

      handle(button.dataset.id)
    })
  }
  const onModalClose = (handle) => {
    modalElement.addEventListener('hidden.bs.modal', () => {
      handle()
    })
  }

  const renderIdleFeedback = () => {
    feedbackLabel.classList.add('hidden')
  }
  const renderSendingFeedback = () => {
    feedbackLabel.textContent = i18n.t('url.loading', { ns: 'errors' })
  }
  const renderFailedFeedback = (message) => {
    input.classList.add('error')
    feedbackLabel.classList.add('error')
    feedbackLabel.textContent = i18n.exists(message, { ns: 'errors' })
      ? i18n.t(message, { ns: 'errors' })
      : message
  }

  const renderSuccessFeedback = () => {
    feedbackLabel.classList.add('success')
    feedbackLabel.textContent = i18n.t('url.success', { ns: 'errors' })
  }

  const renderForm = (state) => {
    input.classList.remove('error', 'success', 'hidden')
    feedbackLabel.classList.remove('hidden', 'error', 'success')

    switch (state.form.status) {
      case 'idle':
        renderIdleFeedback()
        break
      case 'sending':
        renderSendingFeedback()
        break
      case 'failed':
        renderFailedFeedback(state.form.error)
        break
      case 'success':
        renderSuccessFeedback()
        break
      default:
        renderIdleFeedback()
    }
  }
  const renderPosts = (model) => {
    const posts = model.rssStore.posts
    postsContainer.innerHTML = posts.map((post) => {
      const isViewed = model.ui.viewedPosts.includes(post.id)
      return renderRssPost(post, i18n.t, isViewed)
    }).join('\n')
  }
  const renderFeeds = (feeds) => {
    feedsContainer.innerHTML = feeds.map(feed => renderFeed(feed)).join('\n')
  }
  const renderModal = (state) => {
    const post = state.rssStore.posts.find(item => item.id === state.ui.modalPostId)

    if (!post) {
      postModal.hide()
      return
    }

    modalTitle.textContent = post.title ?? ''
    modalDescription.textContent = post.description ?? ''
    modalLink.href = post.link ?? '#'
    postModal.show()
  }

  return {
    onInput,
    onSubmit,
    onPostPreview,
    onModalClose,
    renderForm,
    renderPosts,
    renderFeeds,
    renderModal,
  }
}

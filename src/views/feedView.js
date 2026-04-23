import { renderPage } from './components/page.js';
import { i18n } from '../locales/i18n.js'
import { renderRssPost } from "./components/rssPost.js";
import {renderFeed} from "./components/rssFeed.js";

export const createFeedView = (container) => {
  container.innerHTML = renderPage(i18n.t);

  const input = document.getElementById('rss-url');
  const form = document.querySelector('.rss-form');
  const feedbackLabel = form.querySelector('.rss-label');
  const postsContainer = document.querySelector('.rss-posts');
  const feedsContainer = document.querySelector('.rss-feeds');

  const onInput = (handle) => {
    input.addEventListener('input', (e) => {
      handle(e.target.value);
    });
  }
  const onSubmit = (handle) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handle(input.value);
    })
  }

  const renderIdleFeedback = () => {
    feedbackLabel.classList.add('hidden');
  }
  const renderSendingFeedback = () => {
    feedbackLabel.textContent = i18n.t("url.loading", {ns: "validation"})
  }
  const renderFailedFeedback = (message) => {
    input.classList.add('error');
    feedbackLabel.classList.add('error');
    feedbackLabel.textContent = i18n.exists(message) ?
      i18n.t(message) :
      message;
  }

  const renderSuccessFeedback = () => {
    feedbackLabel.classList.add('success')
    feedbackLabel.textContent = i18n.t("url.success", {ns: "validation"})
  }

  const renderForm = (state) => {
    input.classList.remove('error', 'success', 'hidden')
    feedbackLabel.classList.remove('hidden', 'error', 'success');

    switch (state.form.status) {
      case 'idle':
        renderIdleFeedback()
        break;
      case 'sending':
        renderSendingFeedback()
        break;
      case "failed":
        renderFailedFeedback(message)
        break;
      case 'success':
        renderSuccessFeedback()
        break;
    }

  }
  const renderPosts = (posts) => {
    postsContainer.innerHTML = posts.map((post) => renderRssPost(post)).join('\n');
  }
  const renderFeeds = (feeds) => {
    feedsContainer.innerHTML = feeds.map((feed) => renderFeed(feed)).join('\n');
  }
  return {
    onInput,
    onSubmit,
    renderForm,
    renderPosts,
    renderFeeds,
  }
};

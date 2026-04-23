import { renderPage } from './components/page.js';
import { i18n } from '../locales/i18n.js'
import { renderRssPost } from "./components/rssPost.js";

export const createFeedView = (container) => {
  container.innerHTML = renderPage(i18n.t);

  const input = document.getElementById('rss-url');
  const form = document.querySelector('.rss-form');
  const inputLabel = form.querySelector('.rss-label');
  const postsContainer = document.querySelector('.rss-posts');

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
  const renderForm = (state) => {
    input.classList.remove('error', 'success', 'hidden')
    inputLabel.classList.remove('hidden', 'error', 'success');

    if (state.form.status === 'submitted') {
      if (state.form.error) {
        input.classList.add('error');
        inputLabel.classList.add('error');
        inputLabel.textContent = i18n.t(state.form.error, { ns: 'validation' });
      } else {
        inputLabel.classList.add('success');
        inputLabel.textContent = i18n.t('url.success', { ns: 'validation' });
      }
    } else {
      inputLabel.classList.add('hidden');
      input.classList.remove('error');
    }
  }
  const renderPosts = (posts) => {
    console.log(postsContainer)
    console.log(posts.map((post) => {renderRssPost(post)}).join('\n'))
    postsContainer.innerHTML = posts.map((post) => renderRssPost(post)).join('\n');
  }
  return {
    onInput,
    onSubmit,
    renderForm,
    renderPosts
  }
};

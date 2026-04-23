import { renderPage } from './components/page.js';

export const createFeedView = (container) => {
  container.innerHTML = renderPage();

  const input = document.getElementById('rss-url');
  const form = document.querySelector('.rss-form');
  const inputLabel = form.querySelector('.rss-label');

  const onInput = (handle) => {
    input.addEventListener('input', (e) => {
      handle(e.target.value);
    });
  }
  const onSubmit = (handle) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handle(input);
    })
  }
  const renderForm = (state) => {
    input.classList.remove('error', 'success', 'hidden')
    inputLabel.classList.remove('hidden', 'error', 'success');

    if (state.form.status === 'submitted') {
      if (state.error) {
        inputLabel.classList.add('success');
        inputLabel.textContent = 'RSS успешно загружен';
      } else {
        input.classList.add('error');
        inputLabel.classList.add('error');
        inputLabel.textContent = state.form.error;
      }
    } else {
      console.log(state.form.status);
      inputLabel.classList.add('hidden');
      input.classList.remove('error');
    }
  }
  return {
    onInput,
    onSubmit,
    renderForm
  }
};

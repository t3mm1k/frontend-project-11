import { renderPage } from './components/page.js';

export const createFeedView = (container) => {
  container.innerHTML = renderPage();
};

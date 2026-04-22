import { createFeedView } from '../views/feedView.js';

export const initApp = () => {
  const appContainer = document.querySelector('#app');

  createFeedView(appContainer);
};

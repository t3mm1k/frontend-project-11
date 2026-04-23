import { createFeedView } from '../views/feedView.js';
import { createFeedModel } from '../models/FeedModel.js';
import { subscribe, snapshot } from 'valtio/vanilla';
import { createFormController } from "../controllers/createFormController.js";

export const initApp = () => {
  const appContainer = document.querySelector('#app');

  const model =  createFeedModel();
  const view = createFeedView(appContainer);
  createFormController(view, model);


  subscribe(model, () => {
    view.renderForm(snapshot(model));
  });
  subscribe(model.rssStore, () => {
    view.renderPosts(snapshot(model).rssStore.posts);
    view.renderFeeds(snapshot(model).rssStore.feeds);
  })
  subscribe(model, () => {console.log(snapshot(model));});
};

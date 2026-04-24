import { createFeedView } from '../views/feedView.js';
import { createFeedModel } from '../models/FeedModel.js';
import { subscribe, snapshot } from 'valtio/vanilla';
import { createFormController } from "../controllers/createFormController.js";
import {createFeedUpdateController} from "../controllers/createFeedUpdateController.js";
import { createModalController } from '../controllers/createModalController.js';

export const initApp = () => {
  const appContainer = document.querySelector('#app');

  const model =  createFeedModel();
  const view = createFeedView(appContainer);
  createFormController(view, model);
  createFeedUpdateController(model);
  createModalController(view, model);


  subscribe(model.form, () => {
    view.renderForm(snapshot(model));
  });
  subscribe(model.rssStore, () => {
    view.renderPosts(snapshot(model).rssStore.posts);
    view.renderFeeds(snapshot(model).rssStore.feeds);
  });
  subscribe(model.ui, () => {
    view.renderModal(snapshot(model));
  });
  subscribe(model, () => {console.log(snapshot(model));});

};

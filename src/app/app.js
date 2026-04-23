import { createFeedView } from '../views/feedView.js';
import { createFeedModel } from '../models/feedModel.js';
import { subscribe, snapshot } from 'valtio/vanilla';
import { createFeedController } from '../controllers/createFeedController.js';

export const initApp = () => {
  const appContainer = document.querySelector('#app');

  const model =  createFeedModel();
  const view = createFeedView(appContainer);
  createFeedController(view, model);

  subscribe(model, () => {
    view.renderForm(snapshot(model));
  });
  subscribe(model, () => {console.log(snapshot(model));});
};

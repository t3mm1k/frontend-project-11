import formSchema from '../utils/formSchema.js';
import { fetchRssFeed } from '../api/client.js';
import { parseRssFeed } from '../utils/parseRssFeed.js';

const getValidationErrorKey = (error) => {
  const validationError = error.errors?.[0] ?? error.message;

  return typeof validationError === 'string' ? validationError : validationError.key;
};

const createFeedController = (view, state) => {
  view.onInput((newValue) => {
    state.form.currentValue = newValue;
    state.form.status = 'idle'
    state.form.error = null;
  });
  view.onSubmit((newValue) => {
    state.form.currentValue = newValue;
    state.form.status = 'submitted'
    state.form.error = null;
    formSchema.validate({
      url: state.form.currentValue,
      feeds: [...state.rssStore.feeds, state.form.currentValue]
    }).then((res) => {
      state.form.rssStore.push(res.url)
      return fetchRssFeed(res.url);
    }).then((response) => {
      parseRssFeed(response.data.contents);
    }).catch((err) => {
      state.form.error = getValidationErrorKey(err);
    })
  });

}

export { createFeedController };

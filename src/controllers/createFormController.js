import formSchema from '../utils/formSchema.js';
import { fetchRssFeed } from '../api/client.js';
import { parseRssFeed } from '../utils/parseRssFeed.js';

const getErrorKey = (error) => {
  const validationError = error.errors?.[0];

  if (typeof validationError === 'string') {
    return validationError;
  }

  if (validationError?.key) {
    return validationError.key;
  }

  if (error.message?.key) {
    return error.message.key;
  }

  return error.message ?? 'rss.invalid';
};

const createFormController = (view, state) => {
  view.onInput((newValue) => {
    state.form.currentValue = newValue;
    state.form.status = 'idle'
    state.form.error = null;
  });
  view.onSubmit((newValue) => {
    state.form.currentValue = newValue;
    state.form.status = 'submitted'
    state.form.error = null;
    console.log([...state.rssStore.feeds, state.form.currentValue])
    formSchema.validate({
      url: state.form.currentValue,
      feeds: state.rssStore.feeds
    }).then((res) => {
      console.log('push to feeds')
      state.rssStore.feeds.push({link: res.url})
      return fetchRssFeed(res.url);
    }).then((response) => {
      console.log('render')
      parseRssFeed(response.data.contents);
    }).catch((err) => {
      state.form.error = getErrorKey(err);
    })
  });

}

export { createFormController };

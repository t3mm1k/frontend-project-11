import formSchema from '../utils/formSchema.js';

const createFeedController = (view, state) => {
  view.onInput((newValue) => {
    state.form.currentValue = newValue;
    state.form.status = 'idle'
  });
  view.onSubmit((newValue) => {
    state.form.currentValue = newValue;
    state.form.status = 'submitted'
    formSchema.validate({
      url: state.form.currentValue,
      feeds: state.form.feeds
    }).then((res) => {
      state.form.feeds.push(res.url)

    }).catch((err) => {
      state.form.error = err.message;
    })
  });

}

export { createFeedController };
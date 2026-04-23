import formSchema from '../utils/formSchema.js';

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
      feeds: state.form.feeds
    }).then((res) => {
      state.form.feeds.push(res.url)

    }).catch((err) => {
      state.form.error = getValidationErrorKey(err);
    })
  });

}

export { createFeedController };

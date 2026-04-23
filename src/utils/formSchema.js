import * as yup from 'yup'
import { setLocale } from "yup";

setLocale({
  string: {
    url: { key: 'url.invalid' },
    required: { key: 'url.required' },
    min: ({ min }) => ({ key: "url.required", values: { min } })
  },
})

let schema = yup.object().shape({
  url: yup.string().required().min(1).url().test(
    'is-unique',
    { key: 'url.duplicate' },
    function isUnique(value) {
      return !this.parent.feeds.includes(value);
    }
  ),
  feeds: yup.array().of(yup.string())
});

export default schema


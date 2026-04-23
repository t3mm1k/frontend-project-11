import * as yup from 'yup'
let schema = yup.object().shape({
  url: yup.string().url('invalid').required().min(1, 'required'),
  feeds: yup.array().of(yup.string()).test(
    'is-unique',
    'duplicate',
    (value) => new Set(value).size === value.length
  )
});

export default schema


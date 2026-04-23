import * as yup from 'yup'
let schema = yup.object().shape({
  url: yup.string().url('Ссылка должна быть валидным URL').required().min(1, 'Не должно быть пустым'),
  feeds: yup.array().of(yup.string()).test(
    'is-unique',
    '',
    (value) => new Set(value).size === value.length
  )
});

export default schema


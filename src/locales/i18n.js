import i18next from 'i18next'
import ruLocaleCommon from './ru/common.json'
import enLocaleCommon from './en/common.json'
import ruLocaleErrors from './ru/errors.json'
import enLocaleErrors from './en/errors.json'

export const i18n = i18next.createInstance()

export const initI18next = () => i18n.init({
  lng: 'ru',
  defaultNS: 'common',
  ns: ['common', 'errors'],
  resources: {
    en: {
      common: enLocaleCommon,
      errors: enLocaleErrors,
    },
    ru: {
      common: ruLocaleCommon,
      errors: ruLocaleErrors,
    },
  },
})

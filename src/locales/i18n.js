import i18next from 'i18next';
import ruLocaleCommon from './ru/common.json'
import enLocaleCommon from './en/common.json'
import ruLocaleValidation from './ru/validation.json'
import enLocaleValidation from './en/validation.json'

export const i18n = i18next.createInstance();

export const initI18next = () =>  i18n.init({
  lng: 'en',
  defaultNS: 'common',
  ns: ['common', 'validation'],
  resources: {
    en: {
      common: enLocaleCommon,
      validation: enLocaleValidation,
    },
    ru: {
      common: ruLocaleCommon,
      validation: ruLocaleValidation,
    }
  }
});
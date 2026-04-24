import './styles/main.css'
import { initApp } from './app/app.js'
import { initI18next } from './locales/i18n.js'
initI18next().then(() => {
  initApp()
},
)

import { use } from 'i18next'
import { initReactI18next } from 'react-i18next'

import * as PT_BR from './PT_BR'

use(initReactI18next).init({
  resources: { 'pt-BR': PT_BR },
  lng: 'pt-BR',
  fallbackLng: 'en',
  defaultNS: 'Glossary',
  debug: false,
})

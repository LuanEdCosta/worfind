import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './app'

import '@fontsource/poppins'
import './locales/Locales.config'

import './styles/Main.style.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

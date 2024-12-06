import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './components/Router/Router.tsx'
//import Test from './components/Fichier de test/test.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter/>
  </StrictMode>,
)

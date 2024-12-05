import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.tsx'
//import Test from './components/Fichier de test/test.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <App/>
  </StrictMode>,
)

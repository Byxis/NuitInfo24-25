import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Credit from './components/credit/credit'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Credit />
  </StrictMode>,
)

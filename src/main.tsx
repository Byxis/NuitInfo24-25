import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import App from './components/App/App.tsx'
<<<<<<< HEAD

=======
=======
import AppRouter from './components/Router/Router.tsx'
>>>>>>> 06d487d (feet:un peu css page home)
//import Test from './components/Fichier de test/test.tsx'
>>>>>>> af470ba (HomePage & NavBar prototype)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter/>
  </StrictMode>,
)

import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import CarteInteractive from '../CarteInteractive/CarteInteractive.tsx'
import Coeur from '../Coeur/Coeur.tsx'
import CourantsOceaniques from '../Coeur/CourantsOceaniques.tsx'
import Poumons from '../Poumons/Poumons.tsx'
import Plancton from '../Poumons/Plancton.tsx'
import SystemeDigestif from '../SystemeDigestif/SystemeDigestif.tsx'
import ReseauTrophique from '../SystemeDigestif/ReseauTrophique.tsx'
import SystemeImmunitaire from '../SystemeImmunitaire/SystemeImmunitaire.tsx'
import RecifCorallien from '../SystemeImmunitaire/RecifCorallien.tsx'
import Peau from '../Peau/Peau.tsx'
import Reins from '../Reins/Reins.tsx'
import Surface from '../Peau/Surface.tsx'
import Mangroves from '../Reins/Mangroves.tsx'
import Sang from '../Sang/Sang.tsx'
import Eau from '../Sang/Eau.tsx'
import VaisseauxSanguins from '../VaisseauxSanguins/VaisseauxSanguins.tsx'
import RivieresFleuves from '../VaisseauxSanguins/RivieresFleuves.tsx'
import { useState } from 'react'
import Layout from '../Layout.tsx'


function App2() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  };
  return (
    <><div className="App">
      <header>
        <h1>{darkMode ? 'Mode Sombre' : 'Mode Clair'}</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Passer au mode clair' : 'Passer au mode sombre'}
        </button>
        <CarteInteractive />
      </header>
      <main>
      </main>
    </div>
    </>
  )
}

export default App2

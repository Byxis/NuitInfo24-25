import './App.css'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import Layout from './Layout.tsx'
import CarteInteractive from '../CarteInteractive/CarteInteractive.tsx'
import Coeur from '../Coeur/Coeur.tsx'
import CourantsOceaniques from '../Coeur/CourantsOceaniques.tsx'
import Poumons from '../Poumons/Poumons.tsx'
import Plancton from '../Poumons/Plancton.tsx'
import SystemeDigestif from '../SystemeDigestif/SystemeDigestif.tsx'
import ReseauTrophique from '../SystemeDigestif/ReseauTrophique.tsx'
import SystemeImmunitaire from '../SystemeImmunitaire/SystemeImmunitaire.tsx'
import RecifCorallien from '../SystemeImmunitaire/RecifCorallien.tsx'


function App() {

  return (
    <Router>
      <Routes>
        <Route element = {<Layout/>}>
          <Route path="/" element={<CarteInteractive />} />
          <Route path="/Coeur" element={<Coeur />} />
          <Route path="/CourantsOceaniques" element={<CourantsOceaniques />} />
          <Route path="/Poumons" element={<Poumons />} />
          <Route path="/Plancton" element={<Plancton />} />
          <Route path="/SystemeDigestif" element={<SystemeDigestif />} />
          <Route path="/ReseauTrophique" element={<ReseauTrophique />} />
          <Route path="/SystemeImmunitaire" element={<SystemeImmunitaire />} />
          <Route path="/RecifCorallien" element={<RecifCorallien />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

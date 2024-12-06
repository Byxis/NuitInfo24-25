import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './Router.css'
import Layout from '../Layout'
import Home from '../Pages/Homepage/Home'
import Solution from '../Pages/Solutionpage/Solution'
import App1 from '../Pages/App/App'
import App2 from '../App/App'
import CarteInteractive from '../CarteInteractive/CarteInteractive'
import Coeur from '../Coeur/Coeur'
import CourantsOceaniques from '../Coeur/CourantsOceaniques'
import Peau from '../Peau/Peau'
import Surface from '../Peau/Surface'
import Plancton from '../Poumons/Plancton'
import Poumons from '../Poumons/Poumons'
import Mangroves from '../Reins/Mangroves'
import Reins from '../Reins/Reins'
import Eau from '../Sang/Eau'
import Sang from '../Sang/Sang'
import ReseauTrophique from '../SystemeDigestif/ReseauTrophique'
import SystemeDigestif from '../SystemeDigestif/SystemeDigestif'
import RecifCorallien from '../SystemeImmunitaire/RecifCorallien'
import SystemeImmunitaire from '../SystemeImmunitaire/SystemeImmunitaire'
import RivieresFleuves from '../VaisseauxSanguins/RivieresFleuves'
import VaisseauxSanguins from '../VaisseauxSanguins/VaisseauxSanguins'
import Credit from '../credit/credit'
import Interview from '../Pages/Interview/Interview'



function AppRouter() {

  return (
    <>
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/jeu/quiz" element={<App1/>}/>
          <Route path="/solution" element={<Solution/>}/>
          <Route path="/jeu/carte-interactive" element={<App2/>}/>
          <Route path="/a-propos" element={<Credit/>}/>
          <Route path="/interviews" element={<Interview/>}/>
          <Route path="/" element={<CarteInteractive />} />
          <Route path="/Coeur" element={<Coeur />} />
          <Route path="/CourantsOceaniques" element={<CourantsOceaniques />} />
          <Route path="/Poumons" element={<Poumons />} />
          <Route path="/Plancton" element={<Plancton />} />
          <Route path="/SystemeDigestif" element={<SystemeDigestif />} />
          <Route path="/ReseauTrophique" element={<ReseauTrophique />} />
          <Route path="/SystemeImmunitaire" element={<SystemeImmunitaire />} />
          <Route path="/RecifCorallien" element={<RecifCorallien />} />
          <Route path="/Peau" element={<Peau />} />
          <Route path="/Surface" element={<Surface />} />
          <Route path="/Reins" element={<Reins />} />
          <Route path="/Mangroves" element={<Mangroves />} />
          <Route path="/Sang" element={<Sang />} />
          <Route path="/Eau" element={<Eau />} />
          <Route path="/VaisseauxSanguins" element={<VaisseauxSanguins />} />
          <Route path="/RivieresFleuves" element={<RivieresFleuves />} />

        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default AppRouter

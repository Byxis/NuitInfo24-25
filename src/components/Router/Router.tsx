import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './Router.css'
import Layout from '../Layout'
import Home from '../Pages/Homepage/Home'
import Solution from '../Pages/Solutionpage/Solution'
import App from '../Pages/App/App'



function AppRouter() {

  return (
    <>
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/jeu/quiz" element={<App/>}/>
          <Route path="/solution" element={<Solution/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default AppRouter

import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './Router.css'
import Layout from './Layout'
import Home from '../App/Homepage/Home'



function AppRouter() {

  return (
    <>
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default AppRouter

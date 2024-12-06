import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './Router.css'
import Layout from '../Layout'
import Home from '../Pages/Homepage/Home'
import Solution from '../Pages/Solutionpage/Solution'



function AppRouter() {

  return (
    <>
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/solution" element={<Solution/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default AppRouter

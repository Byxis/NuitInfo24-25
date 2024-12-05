import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from '../Homepage/Home'
import Layout from './Layout'
import Test from '../Fichier de test/test'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/test" element={<Test/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App

import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Test from '../Fichier de test/test'
import Footer from '../Footer/Footer'
import Home from './Homepage/Home'



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
    <Footer/>
    </>
  )
}

export default App

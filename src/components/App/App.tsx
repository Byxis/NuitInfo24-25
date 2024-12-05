import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './App.css'
<<<<<<< HEAD
import GetQuestion from '../Quiz/questions';
import Quiz from '../Quiz/Quiz';
=======
import Home from '../Homepage/Home'
import Layout from './Layout'
import Test from '../Fichier de test/test'

>>>>>>> af470ba (HomePage & NavBar prototype)

function App() {

  return (
    <>
<<<<<<< HEAD
      <div>
        <div>
          <p id="score">Score : 0</p>
        </div>
        <Quiz {...GetQuestion(0)} />
        <Quiz {...GetQuestion(0)} />
      </div>
=======
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/test" element={<Test/>}/>
        </Route>
      </Routes>
    </Router>
>>>>>>> af470ba (HomePage & NavBar prototype)
    </>
  );
}

export default App

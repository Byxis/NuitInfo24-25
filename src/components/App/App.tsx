import './App.css'
import GetQuestion from '../Quiz/questions';
import Quiz from '../Quiz/Quiz';

function App() {

  return (
    <>
    <Quiz {...GetQuestion(0)} />
    </>
  );
}

export default App

import GetQuestion from '../Quizpage/questions';
import Quiz from '../Quizpage/Quiz';
import './App.css'

function App() {

  return (
    <>
      <div>
        <div>
          <p id="score">Score : 0</p>
        </div>
        <Quiz {...GetQuestion(0)} />
        <Quiz {...GetQuestion(0)} />
      </div>
    </>
  );
}

export default App

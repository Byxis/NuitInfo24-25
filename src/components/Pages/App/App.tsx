import GetQuestion from '../Quizpage/questions';
import Quiz from '../Quizpage/Quiz';
import './App.css'

function App1() {

  return (
    <>
      <div className='quiz-body'>
        <Quiz {...GetQuestion(0)} />
        <Quiz {...GetQuestion(1)} />
        <Quiz {...GetQuestion(2)} />
        <Quiz {...GetQuestion(3)} />
        <Quiz {...GetQuestion(4)} />
        <Quiz {...GetQuestion(5)} />
        <Quiz {...GetQuestion(6)} />
        <Quiz {...GetQuestion(7)} />
        <div >
          <h1 className="quiz-h2" id="score">Score : 0</h1>
        </div>
      </div>
    </>
  );
}

export default App1
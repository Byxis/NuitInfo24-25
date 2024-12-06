import './App.css'
import GetQuestion from '../Quiz/questions';
import Quiz from '../Quiz/Quiz';

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

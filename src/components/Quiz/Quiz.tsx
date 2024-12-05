import './Quiz.css';
import QuizInterface from './Interface/QuizInterface.tsx'

function Quiz(quizInterface : QuizInterface) 
{
    const questions = quizInterface.questions.map((question) => {
        return  <label >
                    <input type="checkbox"/>
                    {question.texte}
                </label>
    });

    const clickHandler = () => {
        console.log('click');
    }

    return (
        <div className="quiz-container">
            <h2>{quizInterface.title}</h2>
            <p>{quizInterface.desc}</p>
            <ul className='no-bullets'>
                {questions}
            </ul>
            <button onClick={clickHandler} className='submit-button'>Valider</button>
        </div>
    );
}

export default Quiz;
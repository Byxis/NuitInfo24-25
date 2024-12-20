import './Quiz.css';
import{ useRef, useState } from 'react';
import QuizInterface from './Interface/QuizInterface.tsx'

function Quiz(quizInterface: QuizInterface) 
{

    const checkboxRefs = useRef<Array<HTMLInputElement | null>>([]);
    const [score, setScore] = useState(0);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const identifiant = "hidden-"+quizInterface.title;

    var answers = null;
    if(quizInterface.reponses)
    {
        answers = quizInterface.reponses.map((answer : any, index : any) => (
            <li className="quiz-li" key={index}>
            <label className="quiz-label" >
                <input
                 className="quiz-i" 
                type="checkbox"
                ref={(el) => (checkboxRefs.current[index] = el)}
                />
                {answer.contenu}
            </label>
            </li>
        ));
    }

    const clickHandler = () => {
        let newScore = 1;
        checkboxRefs.current.forEach((checkbox, index) => {
        if (checkbox && quizInterface.reponses) {
            checkbox.disabled = true;
            if((quizInterface.reponses[index].isValid && !checkbox.checked) || !quizInterface.reponses[index].isValid && checkbox.checked)
                newScore -= 2/quizInterface.reponses.length;
            }
            setIsButtonDisabled(true);
        });
        if(newScore < 0) newScore = 0;
        setScore(newScore);

        const scoreElement = document.getElementById('score');
        if (scoreElement) {
            const currentText = scoreElement.textContent;
            if(currentText === null) return;
            const score = parseInt(currentText.split(':')[1].trim(), 10) + newScore;
        
            scoreElement.textContent = `Score : ${score}`;
        }

        const explicationsElement = document.getElementById(identifiant);
        if (explicationsElement)
        {
            explicationsElement.classList.remove('hidden');;
        }
    };

    //const [isVisible, setIsVisible] = useState(true);

    //const handleClose = () => {
    //    setIsVisible(false);
    //};

    //if (!isVisible) {
    //    return null;
    //}
    //Pas d'utilisation du bouton close finalement
    //<button onClick={handleClose} className="close-button">Close</button>

    return (
        <div className="quiz-container">
            
            <h2 className="quiz-h2">{quizInterface.title}</h2>
            <p className="quiz-p">{quizInterface.desc}</p>
            <ul className="no-bullets">
                {answers}
            </ul>
            <div id={identifiant} className='hidden'>
                <h3 className='quiz-h3 explication'>Explications :</h3>
                <p className='quiz-p explication'>{quizInterface.explication}</p>
            </div>  
            <button onClick={clickHandler} 
                className="submit-button" 
                disabled={isButtonDisabled}>
                    Valider
            </button>
            <p className="quiz-p">Score: {score}</p>
        </div>
    );
}

export default Quiz;
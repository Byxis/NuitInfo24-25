import './Quiz.css';
import React, { useEffect, useRef, useState } from 'react';
import QuizInterface from './Interface/QuizInterface.tsx'

function Quiz(quizInterface: QuizInterface) 
{
    const checkboxRefs = useRef<Array<HTMLInputElement | null>>([]);
    const [score, setScore] = useState(0);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    var answers = null;
    if(quizInterface.reponses)
    {
        answers = quizInterface.reponses.map((answer : any, index : any) => (
            <li key={index}>
            <label>
                <input
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
    };

    return (
        <div className="quiz-container">
            <h2>{quizInterface.title}</h2>
            <p>{quizInterface.desc}</p>
            <ul className="no-bullets">
                {answers}
            </ul>
            <button onClick={clickHandler} 
                className="submit-button" 
                disabled={isButtonDisabled}>
                    Valider
            </button>
            <p>Score: {score}</p>
        </div>
    );
}

export default Quiz;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Quizz from './components/Quiz/Quiz.tsx'
import QuizzInterface from './components/Quiz/Interface/QuizInterface.tsx'
import QuestionInterface from './components/Quiz/Interface/ReponseInterface.tsx'

const q1Data: QuestionInterface = {
  texte: "Il faut dormir dans la nuit de l'info",
  isValid: false
};

const q2Data: QuestionInterface = {
  texte: "Il faut pas dormir dans la nuit de l'info",
  isValid: true
};

const q3Data: QuestionInterface = {
  texte: "Il faut dormir dans la nuit de l'info",
  isValid: false
};

const q4Data: QuestionInterface = {
  texte: "Il faut dormir dans la nuit de l'info",
  isValid: true
};

const quizData: QuizzInterface = {
  title: 'La question évidente',
  desc: 'Cochez les réponses qui vous semble juste eeeee  eeeee  eeeee  eeeee  eeeee  eeeee  eeeee  eeeee  eeeee  eeeee  eeeee  eeeee eeeeeee',
  questions: [q1Data, q2Data, q3Data, q4Data]
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Quizz {...quizData} />
  </StrictMode>,
)

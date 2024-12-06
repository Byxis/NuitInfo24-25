import QuizInterface from './Interface/QuizInterface.tsx';
import ReponseInterface from './Interface/ReponseInterface.tsx';

const q1Data: ReponseInterface = {
    contenu: "Il faut dormir dans la nuit de l'info",
    isValid: false
  };
  
const q2Data: ReponseInterface = {
    contenu: "Il faut pas dormir dans la nuit de l'info",
    isValid: true
  };
  
const q3Data: ReponseInterface = {
    contenu: "Il faut dormir dans la nuit de l'info",
    isValid: false
  };
  
const q4Data: ReponseInterface = {
    contenu: "Il faut dormir dans la nuit de l'info",
    isValid: true
  };
  
const q1: QuizInterface = {
    title: 'La question évidente',
    desc: 'Cochez les réponses qui vous semble juste eeeee  eeeee  eeeee  eeeee  eeeee  eeeee  eeeee  eeeee  eeeee  eeeee  eeeee  eeeee eeeeeee',
    reponses: [q1Data, q2Data, q3Data, q4Data],
    explication: "C'est une question évidente, la réponse est dans la question",
};

const list = [q1];

function GetQuestion(n: number): QuizInterface
{
    return list[n];
}

export default GetQuestion;
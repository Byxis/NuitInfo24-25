import ReponseInterface from './ReponseInterface';

interface QuizInterface{
    title : string;
    explication? : string;
    desc : string;
    reponses? : ReponseInterface[];
}

export default QuizInterface;


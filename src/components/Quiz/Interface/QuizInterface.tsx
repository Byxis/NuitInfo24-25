import QuestionInterface from "./ReponseInterface";

interface QuizInterface{
    title : string;
    explication? : string;
    desc : string;
    questions : QuestionInterface[];
}

export default QuizInterface;
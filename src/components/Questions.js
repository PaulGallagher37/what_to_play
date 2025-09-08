
import { useState } from "react";



function Questions() {


const [currentQuestion, setCurrentQuestion] = useState({});


const generateQuestion = () => {
    const Question_List = [
    {question: "Question One"},
    {question: "Question Two"},
    {question: "Question Three"},
    {question: "Question Four"}
];
    const Index = Math.floor(Math.random() * Question_List.length);
    setCurrentQuestion(Question_List[Index])
}


    return (
        <div className="container question-container">
            <h1 className="questions-h1">{currentQuestion.question}</h1>
            <input></input>
            <button onClick={() => generateQuestion()}>Next Question</button>
        </div>
    )

};


export default Questions;
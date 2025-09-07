import React from "react";
import { useState } from "react";


const QuestionGenerator = () => {

const Question_List = [
    "Question One",
    "Question Two",
    "Question Three",
];

const [currentQuestion, setCurrentQuestion] = useState("");

const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * Question_List.length);
    setCurrentQuestion(Question_List[randomIndex])
}

};



function Questions() {
    return (
        <div className="container question-container">
            
        </div>
    )
};


export default Questions;
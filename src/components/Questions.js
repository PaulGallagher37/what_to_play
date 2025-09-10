
import { useState } from "react";



function Questions() {


const [currentIndex, setCurrentIndex] = useState(0);

const Question_List = [
    {question: "Question One"},
    {question: "Question Two"},
    {question: "Question Three"},
    {question: "Question Four"},
    {question: "Question Five"}
];


const generateQuestion = () => {
    if (currentIndex < Question_List.length + 1){
        setCurrentIndex(currentIndex + 1)
    } 
    
};



    return (
        <div className="container question-container">
            <h1 className="questions-h1">{Question_List[currentIndex].question}</h1>
            <input></input>
            <button onClick={() => generateQuestion()}>Next Question</button>
        </div>
    )

};


export default Questions;
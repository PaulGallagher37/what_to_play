
import { useState } from "react";


function Questions() {

const Question_List = [
    "What's the last game you played?",
    "Do you prefer single or multi-player?",
    "In the mood for retro, or modern?",
    "Quick burst, or long sprawling adventure?",
    "What's your favourite genre?",
];

const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

const [questions, setQuestions] = useState(shuffleArray(Question_List));
const [current, setCurrent] = useState(null);
const [inputValue, setInputValue] = useState("");
const [answers, setAnswers] = useState([])

const generateQuestion = () => {
    if (questions.length === 0) {
        setCurrent("That's all folks!");
        return;
    }
    const [first, ...rest] = questions;
    setCurrent(first);
    setQuestions(rest);
};

const handleSubmitAnswer = () => {
    if (inputValue.trim() !== "") {
    setAnswers([...answers, inputValue]);
    setInputValue("");
    generateQuestion();
    };
};



    return (
        <div className="container question-container">
            <h1 className="questions-h1">{current || "Click the button to start!"}</h1>
            <input 
                className="questions-input" 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            >
            </input>
            <button 
                className=" btn btn-danger questions-button" 
                onClick={() => handleSubmitAnswer()}
            >Submit
            </button>
        </div>
    )

};


export default Questions;
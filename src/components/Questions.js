
import { useState } from "react";
import { Link } from "react-router-dom";


function Questions() {

const Question_List = [
    {question: "Do you prefer Single Player or Multi-Player?", 
        answers: ["Single Player", "Multiplayer"]},
    {question: "Are you in the mood for retro, or modern?", 
        answers: ["Retro", "Modern"]},
    {question: "What's your ideal gaming session length when you have free time?", 
        answers: ["Long sessions exploring vast worlds", "Quick high-intensity matches", "Leisurely, relaxed play"]},
    {question: "What's your favourite genre?", 
        answers: ["Fighting", "Action", "Adventure", "RPG", "Metroidvania", "Platformer", "FPS", "Puzzle", "Sports", "Racing", "Horror", "Stealth"]},
    {question: "What setting appeals to you most?", 
        answers: ["Mythical unerworld", "Futuristic battlefield", "Sprawling Fantasy Realm", "Historical Era", "Cozy Countryside"]},
    {question: "How important is replayability to you?", 
        answers: ["I enjoy slow-paced repeat sessions", "I want infinite run-based replays", "Some replay is fine, but story matters most", "I play competitive modes endlessly"]},
    {question: "Choose your favourite in-game activity.", 
        answers: ["Facing randomised challenges", "Exploring hidden caves and ruins", "Fishing and Farming", "Co-ordinating team skirmishes"]},
    {question: "Pick a visual style that draws you in.", 
        answers: ["Sleek and futuristic", "Lush, vibrant fantasy landscapes", "Pixel art or hand-drawn", "Stylised mythic or underworld aesthetic"]}, 
    {question: "Thank you for your answers - Please press the submit button to get your recomendations!", answers: [undefined]}
];

const [answers, setAnswers] = useState([]);
const [currentIndex, setCurrentIndex] = useState(0)



const nextQuestion = () => {
    if (currentIndex < Question_List.length -1){
    setCurrentIndex(currentIndex + 1)
    } else {
        setCurrentIndex(currentIndex)
    }
}

const captureAnswer = (event) => {
    const value = event.target.value;
    setAnswers([...answers, value])
}

const logAnswers = () => {
    console.log(answers)
}



    return (
        <div className="container question-container">
                <div>
                    <h1 className="questions-h1">{Question_List[currentIndex].question}</h1>
                    <ul  className="grid-container">
                        {answers && Question_List[currentIndex].answers.map((answer) => (
                            <div className="grid-item" key={answer}>
                                <input type="radio" value={answer} name={`question${currentIndex}`} onChange={captureAnswer}></input>
                                <label className="questions-label">{answer}</label>
                            </div>
                        )) }
                    </ul>
                </div>
              <button className="btn btn-primary questions-button-next" onClick={nextQuestion}>Next</button>
              <Link to="/recomendations"><button className="btn btn-primary questions-button-submit" onClick={logAnswers}>Submit Answers</button></Link>
        </div>
    )
};


export default Questions;
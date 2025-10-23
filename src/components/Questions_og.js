
import { useState } from "react";
import { useNavigate } from "react-router-dom";



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
    {question: "Pick a visual style that draws you in.", 
        answers: ["Sleek and futuristic", "Lush, vibrant fantasy landscapes", "Pixel art or hand-drawn", "Stylised mythic or underworld aesthetic"]}, 
];

const [currentIndex, setCurrentIndex] = useState(0);
const [prompt, setPrompt] = useState([]);
const [recommendations, setRecommendations] = useState("");
const navigate = useNavigate();



const nextQuestion = () => {
    if (currentIndex < Question_List.length -1){
    setCurrentIndex(currentIndex + 1)
    } else {
        setCurrentIndex(currentIndex)
    }
}

const captureAnswer = (event) => {
    const value = event.target.value;
    setPrompt([...prompt, value])
}


async function handleSubmit(e) {
    if (e?.preventDefault) e.preventDefault();
    try {
        setRecommendations("");
        const response = await fetch("http://localhost:4000/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
    });
    if (!response.ok) throw new Error(`Server error: ${response.status}`);
    const data = await response.json();
    if (data && typeof data.result !== "undefined") {
        setRecommendations(data.result);
        navigate("/recommendations", { state: {recommendations: data.result}});
    } else {
        setRecommendations("No recommendations found.");
        console.error("API response missing 'result' property:", data);
    }
    }  catch (err) {
        console.error(err);
    }
}

    return (
        <div className="container question-container">
                <div>
                    <h1 className="questions-h1">{Question_List[currentIndex].question}</h1>
                    <ul  className="grid-container">
                        {Question_List[currentIndex].answers.map((answer) => (
                            <li className="grid-item" key={answer}>
                                <input type="radio" value={answer} name={`question${currentIndex}`} onChange={captureAnswer}></input>
                                <label className="questions-label">{answer}</label>
                            </li>
                        )) }
                    </ul>
                </div>
              <button className="btn btn-primary questions-button-next" onClick={nextQuestion} disabled={prompt.length === Question_List.length}>Next</button>
              <button className="btn btn-primary questions-button-submit" onClick={handleSubmit} disabled={prompt.length !== Question_List.length}>Submit Answers</button>
        </div>
    )
};


export default Questions;
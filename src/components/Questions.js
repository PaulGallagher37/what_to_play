
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Questions() {

const Question_List = [
    "Do you prefer Single Player or Multi-Player?",
    "Are you in the mood for Retro or Modern?",
    "What's your ideal gaming session length when you have free time?", 
    "What's your favourite genre?", 
    "What was the last game you really enjoyed playing?",  
];

const [currentIndex, setCurrentIndex] = useState(0);
const [prompt, setPrompt] = useState([]);
const [recommendations, setRecommendations] = useState("");
const [input, setInput] = useState("");
const navigate = useNavigate();



const nextQuestion = (event) => {
    if (currentIndex < Question_List.length -1){
    setCurrentIndex(currentIndex + 1)
    } else {
        setCurrentIndex(currentIndex)
    }
    if (input){
     setPrompt([...prompt, input])
    } 
    setInput("")
    console.group(prompt);
}

const previousQuestion = () => {
    if (currentIndex < Question_List.length + 1 && currentIndex !== 0){
    setCurrentIndex(currentIndex - 1)
    } else {
        setCurrentIndex(currentIndex)
    }
}

const captureAnswer = (event) => {
    setInput(event.target.value)
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
        <form className="container question-container">
                <div>
                    <h1 className="questions-h1">{Question_List[currentIndex]}</h1>
                    <ul  className="grid-container">
                        <li className="grid-item" >
                            <input type="text" value={input} onChange={captureAnswer}></input>
                        </li>    
                    </ul>
                </div>
                <div>
                    <button type="button" className="btn btn-primary questions-button" onClick={previousQuestion} disabled={prompt.length === Question_List.length}>Previous</button>
                    <button type="button" className="btn btn-primary questions-button" onClick={nextQuestion} disabled={prompt.length === Question_List.length}>Next</button>
                </div>
                <button className="btn btn-primary questions-button-submit" onClick={handleSubmit} disabled={prompt.length !== Question_List.length}>Submit Answers</button>
        </form>
    )
};


export default Questions;
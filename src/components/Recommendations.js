import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";



function Recommendations() {

    const location = useLocation();
    const results = location.state?.quizData;
   
    

    return(
        <div>
            <Navbar />
            <div className="container quiz flex">
                <div className="quiz-container">
                    <div className="container flex rec-container">
                        <h2>Results</h2>
                        <div>
                            {results.map((game, index) => (
                                <div key={index}>
                                    <img src={game.image} alt={game.title} />
                                    <h3>{game.title}</h3>
                                    <p>{game.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommendations;
import React from "react";
import Navbar from "./Navbar";
import Questions from "./Questions";

function Quiz() {
    return(
        <div>
            <Navbar />
            <div className="container quiz flex">
                <div className="quiz-container">
                    <Questions />
                </div>
            </div>
        </div>
    )
};

export default Quiz;
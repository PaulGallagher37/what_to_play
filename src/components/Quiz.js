import React from "react";
import Navbar from "./Navbar";
import Questions from "./Questions";

function Quiz() {
    return(
        <div>
            <Navbar />
            <div className="container quiz-container">
                <Questions />
            </div>
        </div>
    )
};

export default Quiz;
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


function Loading() {

    const location = useLocation();
    const navigate = useNavigate();
    const quizData = location.state?.quizData;

    useEffect(() => {
        setTimeout(() => {
            navigate("/recommendations", { state: { quizData }});
        }, 2000);
    }, [navigate, quizData]);


    return(
        <div>
            <Navbar />
            <div className="container quiz-container">
                <h2>Loading your recommendations...</h2>
                <p>Please wait a moment</p>
            </div>
        </div>
    )
};

export default Loading;
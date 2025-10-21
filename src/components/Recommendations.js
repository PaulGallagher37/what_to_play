import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";



function Recommendations() {

    const location = useLocation();
    const results = location.state?.recommendations;
    

    return(
        <div>
            <Navbar />
            <div className="container quiz flex">
                <div className="quiz-container">
                    <div className="container flex rec-container">
                        <h2>Results</h2>
                        <p>{results}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommendations;
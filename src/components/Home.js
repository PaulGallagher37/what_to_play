
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home(){
    return(
        <div className='container-fluid flex'>
            <Navbar />
            <header>
                <div className="container flex">
                    <h1 className="home-h1">What To Play..?</h1>
                    <p className="home-p">Just finished an amazing game and don't know what to play next?</p>
                    <p className="home-p">Need some ideas for your next epic quest?</p>
                    <p className="home-p">Take this quick quiz for some recomendations!</p>
                    <Link to="/quiz"><button type="button" className="button">Take Quiz</button></Link>
                </div>
            </header>
        </div>
    )
}

export default Home;
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className="container-fluid">
            <ul className="navbar">
                <Link to="/" style={{ textDecoration: "none"}}><li className="nav-li">Home</li></Link>
                <Link to="/quiz" style={{ textDecoration: "none"}}><li className="nav-li">Quiz</li></Link>
            </ul>
        </div>
    )
};

export default Navbar;
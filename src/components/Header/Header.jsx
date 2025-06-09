import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return(
        <header id="main">
            <div id="main">
                Vivekanad College
            </div>
            
            <nav id="navbar">
            
                <Link to="/home" className="tab">Home</Link>
                <Link to="/about" className="tab">About</Link>
                <Link to="/courses"className="tab">Courses</Link>
                <Link to="/contact" className="tab">Contact</Link>
                 <Link to='/admission'className="tab"><button id="btn1">Apply Now!</button></Link>

            </nav>

        </header>
    )
}

export default Header
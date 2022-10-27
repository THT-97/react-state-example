import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
    constructor() {
        super();
        this.state = {username: "THT"};
    }
    render(){
        return(
            // Navbar.js
            <nav id='navbar'>
            <ul>
                <Link to="/Home"><li>Home</li></Link>
                <Link to="/Contact"><li>Contact</li></Link>
                <Link><li>About</li></Link>
            </ul>
            <div className="nav-details">
                <p className="nav-username"> {this.state.username} </p>
            </div>
            </nav>
        )

    }
}

export default Navbar;
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './style.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar-path navbar-expand-lg navbar-dark bg-dark">
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <Link to={"/"}>
                        <span style={{color:"white"}}>
                            Home
                        </span>
                    </Link>
                </div>
                <h2 className="navbar-brand">Algo Artifact Visualizer</h2>
                <h4 className="navbar-brand">Pathfinder</h4>

            </nav>
        );
    }
}

export default Navbar;
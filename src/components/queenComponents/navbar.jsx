import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './style.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-menu">

                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <Link to={"/"}>
                            <span style={{color:"white"}}>
                                Home
                            </span>
                    </Link>
                </div>
                <h2 className="navbar-brand">N Queen Promblem</h2>
            </nav>
        );
    }
}

export default Navbar;
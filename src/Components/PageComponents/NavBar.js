import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../styles/navbar.css';
const NavBar = ()=> {
    return(
        <>
        <nav className="navbar" id="nav">
            <div className="nav-items">
                <div className="logo">
                    <img src="https://st2.depositphotos.com/3867453/5508/v/600/depositphotos_55080537-stock-illustration-letter-a-logo-icon-design.jpg" alt="Logo" />
                </div>
                <div className="nav-components">
                    <ul>
                        <li><Link className="nav-link" to="/navbar/">Home</Link></li>
                        <li><Link className="nav-link" to="/navbar/contact">Contact</Link></li>
                        <li><Link className="nav-link" to="/navbar/about">About Me</Link></li>
                    </ul>
                </div>
            </div>


        </nav>
        <Outlet/>

      
        </>
    );
};

export default NavBar;
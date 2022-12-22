import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import '../styles/navbar.css';
const NavBar = ()=> {

    const [show , setShow] = useState('');
    const [hide , setHide] = useState('');

   const menuShow = ()=>{
        setShow('show');
        setHide('hide');
    };
    
    const showItem = ()=>{
        setShow('hide');
        setHide('show');    
   };


    return(
        <>
        <nav className={`navbar ${hide}`} id="nav">
            <div className={`nav-items `}>
                <div className="logo">
                    <button onClick={menuShow}>Menu</button>
                </div>
                <div className="nav-components">
                    <ul>
                        <li><Link className="nav-link" to="/navbar/">Home</Link></li>
                        <li><Link className="nav-link" to="/navbar/contact">Contact</Link></li>
                        <li><Link className="nav-link" to="/navbar/about">About </Link></li>
                    </ul>
                </div>
            </div>



        </nav>
            <div className={`toggle-menu ${show}`}>
                <div className="toggle-items">
                    <ul>
                        <li onClick={showItem}><Link className="toggle-link" to="/navbar/">Home</Link></li>
                        <li onClick={showItem}><Link className="toggle-link" to="/navbar/contact">Contact</Link></li>
                        <li onClick={showItem}><Link className="toggle-link" to="/navbar/about">About </Link></li>
                    </ul>
                </div>
            </div>
        <Outlet/>

      
        </>
    );
};

export default NavBar;
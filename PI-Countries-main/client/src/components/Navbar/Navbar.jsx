import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../imagenes/Logo.png"

const Navbar=()=>{
    return(
        <header className="navbar-container">
            <Link to="/">
                <img 
                    src={logo} 
                    alt="img not found"
                    width={90}
                    height={82} 
                />
            </Link>
            <h1 className="navbar-title">Henry Countries</h1>
            <nav>
                <ul  className='navbar-links-container'>
                    <li className='navbar-li'>
                        <Link to="/home/countries">Destinos</Link>
                    </li>
                    <li className='navbar-li'>
                        <Link to="/home/activities">Agregar Actividad Turistica</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar
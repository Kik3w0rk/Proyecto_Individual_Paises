import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const Home=()=>{
    return(
        <>
            <div className="background">
                <h1 className="title">PI COUNTRIES</h1>
                <Link to="/home/countries">
                    <button className="button-start">EMPEZAR</button>
                </Link>
            </div>
        </>
    );
}

export default Home;
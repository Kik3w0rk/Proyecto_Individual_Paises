import React from "react";
import { Link } from "react-router-dom";
import './Country.css'

const Country=(props)=>{
    return(
        <div className="card">
            <h3>{props.name}</h3>
            <img src={props.flag} alt="flag not found" className="flag"/>
            <br />
            <span>Ubicacion: {props.continent}</span>
            <br />
            <Link to={`/home/details/${props.id}`}>
                <span>Detalles</span>
            </Link>
        </div>
    )
}

export default Country;
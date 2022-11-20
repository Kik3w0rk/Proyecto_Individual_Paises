import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getCountryId, cleanDetails } from "../../redux/actions";
import { useParams } from "react-router-dom";

import './Details.css'

const Details=()=>{

    const dispatch=useDispatch();
    const country=useSelector(state=>state.countryId);
    const { countryId }=useParams()
    
    useEffect(()=>{
        dispatch(getCountryId(countryId));
        return()=>{
            dispatch(cleanDetails())
        }
    },[dispatch,countryId])
    
    return(
        <div>
            <br />
            <div className="country-info">
                <div className="detail-flag">
                    <img src={country.flag} alt="flag not found" className="detail-flag"/>
                </div>
                <div className="country-details">
                    <h3>Nombre: {country.name}</h3>
                    <p>Capital: {country.capital}</p>
                    <p>Continente: {country.continents}</p>
                    <p>Sub Region: {country.subregion}</p>
                    <p>Area: {country.area}</p>
                    <p>Poblacion: {country.population}</p>
                </div>
            </div>
            <br />
            <div className="country-activity">
                {<table className="allTable">
                    <tr className="table">
                        <th className="table">Actividad</th>
                        <th className="table">Dificultad</th>
                        <th className="table">Tiempo (hh)</th>
                        <th className="table">Estacion</th>
                    </tr>
                    {country.activities?.map((actividad,i)=>{
                        return(
                        <tr className="table">
                            <td className="table"> {actividad.name} </td>
                            <td className="table"> {actividad.dificulty} </td>
                            <td className="table"> {actividad.time} </td>
                            <td className="table"> {actividad.season} </td>
                        </tr>)
                    })
                //country.activities?.map(actividad=><tableActivity name={actividad.name} dificulty={actividad.dificulty} time={actividad.time} season={actividad.season}/>)
                }
                </table>}
            </div>
        </div>
    )
}

export default Details;
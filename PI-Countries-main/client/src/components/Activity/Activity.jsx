import axios from 'axios'
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './Activity.css'

const Activity=()=>{
    //const dispatch=useDispatch();
    const countries=useSelector(state=>state.countries);
    const [subir,setSubir]=useState("")
    /*------------ SUBIR ACTIVIDAD ------------*/

    const [allInfo,setAllInfo]=useState({
        name: "",
        dificulty: "",
        time: "",
        season: "primavera",
        paisId: []
    });

    const changeHandler=(event)=>{
        setAllInfo({
            ...allInfo,
            [event.target.name]: event.target.value
        })
    }

    const changeHandlerCountryIds=(event)=>{
        if(event.target.value!=="none"){
            setAllInfo({
                ...allInfo,
                paisId: [...allInfo.paisId, event.target.value]
            })
        }
    }

    const cancelCountry=(id)=>{
        setAllInfo({
            ...allInfo,
            paisId: allInfo.paisId.filter(pais=>pais===id)
        })
    }

    const [validation,setValidation]=useState("")

    const submitHandler=async(event)=>{
        event.preventDefault();
        if(allInfo.name==="") return(setValidation("Faltan Datos por rellenar"))
        if(allInfo.dificulty<1&&allInfo.dificulty>5) return(setValidation("Faltan Datos por rellenar"))
        if(allInfo.paisId.length===0) return(setValidation("Faltan Datos por rellenar"))
        await axios.post("http://localhost:3001/activities",allInfo)
        setValidation("")
        setSubir("Los datos se han subido exitosamente")
        setAllInfo({
            name: "",
            dificulty: "",
            time: "",
            season: "primavera",
            paisId: []
        })
    };

    return(
        <>
            <h3>Introduzca los datos de la actividad turistica que desea agregar</h3>
            <form onSubmit={submitHandler} className="activityForm">
                <label htmlFor="name">Nombre: </label>
                <input className='' type="text" name="name" onChange={changeHandler}/>
                <br />
                <br />
                <label htmlFor="dificulty" >Dificultad: </label>
                <input className='' type="number" name="dificulty"onChange={changeHandler} min="1" max="5"/>
                <br />
                <br />
                <label htmlFor="time" >Tiempo: </label>
                <input className='' type="number" name="time" onChange={changeHandler} min="1"/><span> Horas</span>
                <br />
                <br />
                <label htmlFor="season" >Temporada: </label>
                <select className='' name="season" onChange={changeHandler}>
                    <option value="primavera" selected>Primavera</option>
                    <option value="verano">Verano</option>
                    <option value="otoño">Otoño</option>
                    <option value="invierno">Invierno</option>
                </select>
                <br />
                <br />
                <label htmlFor="paises">Paises: </label>
                <select name="countryIds" onChange={changeHandlerCountryIds}>
                    <option value="none">Seleccione un Pais</option>
                    {countries.map(
                        pais=><option value={pais.id}>{pais.name}</option>
                    )}
                </select>
                <br />
                <br />
                {allInfo.paisId.map(pais=>{
                    return(
                        <>
                            <button className='cancel-bt' onClick={cancelCountry}>{pais} </button>
                            <span> </span>
                        </>
                    )})}
                <div>
                    <span>{validation}</span>
                </div>
                <div>
                    <span>{subir}</span>
                </div>
                <div>
                    <br />
                    <button type="submit">Subir</button>
                    <br />
                </div>
            </form>
        </>
    );
}

export default Activity;
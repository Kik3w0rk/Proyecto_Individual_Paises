import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCountryName, getCountryContinent, cleanInputName, cleanInputContinent } from "../../redux/actions";
import { getActivities, getCountriesActivity, cleanInputActivity } from "../../redux/actions";
import './Filter.css'

const FilterBar=({countries,originalOrder,setPage,page})=>{
    const dispatch=useDispatch();
    /*--------- BUSCADOR POR NOMBRE ---------*/
    const [inputName,setInputName]=useState("");

    const changeHandlerName=(event)=>{
        const nombre=event.target.value;
        const Uppernombre=nombre.replace(/(^\w{1})|(\s+\w{1})/g,pais=>pais.toUpperCase())
        setInputName(Uppernombre)
    }

    const submitHandlerName=(event)=>{
        event.preventDefault();
        dispatch(getCountryName(inputName));
    }

    const limpiarInputName=()=>{
        dispatch(cleanInputName())
        setInputName("");
    }
    /*--------- FILTRAR POR CONTINENTE ---------*/

    const limpiarInputContinent=()=>{
        //event.preventDefault();
        dispatch(cleanInputContinent());
    }

    const changeHandlerContinent=async(event)=>{
        event.preventDefault();
        if(event.target.value!=="none"){
            //setInputContinent(event.target.value);
            dispatch(getCountryContinent(event.target.value));
            setPage(1);
            limpiarInputActivity()
        }else limpiarInputContinent();
    }

    /*---------------- FILTRAR POR ACTIVIDADES ----------------*/
    useEffect(()=>{
        dispatch(getActivities())
    },[dispatch]);

    const activities=useSelector(state=>state.activities);

    const limpiarInputActivity=()=>{
        dispatch(cleanInputActivity())
    }

    const changeHandlerActivities=async(event)=>{
        event.preventDefault();
        if(event.target.value!=="none"){
            dispatch(getCountriesActivity(event.target.value));
            setPage(1);
            limpiarInputContinent();
        }else limpiarInputActivity();
    }

    /*---------------- ORDENAMIENTO ----------------*/
    const [orderCountries,setOrderCountries]=useState({
        order: "none",
    })
    const changeHandlerCheck=async(event)=>{  
        //countries=[...originalOrder]
        setOrderCountries({
            order: event.target.value,
        })
        if(orderCountries.order==="asc") countries.sort((a, b)=> a.population-b.population);
        if(orderCountries.order==="des") countries.sort((a, b)=> b.population-a.population);
        if(orderCountries.order==="a-z") countries.sort((a, b)=>(b.name < a.name) ? -1 : (a.name > b.name) ? 1 : 0);
        if(orderCountries.order==="z-a") countries.sort((a, b)=>(a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0);
        if(page===1) setPage(page+1)
        else setPage(1)
    }

    return(
        <div className="filterBar">
            <br />
            <br />
            <h3>FILTRADO</h3>
            <form onSubmit={submitHandlerName}>
                <input type="text" name="name-filter" placeholder='Buscar Pais' value={inputName} onChange={changeHandlerName}/>
                <button type="submit">BUSCAR</button>
                <button onClick={limpiarInputName}>LIMPIAR</button>
            </form>
            <br />
            <form name="continent-filter" >
                <span>Continente: </span>
                <select name="continents" onChange={changeHandlerContinent}>
                    <option value="none" defaultValue>Cualquiera</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="South America">South America</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Europe">Europe</option>
                    <option value="North America">North America</option>
                </select>
            </form>
            <br />
            <form name="activity-filter">
                <span>Actividad: </span>
                <select name="activities" onChange={changeHandlerActivities}>
                    <option value="none">Ninguna</option>
                    {activities.map(
                        actividad=><option value={actividad.id}>{actividad.name}</option>
                    )}
                </select>
            </form>
            <form name="orderCountries">
                <span>Ordenar Por : </span>
                <br />
                <input type="radio" value="asc" name="populationOrder" id="asc" onClick={changeHandlerCheck}/><span>Ascendente </span>
                <input type="radio" value="des" name="populationOrder" id="des" onClick={changeHandlerCheck}/><span>Descendente </span>
                <input type="radio" value="a-z" name="populationOrder" id="a-z" onClick={changeHandlerCheck}/><span>A - Z </span>
                <input type="radio" value="z-a" name="populationOrder" id="z-a" onClick={changeHandlerCheck}/><span>Z - A </span>
            </form>
        </div>
    )
}

export default FilterBar;
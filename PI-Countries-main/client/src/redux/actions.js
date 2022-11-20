import axios from "axios";

/*------------- MOSTRAR PAISES -------------*/
export const GET_ALL_COUNTRY="GET_ALL_COUNTRY";
export const GET_ID_COUNTRY="GET_ID_COUNTRY";
export const GET_NAME_COUNTRY="GET_NAME_COUNTRY";
export const GET_COUNTRY_CONTINENT="GET_COUNTRY_CONTINENT";
/*--------------- MOSTRAR ACTIVIDADES ---------------*/
export const GET_ACTIVITY="GET_ACTIVITY";
export const GET_COUNTRIES_ACTIVITIES="GET_COUNTRIES_ACTIVITIES"
/*----------------- LIMPIEZA DE INPUTS Y OTROS -----------------*/
export const CLEAN_INPUT_NAME="CLEAN_INPUT_NAME";
export const CLEAN_INPUT_CONTINENT="CLEAN_INPUT_CONTINENT";
export const CLEAN_INPUT_ACTIVITY="CLEAN_INPUT_ACTIVITY"
export const CLEAN_DETAILS="CLEAN_DETAILS"
/*-------- ERROR --------*/
export const ERROR = "ERROR";


/*------------- MOSTRAR PAISES -------------*/
export const getAllCountries= ()=>{
    return async function(dispatch){
        try {
            const countries = await axios.get("http://localhost:3001/countries/");
            dispatch({
                type: GET_ALL_COUNTRY,
                payload: countries.data
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}

export const getCountryId=(countryId)=>{
    return async function(dispatch){
        try {
            const country = await axios.get(`http://localhost:3001/countries/${countryId}`);
            dispatch({
                type: GET_ID_COUNTRY,
                payload: country.data
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}

export const getCountryName=(countryName)=>{
    return async function(dispatch){
        try {
            const country=await axios.get(`http://localhost:3001/countries/?name=${countryName}`);
            dispatch({
                type: GET_NAME_COUNTRY,
                payload: country.data
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }    
}

export const getCountryContinent=(region)=>{
    return async function(dispatch){
        try {
            const countries=await axios.get(`http://localhost:3001/countries/continent/${region}`);
            dispatch({
                type: GET_COUNTRY_CONTINENT,
                payload: countries.data
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}

/*--------------- MOSTRAR ACTIVIDADES ---------------*/
export const getActivities=()=>{
    return async function(dispatch){
        try {
            const activities=await axios.get("http://localhost:3001/activities");
            dispatch({
                type: GET_ACTIVITY,
                payload: activities.data
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}

export const getCountriesActivity=(actividad)=>{
    return async function(dispatch){
        try {
            const countriesActivity=await axios.get(`http://localhost:3001/countries/activity/${actividad}`);
            dispatch({
                type: GET_COUNTRIES_ACTIVITIES,
                payload: countriesActivity.data
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
} 

/*----------------- LIMPIEZA DE INPUTS Y OTROS -----------------*/
export const cleanInputName=()=>{
    return function(dispatch){
        dispatch({
            type: CLEAN_INPUT_NAME
        })
    }
}

export const cleanInputContinent=()=>{
    return function(dispatch){
        dispatch({
            type: CLEAN_INPUT_CONTINENT
        })
    }
}

export const cleanInputActivity=()=>{
    return function(dispatch){
        dispatch({
            type: CLEAN_INPUT_ACTIVITY
        })
    }
}

export const cleanDetails=()=>{
    return function(dispatch){
        dispatch({
            type: CLEAN_DETAILS
        })
    }
}

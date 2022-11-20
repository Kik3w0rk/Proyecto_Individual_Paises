import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import rootReducer from "../../redux/reducer";
import Country from "../Country/Country";
import FilterBar from "../Filter/Filter";
import Pagination from "../Pagination/Pagination";
import './Countries.css'

const Countries=()=>{
    const countries=useSelector(state=>state.countries);
    const country=useSelector(state=>state.countryName);
    const countryFiltered=useSelector(state=>state.countryRegion);
    const countriesActivity=useSelector(state=>state.countriesActivity);
    const error=useSelector(state=>state.error);

    /*------ PAGINACION ------*/
    const [page, setPage] = useState(1);
    const porPage=10;
    //const max=(countries.length)/porPage;
    var max=0
    if(countryFiltered.lenght>1) {max=Math.ceil(max=(countryFiltered.length)/porPage)}
    else if(country==={}) {max=1} 
    else { max=Math.ceil(max=(countries.length)/porPage);}

    if(error){
        return(
            <>
                <h1>Error al conectar al servidor</h1>
            </>
        );
    }else if(countries.length){

        return(
            /* mapear countries mientras llamas componente country */
            <>
                <div>
                    <FilterBar countries={countries} page={page} setPage={setPage} max={max}/>
                </div>
                <div className="flex-container">
                    {
                        country.name?<Country key={country.id} id={country.id} name={country.name} flag={country.flag} continent={country.continents}/>:
                        countryFiltered[0]?
                                countryFiltered
                                .slice((page-1)*porPage, (page-1)*porPage+porPage)
                                .map((pais, i)=>{
                                    return <Country key={pais.id} id={pais.id} name={pais.name} flag={pais.flag} continent={pais.continents} />
                                }):countriesActivity[0]?
                                countriesActivity
                                .slice((page-1)*porPage, (page-1)*porPage+porPage)
                                .map((pais, i)=>{
                                    return <Country key={pais.id} id={pais.id} name={pais.name} flag={pais.flag} continent={pais.continents} />
                                }):
                        countries
                        .slice((page-1)*porPage, (page-1)*porPage+porPage)
                        .map((pais, i)=>{
                            return <Country key={pais.id} id={pais.id} name={pais.name} flag={pais.flag} continent={pais.continents} />
                        })
                        
                    }
                    <br />
                </div>
                <br />
                <Pagination page={page} setPage={setPage} max={max}/>
                <br />
                <br />
            </>
        )
    }else{
        return(
            <h1>Cargando ... </h1>
        )
    }
}

export default Countries;
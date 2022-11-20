const urlApi="https://restcountries.com/v3/all";
const axios=require("axios");

const getCountriesApi = async ()=>{   // funcion para traer todos los paises de la api con solo los datos que necesita la base de datos
    const dataPaises= await axios.get(urlApi);
    const paises=dataPaises.data.map(pais=>{
        return{
            id: pais.cca3,
            name: pais.name.common,
            flag: pais.flags[0],
            continents: pais.continents[0],
            capital: pais.capital?pais.capital[0]:"Capital not found",
            subregion: pais.subregion,
            area: pais.area,
            population: pais.population,
        }
    })
    return [...paises]
}
/*
const getCountry=async(country)=>{
    const dataPais=await axios.get(`http://localhost:3001/countries/?name=${country}`);
    return dataPais.data;
}
*/
module.exports = {
    getCountriesApi,
    //getCountry
}
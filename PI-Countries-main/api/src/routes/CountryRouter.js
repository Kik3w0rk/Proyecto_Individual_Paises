const { Router } = require('express');
const { Country,Activity } = require('../db.js');
const { getCountriesApi }= require('../controller/getCountriesApi.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const countryRouter = Router();

// Configurar los routers
// Ejemplo: Router.use('/auth', authRouter);

countryRouter.post("/subir",async (req,res)=>{
    try {
        const paises=await getCountriesApi();
        const data=await Country.bulkCreate(paises);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

countryRouter.get("/:id",async (req,res)=>{
    try {
        const {id} = req.params;
        const country= await Country.findOne({
            where: {
                id: id
            },
            include: Activity
        });
        if(!country) throw Error("Country not Found");
        res.status(200).json(country);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

countryRouter.get("/",async (req,res)=>{    //obtener pais por nombre query de lo contrario, devuelve todos los paises
    try {
        const {name}=req.query;
        if(name){
            const country=await Country.findOne({
                where: {
                    name: name
                },
                include: Activity
            });
            if(!country) throw Error("Country not Found");
            res.status(200).json(country);
        }else{
            const country=await Country.findAll({
                include: Activity
            });
            if(!country) throw Error("Countries not Found");
            res.status(200).json(country);
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
});

countryRouter.get("/continent/:region",async (req,res)=>{
    try {
        const {region}=req.params;
        if(region){
            const countries=await Country.findAll({
                where: {
                    continents: region
                }
            });
            if(!countries) throw Error("Region not Found");
            res.status(200).json(countries)
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
})

countryRouter.get("/activity/:activityId",async(req,res)=>{
    try {
        const {activityId}=req.params;
        if(activityId){
            const countries=await Country.findAll({
                include: {
                    model: Activity,
                    where: {
                        id: activityId
                    }
                }
            });
            if(!countries) throw Error("Activities not Found");
            res.status(200).json(countries)
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
})


module.exports = countryRouter;

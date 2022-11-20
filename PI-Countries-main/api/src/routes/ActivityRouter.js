const { Router } = require('express');
const { Activity,Country }=require("../db.js");

const activityRouter = Router();

activityRouter.post("/",async (req,res)=>{
    const { name,dificulty,time,season,paisId }=req.body;
    try {
        const newActivity = await Activity.create({name,dificulty,time,season});
        newActivity.addCountries(paisId);
        res.status(200).send(newActivity);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

activityRouter.get("/",async (req,res)=>{
    try {
        const activities=await Activity.findAll({});
        if(!activities) throw Error("Error al buscar actividades")
        res.status(200).json(activities);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

module.exports= activityRouter;

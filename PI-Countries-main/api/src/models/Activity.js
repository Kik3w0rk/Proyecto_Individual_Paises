const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('activity',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.TEXT
        },
        dificulty: {
            type: DataTypes.INTEGER
        },
        time: {
            type: DataTypes.INTEGER
        },
        season: {
            type: DataTypes.STRING
        }
    },{timestamps:false}) //Para que no muestre en la tabla la fecha y hora de alteracion del dato
}
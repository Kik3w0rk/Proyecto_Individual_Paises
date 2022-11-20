const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "Capital not found"
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  },{timestamps:false}); //Para que no muestre en la tabla la fecha y hora de alteracion del dato
};

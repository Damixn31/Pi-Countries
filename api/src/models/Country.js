const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('country', {
      alpha3Code: { 
      type: DataTypes.STRING(3), 
      allowNull: false, 
      primaryKey: true, 
    },
    name: { 
      type: DataTypes.STRING, 
      allowNull: false, 
    },
    flags: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      defaultValue: 'Not Found' 
    },
      continents: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      defaultValue: 'Not found', 
    },
      capital: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      defaultValue: 'Not found', 
    },
    region: { 
      type: DataTypes.STRING, 
      defaultValue: 'Not found', 
    },
    population: { 
      type: DataTypes.INTEGER, 
      defaultValue: 0, 
    },
    area: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
    },
  },
  { timestamps: false },
)};
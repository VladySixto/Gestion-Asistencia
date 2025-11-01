import { DataTypes } from "sequelize"
import { sequelize } from "../config/database/dbconfig.js"

//Relacionar en init.models.js <--- Funcion InitModels
// tipos de datos
//    https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
export const Address = sequelize.define("Address", {
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Dolores"
  },
  province: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Buenos Aires"
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "Argentina"
  },
  lat: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  lng: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  avaible: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  //para ver si se usa en alguna asociacion o no, si esta en false no se usa.
  use:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
})
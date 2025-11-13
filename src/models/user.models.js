import { DataTypes } from "sequelize"
import { sequelize } from "../config/database/dbconfig.js"

//Relacionar en init.models.js <--- Funcion InitModels
// tipos de datos
//    https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
export const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name:{
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  identification: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  dateBirt:{
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  phone:{
    type: DataTypes.STRING(32),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM("Masculino", "Femenino", "Otro"),
    allowNull: false,
    defaultValue: "Masculino",
  },
  avaible: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  }
})
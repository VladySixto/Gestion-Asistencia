import { DataTypes } from "sequelize"
import { sequelize } from "../config/database/dbconfig.js"

//Relacionar en init.models.js <--- Funcion InitModels
// tipos de datos
//    https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
export const BoilerPlate = sequelize.define("BoilerPlate", {
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: { 
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  datebirt: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}
)
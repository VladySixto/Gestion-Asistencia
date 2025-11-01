import { DataTypes } from "sequelize"
import { sequelize } from "../config/database/dbconfig.js"

//Relacionar en init.models.js <--- Funcion InitModels
// tipos de datos
//    https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
export const Student = sequelize.define("Student", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  academic_status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  }
})


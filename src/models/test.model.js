import { DataTypes } from "sequelize"
import { sequelize } from "../config/database/dbconfig.js"

export const Test = sequelize.define("Test", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

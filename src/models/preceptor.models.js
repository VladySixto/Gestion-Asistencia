import { sequelize } from "../config/database/dbconfig.js"
import { DataTypes } from "sequelize"

export const Preceptor = sequelize.define("Preceptor",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
})
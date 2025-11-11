import { sequelize } from "../config/database/dbconfig.js"
import { DataTypes } from "sequelize"

export const matterType = sequelize.define("Matter_Type", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
})
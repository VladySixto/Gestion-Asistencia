import { sequelize } from "../config/database/db.config.js"
import { DataTypes } from "sequelize"

export const matterType = sequelize.define("MatterType", {
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
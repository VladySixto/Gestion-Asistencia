import { Sequelize } from "../config/database/db.config.js"
import { DataTypes } from "sequelize"

export const CareerType = Sequelize.define("Career_Type",{
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
        type: DataTypes.STRING,
        allowNull: true
    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:true
    }
})
import {sequelize} from "../config/database/dbconfig.js"
import {DataTypes} from "sequelize"

export const Matter = sequelize.define("Matter", {
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
    },
    corresponding_year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})
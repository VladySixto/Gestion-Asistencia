import { sequelize } from "../config/database/dbconfig.js"
import { DataTypes } from "sequelize"

export const Patient = sequelize.define("Patient",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique:true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
        unique:true
    },
    identification: {
        type: DataTypes.STRING,
        allowNull:  false,
        unique:true
    },
    cud:{
        type: DataTypes.STRING,
        allowNull: true,
        unique:true
    },
    // si esta en 0 no tiene, si tiene 1 o mas marca la cantidad de personas a cargo de el.
    haveTutor:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
})
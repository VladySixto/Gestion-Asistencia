import { sequelize } from "../config/database/dbconfig.js"
import { DataTypes } from "sequelize"

export const Tutor = sequelize.define("Tutor",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false
    },
    havePatient:{
        type: DataTypes.INTEGER,
        defaultValue:0,
        allowNull: false}
    })
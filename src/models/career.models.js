import { sequelize} from "../config/database/dbconfig.js"
import { DataTypes } from "sequelize"

export const Career = sequelize.define("Careers",{
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
    duration_year: {
        type: DataTypes.INTEGER(2),
        allowNull: false
    },
    //para poner una url al plan academico.
    academic_plan:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    avaible_inscription:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:true
    },
    avaible: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:true
    }

})
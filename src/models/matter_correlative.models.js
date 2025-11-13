import {sequelize} from "../config/database/dbconfig.js"
import {DataTypes} from "sequelize"

// Por cada materia necesaria para cursar la materia x "Analisis 2", habra un registro en esta tabla intermedia relacionando la materia "Analisis 2" con otro id materia "Analisis 1"
export const MatterCorrelative = sequelize.define("Matter_Correlative", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }

})
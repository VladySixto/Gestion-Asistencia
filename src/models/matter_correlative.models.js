import {sequelize} from "../config/database/dbconfig.js"
import {DataTypes} from "sequelize"

// Por cada materia necesaria para cursar la materia x "Analisis 2", habra un registro en esta tabla intermedia relacionando la materia "Analisis 2" con otro id materia "Analisis 1"
export const MatterCorrelative = sequelize.define("Matter_Correlative", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    //materia que se va a cursar
    matter_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Matter",
            key: "id"
        }
    },
    //materia aprobada necesaria para cursar siguente materia.
    prerequisite_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Matter",
            key: "id"
        }
    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    //duplicados
    indexes: [{ unique: true, fields: ["matter_id", "prerequisite_id"] }]

})
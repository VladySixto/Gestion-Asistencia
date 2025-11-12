import {sequelize} from "../config/database/dbconfig.js"
import {DataTypes} from "sequelize"

export const MatterRegistration = sequelize.define("Matter_Registration", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Student",
            key: "id"
        }
    },
    matter_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Matter",
            key: "id"
        }
    },
    //tipo de estado de materia para saber si esta aprobada, desaprobada
    type_state_matter: {
        type: DataTypes.ENUM("Aprobada", "Reprobada", "Pendiente", "Cursando"),
        allowNull: false,
        defaultValue: "Pendiente"
    },
    verification_state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

})
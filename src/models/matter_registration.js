import {sequelize} from "../config/database/db.config.js"
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
    verification_state: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: false
    },

})
import { sequelize } from "../config/database/dbconfig.js"
import { DataTypes } from "sequelize"

export const ModalityTaken = sequelize.define("Modality_Taken", {
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
    }
})
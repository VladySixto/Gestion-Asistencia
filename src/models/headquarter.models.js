import { sequelize } from "../config/database/dbconfig"
import { DataTypes } from "sequelize"

// sede, crear relacion entre direccion y carrera
export const Headquarters = sequelize.define("Headquarter", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
})
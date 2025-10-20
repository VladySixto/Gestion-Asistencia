import { sequelize } from "../config/database/dbconfig.js"
import { DataTypes } from "sequelize"


export const Address = sequelize.define("Address", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isBuilding: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    buildingName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    floor: {
        type: DataTypes.STRING,
        allowNull: true
    },
    apartment: {
        type: DataTypes.STRING,
        allowNull: true
    }
})
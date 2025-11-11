import {sequalize} from "../config/database/db.config.js"
import {DataTypes} from "sequelize"

export const MatterCorrelative = sequalize.define("Matter_Correlative", {
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
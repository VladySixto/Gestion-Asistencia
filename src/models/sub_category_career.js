import { sequelize} from "../config/database/db.config.js"
import { DataTypes } from "sequelize"

export const CareerCategory = sequelize.define("Career_Categories",{
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
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:true
    }
})

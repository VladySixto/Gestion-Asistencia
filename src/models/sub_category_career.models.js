import { sequelize} from "../config/database/dbconfig.js"
import { DataTypes } from "sequelize"

export const CareerCategory = sequelize.define("Career_Category",{
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

import { sequelize} from "../config/database/dbconfig.js"
import { DataTypes } from "sequelize"

export const Career = sequelize.define("Careers",{
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
    duration_years: {
        type: DataTypes.INTEGER(2),
        allowNull: false
    },
    avaible: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:true
    }

})
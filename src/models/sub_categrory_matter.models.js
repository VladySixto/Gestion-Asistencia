import { sequelize } from "../config/database/dbconfig.js"
import { DataTypes } from "sequelize"

export const SubCategoryMatter = sequelize.define("Sub_Category_Matter", {
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
        type: DataTypes.TEXT,
        allowNull: true
    }
})
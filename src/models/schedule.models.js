import { sequelize } from "../config/database/dbconfig.js"
import { DataTypes } from "sequelize"

// tabla "cursada" para ponerle dia y horario a la materia.
export const Schedule = sequelize.define("Schedule", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    day_of_week: {
       type: DataTypes.ENUM("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"),
       allowNull: false
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    classroom: {
        type: DataTypes.STRING,
        allowNull: true
    },
    available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

import { sequelize } from "../config/database/dbconfig.js"
import { DataTypes } from "sequelize"

export const StudentAttendance = sequelize.define("Student_Attendance", {
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
    hour:{
        type: DataTypes.TIME,
        allowNull: false
    },
    day:{
        type: DataTypes.DATEONLY,
        allowNull: false
        },
    state: {
        type: DataTypes.ENUM("Presente", "Ausente", "Tarde"),
        allowNull: false
    }
})
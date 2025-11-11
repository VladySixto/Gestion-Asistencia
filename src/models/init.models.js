
import { sequelize } from "../config/database/dbconfig.js"
import dotenv from "dotenv"
import { Address } from "./address.models.js"
import { Career } from "./career.models.js"
import { CareerType } from "./career_type.models.js"
import { Headquarters } from "./headquarter.models.js"
import { Matter } from "./matter.models.js"
import { MatterCorrelative } from "./matter_correlative.models.js"
import { MatterRegistration } from "./matter_registration.js"
import { matterType } from "./matter_type.models.js"
import { ModalityTaken } from "./modality_taken.models.js"
import { Preceptor } from "./preceptor.models.js"
import { Schedule } from "./schedule.models.js"
import { Student } from "./student.models.js"
import { StudentAttendance } from "./student_attendance.models.js"
import { CareerCategory } from "./sub_category_career.models.js"
import { SubCategoryMatter } from "./sub_categrory_matter.models.js"
import { User } from "./user.models.js"

dotenv.config()

export const initModels = () => {
  // User relationships
  User.hasOne(Student, { foreignKey: "user_id" })
  Student.belongsTo(User, { foreignKey: "user_id" })

  User.hasOne(Preceptor, { foreignKey: "user_id" })
  Preceptor.belongsTo(User, { foreignKey: "user_id" })

  User.hasOne(Address, { foreignKey: "user_id" })
  Address.belongsTo(User, { foreignKey: "user_id" })

  // Student relationships
  Student.hasMany(StudentAttendance, { foreignKey: "student_id" })
  StudentAttendance.belongsTo(Student, { foreignKey: "student_id" })

  Student.belongsToMany(Matter, { through: MatterRegistration, foreignKey: "student_id" })
  Matter.belongsToMany(Student, { through: MatterRegistration, foreignKey: "matter_id" })

  // Career relationships
  Career.belongsTo(CareerType, { foreignKey: "career_type_id" })
  CareerType.hasMany(Career, { foreignKey: "career_type_id" })

  Career.belongsTo(CareerCategory, { foreignKey: "career_category_id" })
  CareerCategory.hasMany(Career, { foreignKey: "career_category_id" })

  Career.belongsToMany(Headquarters, { through: "CareerHeadquarters" })
  Headquarters.belongsToMany(Career, { through: "CareerHeadquarters" })

  // Matter relationships
  Matter.belongsTo(matterType, { foreignKey: "matter_type_id" })
  matterType.hasMany(Matter, { foreignKey: "matter_type_id" })

  Matter.belongsTo(SubCategoryMatter, { foreignKey: "sub_category_matter_id" })
  SubCategoryMatter.hasMany(Matter, { foreignKey: "sub_category_matter_id" })

  Matter.belongsToMany(Matter, {
    through: MatterCorrelative,
    as: "Prerequisites",
    foreignKey: "matter_id",
    otherKey: "prerequisite_id",
  })

  Matter.hasMany(Schedule, { foreignKey: "matter_id" })
  Schedule.belongsTo(Matter, { foreignKey: "matter_id" })

  // Headquarters relationships
  Headquarters.hasOne(Address, { foreignKey: "headquarter_id" })
  Address.belongsTo(Headquarters, { foreignKey: "headquarter_id" })

  // Preceptor relationships
  Preceptor.belongsToMany(Career, { through: "PreceptorCareers" })
  Career.belongsToMany(Preceptor, { through: "PreceptorCareers" })

  // ModalityTaken relationships
  Student.belongsTo(ModalityTaken, { foreignKey: "modality_taken_id" })
  ModalityTaken.hasMany(Student, { foreignKey: "modality_taken_id" })
}

export const initDb = async () => {
  try {
    await sequelize.authenticate()
    console.log("Conexión establecida con la base de datos.")
    initModels()
    // Usar { force: true } solo en desarrollo, ya que borra y recrea las tablas.
    await sequelize.sync({ force: process.env.APP_MODE === "dev" })
    console.log("Base de datos sincronizada con éxito.")
  } catch (error) {
    console.error("Error al sincronizar la base de datos:", error)
  }
}

// Inserción de datos por defecto para desarrollo (roles y usuario de prueba)
export const insertDevs = async () => {
  try {
    console.log("Insertando datos de desarrollo...")
  } catch (error) {
    console.error("Error al insertar datos de desarrollo:", error)
  }
}
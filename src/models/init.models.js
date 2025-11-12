
import { sequelize } from "../config/database/dbconfig.js"
import dotenv from "dotenv"
import { Address } from "./address.models.js"
import { Preceptor } from "./preceptor.models.js"
import { Student } from "./student.models.js"
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
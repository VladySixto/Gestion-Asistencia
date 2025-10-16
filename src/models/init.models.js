import { sequelize } from "../config/database/dbconfig.js"
import dotenv from "dotenv"
dotenv.config()
//importaciones de modelos
import { Patient } from "./patient.models.js"
import { Tutor } from "./tutor.models.js"
//import { Professional } from "./professional.models.js"


// revisar relaciones
export const initModels = () =>{
    Patient.belongsToMany(Tutor, {through: "patient_tutor"})
    Tutor.belongsToMany(Patient, {through: "patient_tutor"})
    
}


export const initDb = async () => {
    try {
        await sequelize.authenticate()
        console.log("Conexión establecida con la base de datos.")
        // Usar { force: true } solo en desarrollo, ya que borra y recrea las tablas.
        await sequelize.sync({ force: process.env.APP_MODE === "dev"})
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
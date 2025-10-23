import { Router } from "express"
import {
    createPatient,
    deletePatient,
    getAllFPatients,
    searchPatient,
    updatePatient
} from "../controllers/patient.controllers.js"
import { createPatientValidator } from "../middlewares/validates/patient.validates.js"
import { validateIntParam } from "../middlewares/validates/commons.validates.js"
import { validateResult } from "../middlewares/validateResult.middleware.js"

// diferentes instancias de router para la ruta Singular y Plural
const patientRouter = Router() 
const patientsRouter = Router() 

patientsRouter.get("/", getAllFPatients)

patientRouter.post(
    "/",
    createPatientValidator, 
   validateResult, 
    createPatient           
)

patientRouter.get("/:id", validateIntParam("id"),validateResult, searchPatient)
patientRouter.put("/:id", validateIntParam("id"), createPatientValidator,validateResult, updatePatient)
patientRouter.delete("/:id", validateIntParam("id"),validateResult, deletePatient)

export { patientRouter, patientsRouter }
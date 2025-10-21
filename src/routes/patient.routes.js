import { Router } from "express"
import { createPatient, getAllFPatients } from "../controllers/patient.controllers.js"
import { createPatientValidator } from "../middlewares/validate/patient.validate.js"
import { validateResult } from "../middlewares/validateResult.middleware.js"
import { keycloaki } from "../config/keycloak.config.js"

export const patientRouter = Router()
export const patientsRouter = Router()

patientRouter.post("/",
    
    createPatientValidator,
    validateResult,
    createPatient
)
.get("/",
    keycloaki.protect(),
  
)

patientsRouter.get("/",
    keycloaki.protect(),
    getAllFPatients
)


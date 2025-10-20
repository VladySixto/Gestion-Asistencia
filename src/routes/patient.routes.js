import { Router } from "express"
import { createPatient, getPatients } from "../controllers/patient.controllers.js"
import { createPatientValidator } from "../middlewares/validate/patient.validate.js"
import { validateResult } from "../middlewares/validateResult.middleware.js"
import { keycloaki } from "../config/keycloak.config.js"

const patientRouter = Router()

patientRouter.post("/",
    keycloaki.protect(),
    createPatientValidator,
    validateResult,
    createPatient
)
.get("/",
    keycloaki.protect(),
    getPatients
)

export default patientRouter

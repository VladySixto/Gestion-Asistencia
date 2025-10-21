import { Router } from "express"
import { createPatient, getAllFPatients, searchPatient,updatePatient } from "../controllers/patient.controllers.js"
import { createPatientValidator } from "../middlewares/validate/patient.validate.js"
import { validateResult } from "../middlewares/validateResult.middleware.js"
import { keycloaki } from "../config/keycloak.config.js"

export const patientRouter = Router()
export const patientsRouter = Router()

patientRouter.post("/",
    keycloaki.protect(),
    createPatientValidator,
    validateResult,
    createPatient
)
.get("/:id",
    keycloaki.protect(),
    searchPatient
)
.put("/:id",
    keycloaki.protect(),
    validateResult,
    updatePatient
)
patientsRouter.get("/",
    keycloaki.protect(),
    getAllFPatients
)


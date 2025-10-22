import { Router } from "express"
import { createPatient, getAllFPatients, searchPatient,updatePatient, deletePatient } from "../controllers/patient.controllers.js"
import { createPatientValidator } from "../middlewares/validates/patient.validates.js"
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
.delete("/:id",
    keycloaki.protect(),
    deletePatient
)
patientsRouter.get("/",
    keycloaki.protect(),
    getAllFPatients
)


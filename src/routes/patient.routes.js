import { Router } from "express"
import { createPatient } from "../controllers/patient.controllers.js"
import { createPatientValidator } from "../middlewares/validate/patient.validate.js"
import { validateResult } from "../middlewares/validateResult.middleware.js"


const patientRouter = Router()

patientRouter.post("/",
    createPatientValidator,
    validateResult,
    createPatient
)

export default patientRouter
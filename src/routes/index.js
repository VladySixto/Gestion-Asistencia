import { Router } from "express"
import {patientRouter, patientsRouter} from "./patient.routes.js"

const mainRouter = Router()

mainRouter.use("/patient", patientRouter)
mainRouter.use("/patients", patientsRouter)

export default mainRouter

import { Router } from "express"
import patientRouter from "./patient.routes.js"

const mainRouter = Router()

mainRouter.use("/patient", patientRouter)

export default mainRouter

import { Router } from "express"
import { getModalityTaken, getAllModalityTaken, createModalityTaken, updateModalityTaken, deleteModalityTaken } from "../controllers/modality_taken.controllers"

export const modalityTakenRouter = Router()
export const modalityTakenRouters = Router()

modalityTakenRouters.get("/", getAllModalityTaken)

modalityTakenRouter.get("/", getModalityTaken)

modalityTakenRouter.post("/", createModalityTaken)

modalityTakenRouter.put("/:id", updateModalityTaken)

modalityTakenRouter.delete("/:id", deleteModalityTaken)
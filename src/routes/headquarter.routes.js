import { Router } from "express"
import { getHeadquarters, getAllHeadquarters, createHeadquarters, updateHeadquarters, deleteHeadquarters } from "../controllers/headquarter.controllers"

export const headquartersRouter = Router()
export const headquartersRouters = Router()

headquartersRouters.get("/", getAllHeadquarters)

headquartersRouter.get("/", getHeadquarters)

headquartersRouter.post("/", createHeadquarters)

headquartersRouter.put("/:id", updateHeadquarters)

headquartersRouter.delete("/:id", deleteHeadquarters)
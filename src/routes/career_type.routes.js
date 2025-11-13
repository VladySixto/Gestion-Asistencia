import { Router } from "express"
import { createCareerType, deleteCareerType, getCareerTypeById, updateCareerType,getAllCareerType } from "../controllers/career_type.controllers.js"

export const careerTypeRouter = Router()
export const careerTypeRouters = Router()

careerTypeRouter
    .post("/", createCareerType)
    .put("/:id", updateCareerType)
    .delete("/:id", deleteCareerType)
    .get("/:id", getCareerTypeById)


careerTypeRouters.get("/",getAllCareerType)
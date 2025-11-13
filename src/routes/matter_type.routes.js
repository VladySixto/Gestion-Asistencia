import { Router } from "express"
import {createMatterType, updateMatterType, deleteMatterType, getMatterTypeById, getMatterTypes} from "../controllers/matter_type.controllers.js"

export const matterTypeRouter = Router() 
export const matterTypeRouters = Router() 

matterTypeRouter.post("/", createMatterType)

matterTypeRouters.get("/",getMatterTypes) 
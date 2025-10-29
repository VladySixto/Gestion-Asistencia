import { Router } from "express"
import { createTest, getallTest } from "../controllers/test.controller.js"

const router = Router()

router.post("/", createTest)
router.get("/",getallTest)
export default router

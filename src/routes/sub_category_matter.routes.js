import { Router } from "express"
import { getSubCategoriesMatter, getAllSubCategoriesMatter, createSubCategoryMatter, updateSubCategoryMatter, deleteSubCategoryMatter, getSubCategoryMatterById } from "../controllers/sub_category_matter.controllers"

export const subCategoryMatterRouter = Router()
export const subCategoryMatterRouters = Router()

subCategoryMatterRouter.post("/", createSubCategoryMatter)

subCategoryMatterRouters.get("/", getSubCategoriesMatter)

subCategoryMatterRouters.get("/", getAllSubCategoriesMatter)

subCategoryMatterRouter.get("/:id", getSubCategoryMatterById)

subCategoryMatterRouter.put("/:id", updateSubCategoryMatter)

subCategoryMatterRouter.delete("/:id", deleteSubCategoryMatter)
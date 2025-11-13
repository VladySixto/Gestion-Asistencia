import { Router } from "express"
import {
    getSubCategoriesMatter,
    createSubCategoryMatter,
    updateSubCategoryMatter,
    deleteSubCategoryMatter,
    getAllSubCategoriesMatter,
    getSubCategoryMatterById
} from "../controllers/sub_category_matter.controllers.js"

export const subCategoryMatterRouter = Router()
export const subCategoryMatterRouters = Router()

subCategoryMatterRouters.get('/', getAllSubCategoriesMatter)

/**
 * @swagger
 * components:
 *   schemas:
 *     SubCategoryMatter:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-incremental ID of a sub-category of matter
 *         name:
 *           type: string
 *           description: The name of the sub-category of matter
 *         description:
 *           type: string
 *           description: The description of the sub-category of matter
 *       required:
 *         - name
 *         - description
 *       example:
 *         id: 1
 *         name: "Análisis Matemático"
 *         description: "Sub-categoría de materias de ciencias exactas"
 */

/**
 * @swagger
 * /api/v1/sub-category-matter:
 *   get:
 *     summary: Get all sub-categories of matter
 *     tags: [SubCategoryMatter]
 *     parameters:
 *       - in: query
 *         name: all
 *         schema:
 *           type: boolean
 *         description: Get all sub-categories of matter without pagination
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: The page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: The number of items per page
 *     responses:
 *       200:
 *         description: A list of sub-categories of matter
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalItems:
 *                   type: integer
 *                 totalPages:
 *                   type: integer
 *                 currentPage:
 *                   type: integer
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/SubCategoryMatter'
 */
subCategoryMatterRouter.get("/", getSubCategoriesMatter)

/**
 * @swagger
 * /api/v1/sub-category-matter/{id}:
 *   get:
 *     summary: Get a sub-category of matter by ID
 *     tags: [SubCategoryMatter]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the sub-category of matter
 *     responses:
 *       200:
 *         description: A sub-category of matter
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubCategoryMatter'
 *       404:
 *          description: Sub-category of matter not found
 */
subCategoryMatterRouter.get("/:id", getSubCategoryMatterById)

/**
 * @swagger
 * /api/v1/sub-category-matter:
 *   post:
 *     summary: Create a new sub-category of matter
 *     tags: [SubCategoryMatter]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubCategoryMatter'
 *     responses:
 *       201:
 *         description: The created sub-category of matter
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubCategoryMatter'
 */
subCategoryMatterRouter.post("/", createSubCategoryMatter)

/**
 * @swagger
 * /api/v1/sub-category-matter/{id}:
 *   put:
 *     summary: Update a sub-category of matter
 *     tags: [SubCategoryMatter]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the sub-category of matter
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubCategoryMatter'
 *     responses:
 *       200:
 *         description: The updated sub-category of matter
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubCategoryMatter'
 */
subCategoryMatterRouter.put("/:id", updateSubCategoryMatter)

/**
 * @swagger
 * /api/v1/sub-category-matter/{id}:
 *   delete:
 *     summary: Delete a sub-category of matter
 *     tags: [SubCategoryMatter]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the sub-category of matter
 *     responses:
 *       200:
 *         description: The deleted sub-category of matter
 *       404:
 *         description: Sub-category of matter not found
 */
subCategoryMatterRouter.delete("/:id", deleteSubCategoryMatter)
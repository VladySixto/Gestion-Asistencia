import { Router } from "express"
import { getHeadquarters, getAllHeadquarters, createHeadquarters, updateHeadquarters, deleteHeadquarters, getHeadquartersById } from "../controllers/headquarter.controllers.js"

export const headquartersRouter = Router()
export const headquartersRouters = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Headquarters:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-incremental ID of a headquarters
 *         name:
 *           type: string
 *           description: The name of the headquarters
 *         description:
 *           type: string
 *           description: The description of the headquarters
 *       required:
 *         - name
 *         - description
 *       example:
 *         id: 1
 *         name: "Sede Central"
 *         description: "Sede principal de la institución"
 */

/**
 * @swagger
 * /api/v1/all/headquarters:
 *   get:
 *     summary: Get all headquarters without pagination
 *     tags: [Headquarters]
 *     responses:
 *       200:
 *         description: A list of all headquarters
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Headquarters'
 */
headquartersRouters.get("/", getAllHeadquarters)

/**
 * @swagger
 * /api/v1/headquarters:
 *   get:
 *     summary: Get all headquarters with pagination
 *     tags: [Headquarters]
 *     parameters:
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
 *         description: A paginated list of headquarters
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
 *                     $ref: '#/components/schemas/Headquarters'
 */
headquartersRouter.get("/", getHeadquarters)

/**
 * @swagger
 * /api/v1/headquarters/{id}:
 *   get:
 *     summary: Get a headquarters by ID
 *     tags: [Headquarters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the headquarters
 *     responses:
 *       200:
 *         description: A headquarters object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Headquarters'
 *       404:
 *          description: Headquarters not found
 */
headquartersRouter.get("/:id", getHeadquartersById)

/**
 * @swagger
 * /api/v1/headquarters:
 *   post:
 *     summary: Create a new headquarters
 *     tags: [Headquarters]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Headquarters'
 *     responses:
 *       201:
 *         description: The created headquarters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Headquarters'
 */
headquartersRouter.post("/", createHeadquarters)

/**
 * @swagger
 * /api/v1/headquarters/{id}:
 *   put:
 *     summary: Update a headquarters
 *     tags: [Headquarters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the headquarters
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Headquarters'
 *     responses:
 *       200:
 *         description: The updated headquarters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Headquarters'
 */
headquartersRouter.put("/:id", updateHeadquarters)

/**
 * @swagger
 * /api/v1/headquarters/{id}:
 *   delete:
 *     summary: Delete a headquarters
 *     tags: [Headquarters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the headquarters
 *     responses:
 *       200:
 *         description: Headquarters deleted successfully
 *       404:
 *         description: Headquarters not found
 */
headquartersRouter.delete("/:id", deleteHeadquarters)
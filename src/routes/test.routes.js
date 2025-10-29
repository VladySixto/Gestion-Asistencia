import { Router } from "express"
import { createTest, getallTest } from "../controllers/test.controller.js"

const router = Router()

/**
 * @openapi
 * /api/v1/test:
 *   post:
 *     summary: Crea un nuevo registro de prueba.
 *     tags: [Test]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Mi primer test"
 *     responses:
 *       201:
 *         description: Creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Mi primer test"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       500:
 *         description: Error interno del servidor.
 */
router.post("/", createTest)

/**
 * @openapi
 * /api/v1/test:
 *   get:
 *     summary: Obtiene todos los registros de prueba.
 *     tags: [Test]
 *     responses:
 *       200:
 *         description: Operación exitosa.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Mi primer test"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/", getallTest)

export default router

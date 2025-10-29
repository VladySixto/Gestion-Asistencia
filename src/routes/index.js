import { Router } from "express"
import testRouter from "./test.routes.js"

const mainRouter = Router()

mainRouter.use("/test", testRouter)

/**
 * @openapi
 * /api/v1/ping:
 *   get:
 *     summary: Ruta de prueba para verificar si la API está en línea.
 *     tags: [Test]
 *     responses:
 *       200:
 *         description: Operación exitosa, responde con "pong".
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "pong"
 */
mainRouter.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" })
})



export default mainRouter

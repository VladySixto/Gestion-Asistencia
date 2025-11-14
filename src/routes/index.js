import { Router } from "express"
import testRouter from "./test.routes.js"
import { matterTypeRouters , matterTypeRouter } from "../routes/matter_type.routes.js"
import { careerTypeRouter, careerTypeRouters } from "./career_type.routes.js"
import { subCategoryMatterRouter, subCategoryMatterRouters } from "./sub_category_matter.routes.js"
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

mainRouter.use("/matter-type", matterTypeRouter)
mainRouter.use("/matter-types", matterTypeRouters)

mainRouter.use("/career-type", careerTypeRouter)
mainRouter.use("/career-types", careerTypeRouters)

export default mainRouter


//rutas de sub caegoria de materias 

mainRouter.use("/sub-category-matter", subCategoryMatterRouter)
mainRouter.use("/sub-category-matters", subCategoryMatterRouters)

//rutas de modalidad de la cursada

mainRouter.use("/modality-taken", modalityTakenRouter)
mainRouter.use("/modality-takens", modalityTakenRouters)
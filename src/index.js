import express from "express"
import session from "express-session"
import { keycloaki, memoryStore } from "./config/keycloak.config.js"
import { initModels, initDb, insertDevs } from "./models/init.models.js"
import dotenv from "dotenv"
import { swaggerDocs } from "./swagger.js"
import helmet from "helmet"
import cors from "cors"
import mainRouter from "./routes/index.js"
dotenv.config()

const appPort = process.env.PORT || 3000

const expressSecret = process.env.SESSION_SECRET || "sin_secreto"

const app = express()

app.use(
    session({secret: expressSecret,
        resave: false,
        saveUninitialized: true,
        store: memoryStore
    })
)
//funcionamiento de sequelize
async function main() {
    try {
        initModels()
        await initDb()
        if (process.env.APP_MODE == "dev") {
            await insertDevs()
        } 

        app.listen(appPort, () => {
            console.log(`Servidor escuchando en el puerto ${appPort}`)
            swaggerDocs(app, appPort)
        })
    } catch (error) {
        console.error("error al iniciar Sequelize (DB)", error)
    }
}
main()

// config de la App
app.use(helmet())
app.use(cors())
app.use(keycloaki.middleware())
app.use(express.json())
app.use("/api/v1", mainRouter)
// Ruta pública
app.get("/", (req, res) => {
  res.send("🚀 Bienvenido al back del externo!!")
})

// Ruta protegida (requiere login)
app.get("/protegida", keycloaki.protect(), (req, res) => {
  res.send("✅ Acceso concedido a la ruta protegida.")
})

// Ruta protegida por rol
app.get("/admin", keycloaki.protect("realm:admin"), (req, res) => {
  res.send("👑 Solo los admins pueden entrar aquí")
})

// Logout
app.get("/logout", (req, res) => {
  req.session.destroy()
  
  res.redirect(`${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/logout?redirect_uri=http://localhost:${process.env.PORT}/`)
})
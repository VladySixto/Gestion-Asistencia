import express from "express"
import session from "express-session"
import Keycloak from "keycloak-connect"
import { initModels } from "./models/init.models.js"
import { sequelize } from "./config/database/dbconfig.js"
import dotenv from "dotenv"
import { swaggerDocs } from "./swagger.js"
dotenv.config()

//secret 

const secretKC = process.env.CLIENT_SECRET_K || "sin_secreto"

const appPort = process.env.PORT || 3000

const expressSecret = process.env.SESSION_SECRET || "sin_secreto"

const app = express()

const memoryStore = new session.MemoryStore()
app.use(
    session({secret: expressSecret,
        resave: false,
        saveUninitialized: true,
        store: memoryStore
    })
)

async function main() {
    try {
        await sequelize.authenticate()
        initModels()
        await sequelize.sync()
        app.listen(appPort, () => {
            console.log(`Servidor escuchando en el puerto ${appPort}`)
            swaggerDocs(app, appPort)
        })
    } catch (error) {
        console.error("error al iniciar Sequelize (DB)", error)
    }
}

main()

const keycloaki = new Keycloak(
  { store: memoryStore },
  {
   
   realm: process.env.KEYCLOAK_REALM,
   
    "auth-server-url": process.env.KEYCLOAK_URL,
    
    resource: process.env.KEYCLOAK_CLIENT,
    credentials: {
      secret: secretKC
    },
    "confidential-port": 0
  }
)

app.use(keycloaki.middleware())

// Ruta pública
app.get("/", (req, res) => {
  res.send("🚀 Bienvenido a la app con Keycloak!")
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

app.listen(appPort, () => {
  console.log("Servidor corriendo en http://localhost:" + appPort)
})
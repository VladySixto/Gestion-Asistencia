import express from "express"
import session from "express-session"
import keycloak from "keycloak-connect"
import dotenv from "dotenv"

dotenv.config()



const app = express()

const memotyStore = new session.MemoryStore()
app.use(
    session({secret: process.env.CLIENT_SECRET_K || null,
    })
)
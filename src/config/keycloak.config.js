import session from "express-session"
import Keycloak from "keycloak-connect"
import dotenv from "dotenv"
dotenv.config()

const secretKC = process.env.CLIENT_SECRET_K || "sin_secreto"

// Creamos un store de sesión en memoria. Este es el mismo que usaremos en Express.
export const memoryStore = new session.MemoryStore()

// Creamos y exportamos la instancia de Keycloak
export const keycloaki = new Keycloak(
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
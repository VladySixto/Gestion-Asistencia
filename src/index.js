import express from "express"
import session from "express-session"
import Keycloak from "keycloak-connect"
import dotenv from "dotenv"
dotenv.config()

//secret 
// eslint-disable-next-line no-undef
const secretKC = process.env.CLIENT_SECRET_K || "sin_secreto"
// eslint-disable-next-line no-undef
const appPort = process.env.PORT || 3000
// eslint-disable-next-line no-undef
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


const keycloaki = new Keycloak(
  { store: memoryStore },
  {
   // eslint-disable-next-line no-undef
   realm: process.env.KEYCLOAK_REALM,
   // eslint-disable-next-line no-undef
    "auth-server-url": process.env.KEYCLOAK_URL,
    "ssl-required": "external",
    // eslint-disable-next-line no-undef
    resource: process.env.KEYCLOAK_CLIENT,
    credentials: {
      secret: secretKC
    },
    "confidential-port": 0
  }
);

app.use(keycloaki.middleware());

// Ruta pública
app.get("/", (req, res) => {
  res.send("🚀 Bienvenido a la app con Keycloak!");
});

// Ruta protegida (requiere login)
app.get("/protegida", keycloaki.protect(), (req, res) => {
  res.send("✅ Acceso concedido a la ruta protegida.");
});

// Ruta protegida por rol
app.get("/admin", keycloaki.protect("realm:admin"), (req, res) => {
  res.send("👑 Solo los admins pueden entrar aquí");
});

// Logout
app.get("/logout", (req, res) => {
  req.session.destroy();
  // eslint-disable-next-line no-undef
  res.redirect(`${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/logout?redirect_uri=http://localhost:${process.env.PORT}/`);
});

app.listen(appPort, () => {
  console.log("Servidor corriendo en http://localhost:" + appPort);
});
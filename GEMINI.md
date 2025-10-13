

# 🏛️ Proyecto: Sistema de Gestión de Turnos y Recursos (MVP)

Este documento (GEMINI.md) resume el alcance, la arquitectura y las decisiones fundamentales tomadas durante la fase inicial de planificación del proyecto.


## 1. Alcance del Producto Mínimo Viable (MVP)

El objetivo principal del MVP es establecer un sistema funcional para la gestión centralizada de **Usuarios, Recursos (Salas y Profesionales)** y **Turnos**.

### Módulos Incluidos en el MVP (Tiempo Estimado: 31-33 Días Hábiles)

| Módulo | Funcionalidades Clave | Roles Involucrados |
| :--- | :--- | :--- |
| **Gestión de Usuarios y Roles** | Creación de cuentas, inicio de sesión seguro, asignación de roles. | Administrador, Personal de Consultas |
| **Gestión de Clientes y Tutores** | Registro de Clientes y sus Tutores, asociación y consulta de información. | Personal de Consultas |
| **Gestión de Salas y Recursos** | CRUD de Salas, definición de capacidad y configuración de horarios de trabajo. | Administrador |
| **Gestión de Profesionales** | Registro de profesionales, especialidades y definición de su disponibilidad. | Administrador |
| **Gestión de Turnos** | Creación (única, semanal, mensual), reprogramación, cancelación, visualización en agenda (día/semana/mes) y detección de conflictos. | Personal de Consultas, Administrador |
| **Seguridad y Accesos** | Autenticación segura (Keycloak) e implementación del API Guard. | Administrador, Todos |

---

## 2. Arquitectura Tecnológica

El sistema sigue una arquitectura de componentes desacoplados para asegurar la flexibilidad, el rendimiento y la mantenibilidad.

### Pila Tecnológica (Stack)

| Capa / Servicio | Tecnología Principal | Propósito |
| :--- | :--- | :--- |
| **Frontend** (UI) | **ReactJS** | Interfaz de usuario dinámica para la gestión de la Agenda y formularios. |
| **Backend** (API) | **Node.js (Express)** | Servidor de lógica de negocio, *endpoints* RESTful y validación de datos. |
| **Base de Datos** (DB) | **PostgreSQL / MySQL** | Persistencia de datos, gestionada a través de **Sequelize ORM**. |
| **Identidad** (Auth) | **Keycloak** | Servidor de identidad central para autenticación y gestión de roles. |
| **Infraestructura** | **Docker / Docker Compose** | Contenedorización para replicar el entorno de producción en desarrollo. |
| **Componentes UI** | **FullCalendar** | Visualización profesional de la agenda de turnos. |

### Diagrama Conceptual

```

\+----------------+      (1. Token JWT)    +-----------------+
|   FRONTEND     | \<--------------------\> |    KEYCLOAK     |
|   (ReactJS)    |                      | (Auth Server)   |
\+--------+-------+                      +--------+--------+
|                                       |
| (2. Petición Protegida)               |
v                                       |
\+--------+------------------+      (4. Data ORM)  +------------------+
|      BACKEND (API Guard)  | \<------------------ |  BASE DE DATOS   |
| (Node.js/Express)         |                     | (Sequelize/PG/MySQL) |
\+---------------------------+---------------------+------------------+
^
(3. Verificación de Rol/Token)

```

---

## 3. Roles de Usuario Definidos

El sistema está diseñado para dar servicio principalmente a dos roles operativos, además de un rol de datos (el Profesional).

| Rol | Responsabilidades Clave (MVP) |
| :--- | :--- |
| **Administrador** | Configuración inicial, gestión de usuarios, salas, profesionales, y seguridad (Keycloak). |
| **Personal de Consultas** | Operación diaria: Inicio de sesión, registro de clientes/tutores, gestión de la agenda (creación, edición, cancelación de turnos). |
| **Profesional** | (Rol de dato) Es el recurso asignado a los turnos. Su disponibilidad es definida por el Administrador. |

---

## 4. Estrategia de Seguridad (API Guard)

La seguridad se implementa a través de un *middleware* en el *backend* que intercepta todas las peticiones a las rutas protegidas.

| Requisito | Implementación |
| :--- | :--- |
| **Autenticación** | El *Frontend* (React) envía el *Token* (JWT) obtenido de Keycloak en el encabezado `Authorization: Bearer <token>`. |
| **API Guard** | El *middleware* de Express (`keycloak.protect()` o `keycloak.enforce()`) verifica la validez del token (firma y expiración) y el rol del usuario antes de permitir el acceso a la lógica de negocio. |
| **Autorización** | Las rutas sensibles (e.g., creación de usuarios) están protegidas usando `keycloak.enforce('administrador')` para asegurar que solo usuarios con el rol correcto puedan ejecutarlas. |

---


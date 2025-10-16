 
import { Sequelize } from 'sequelize'
import dotenv from "dotenv"
dotenv.config()

export const sequelize = new Sequelize (
    {host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
    }
)

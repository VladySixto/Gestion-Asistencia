import { body } from "express-validator"
import {
    validateString,
    validateEmail,
    validateIdentification,
    validatePhone
} from "./commons.validates.js"

export const createPatientValidator = [
    // Campos de texto para nombre y apellido
    validateString({ field: "name" }),
    validateString({ field: "lastname" }),

    // Campo de fecha (mantenemos la validación específica ya que no hay un genérico para fechas)
    body("birthdate")
        .isISO8601().withMessage("El campo birthdate debe ser una fecha válida (YYYY-MM-DD)."),

    // Campos que usan nuestros validadores genéricos, respetando si son opcionales o no
    validateEmail({ field: "email", required: false }),
    validatePhone({ field: "phone", required: false }), 
    validateIdentification({ field: "identification", required: true }), // No se permite DNI/ETC en false
    validateIdentification({ field: "cud", required: false }), // El modelo permite cud nulo

    body("haveTutor")
        .isBoolean().withMessage("El campo haveTutor debe ser un valor booleano (true/false).")
]
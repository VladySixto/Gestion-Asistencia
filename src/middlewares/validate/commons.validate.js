import { body, param} from "express-validator"

export const nameValidator = (field = "name") =>
  body(field)
    .trim()
    .notEmpty().withMessage(`${field} is required`)
    .matches(/^[A-Za-zÀ-ÿ\u00f1\u00d1\s]+$/)
    .withMessage(`${field} must contain only letters`)

// ✉️ Email
export const emailValidator = (field = "email") =>
  body(field)
    .notEmpty().withMessage(`${field} is required`)
    .isEmail().withMessage(`${field} must be a valid email`)
    .normalizeEmail()

// ☎️ Teléfono
export const phoneValidator = (field = "phone") =>
  body(field)
    .optional()
    .isLength({ min: 8, max: 15 }).withMessage(`${field} must be between 8 and 15 digits`)
    .matches(/^[0-9]+$/).withMessage(`${field} must contain only numbers`)

// 🪪 Identificación
export const identificationValidator = (field = "identification") =>
  body(field)
    .notEmpty().withMessage(`${field} is required`)
    .isLength({ min: 8, max: 10 }).withMessage(`${field} must be between 8 and 10 digits`)
    .matches(/^[0-9]+$/).withMessage(`${field} must contain only numbers`)


    export const validateNameField = (fieldName, min= 2, max = 100 ) => [
    body(fieldName)
    .trim()
    .notEmpty().withMessage(`El campo ${fieldName} es requerido`).bail()
    //solo letras de la A a la Z, acento y espacios
    .matches(/^[a-zA-ZÀ-ÿ\s]+$/  ).withMessage(`El campo ${fieldName} debe contener solo letras`).bail()
    .isLength({min,max}).withMessage(`El campo ${fieldName} debe tener entre ${min} y ${max} caracteres`)
]

export const validateIntParam = (paramName) => [
  param(paramName)
    .trim()
    .notEmpty().withMessage(`El campo ${paramName} es requerido`)
    .isInt({ min: 1 }).withMessage(`El ${paramName} debe ser un número entero mayor a 0`)
]
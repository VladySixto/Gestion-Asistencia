import { body, param} from "express-validator"

/**
 * Validador genérico para campos de texto (string).
 * @param {object} options - Opciones de configuración.
 * @param {string} options.field - El nombre del campo a validar.
 * @param {boolean} [options.required=true] - Indica si el campo es obligatorio.
 * @param {number} [options.min=2] - Longitud mínima del texto.
 * @param {number} [options.max=100] - Longitud máxima del texto.
 */
export const validateString = ({ field, required = true, min = 2, max = 100 }) => {
  const validator = body(field).trim()

  if (required) {
    validator.notEmpty().withMessage(`El campo ${field} es requerido.`).bail()
  } else {
    validator.optional()
  }

  return validator
    .isString().withMessage(`El campo ${field} debe ser texto.`)
    .isLength({ min, max }).withMessage(`El campo ${field} debe tener entre ${min} y ${max} caracteres.`)
    .matches(/^[a-zA-ZÀ-ÿ\s]+$/).withMessage(`El campo ${field} solo puede contener letras y espacios.`)
}

/**
 * Validador genérico para campos que deben ser strings de números (ej: DNI, teléfono).
 * @param {object} options - Opciones de configuración.
 * @param {string} options.field - El nombre del campo a validar.
 * @param {boolean} [options.required=true] - Indica si el campo es obligatorio.
 * @param {number} [options.min=8] - Longitud mínima.
 * @param {number} [options.max=15] - Longitud máxima.
 */
export const validateNumberString = ({ field, required = true, min = 8, max = 15 }) => {
  const validator = body(field).trim()

  if (required) {
    validator.notEmpty().withMessage(`El campo ${field} es requerido.`).bail()
  } else {
    validator.optional()
  }

  return validator
    .isLength({ min, max }).withMessage(`El campo ${field} debe tener entre ${min} y ${max} dígitos.`)
    .matches(/^[0-9]+$/).withMessage(`El campo ${field} debe contener solo números.`)
}

/**
 * Validador para campos de email.
 * @param {object} options - Opciones de configuración.
 * @param {string} options.field - El nombre del campo a validar.
 * @param {boolean} [options.required=true] - Indica si el campo es obligatorio.
 */
export const validateEmail = ({ field, required = true }) => {
  const validator = body(field).normalizeEmail()
  return required
    ? validator.notEmpty().withMessage(`El campo ${field} es requerido.`).bail().isEmail().withMessage(`El campo ${field} debe ser un email válido.`)
    : validator.optional().isEmail().withMessage(`El campo ${field} debe ser un email válido.`)
}

/**
 * Validador genérico para campos de identificación (DNI, Pasaporte, CUD).
 * Permite caracteres alfanuméricos para ser flexible.
 * @param {object} options - Opciones de configuración.
 * @param {string} options.field - El nombre del campo a validar.
 * @param {boolean} [options.required=true] - Indica si el campo es obligatorio.
 * @param {number} [options.min=6] - Longitud mínima.
 * @param {number} [options.max=20] - Longitud máxima.
 */
export const validateIdentification = ({ field, required = true, min = 6, max = 20 }) => {
  const validator = body(field).trim()

  if (required) {
    validator.notEmpty().withMessage(`El campo ${field} es requerido.`).bail()
  } else {
    validator.optional({ checkFalsy: true })
  }

  return validator
    .isLength({ min, max }).withMessage(`El campo ${field} debe tener entre ${min} y ${max} caracteres.`)
    .isAlphanumeric('es-ES').withMessage(`El campo ${field} solo puede contener letras y números.`)
}

export const validateIntParam = (paramName) => [
  param(paramName)
    .trim()
    .notEmpty().withMessage(`El campo ${paramName} es requerido`)
    .isInt({ min: 1 }).withMessage(`El ${paramName} debe ser un número entero mayor a 0`)
]
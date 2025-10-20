import { body } from "express-validator"

export const createPatientValidator = [
    body("name")
        .isString().withMessage("must be a string")
        .notEmpty().withMessage("is required"),
    body("lastname")
        .isString().withMessage("must be a string")
        .notEmpty().withMessage("is required"),
    body("birthdate")
        .isISO8601().withMessage("must be a valid date"),
    body("email")
        .isEmail().withMessage("must be a valid email"),
    body("phone")
        .isString().withMessage("must be a string")
        .notEmpty().withMessage("is required"),
    body("identification")
        .isString().withMessage("must be a string")
        .notEmpty().withMessage("is required"),
    body("cud")
        .isString().withMessage("must be a string")
        .notEmpty().withMessage("is required"),
    body("haveTutor")
        .isBoolean().withMessage("must be a boolean")
]
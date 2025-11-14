import { ModalityTaken } from "../models/modality_taken.models.js"
import { handleError } from "../handlers/error.handler.js"

export const getModalityTaken = async (req, res) => {
    try {
        let { page = 1, limit = 10 } = req.query

        page = parseInt(page)
        limit = parseInt(limit)

        const offset = (page - 1) * limit

        const { count, rows } = await ModalityTaken.findAndCountAll({
            limit,
            offset,
            order: [["id", "ASC"]], // opcional
        })
        return res.json({
            totalItems: count,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            data: rows,
        })
    } catch (error) {
        return handleError(500, res, error)
    }
}


export const getAllModalityTaken = async (req, res) => {
    try {
        const getModalityTaken = await ModalityTaken.findAll()
        if (getModalityTaken.length == 0) return res.status(404).json({ message: "No se encuentran datos en ModalityTaken" })
        res.status(200).json(getModalityTaken)
    } catch (error) {
        return handleError(500, res, error)
    }
}

export const createModalityTaken = async (req, res) => {
    try {
        const { name, description } = req.body
        const newModalityTaken = await ModalityTaken.create({ name, description })
        res.status(201).json(newModalityTaken)
    } catch (error) {
        return handleError(500, res, error)
    }
}

export const updateModalityTaken = async (req, res) => {
    try {
        const { id } = req.params
        const { name, description } = req.body
        const updatedModalityTaken = await ModalityTaken.update({ name, description }, { where: { id } })
        res.status(200).json(updatedModalityTaken)
    } catch (error) {
        return handleError(500, res, error)
    }
}

export const deleteModalityTaken = async (req, res) => {
    try {
        const { id } = req.params
        const deletedModalityTaken = await ModalityTaken.destroy({ where: { id } })
        res.status(200).json(deletedModalityTaken)
    } catch (error) {
        return handleError(500, res, error)
    }
}
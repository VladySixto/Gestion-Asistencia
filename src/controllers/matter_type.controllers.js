import { matterType } from "../models/matter_type.models.js"
import { handleError } from "../handlers/error.handler.js"

export const getMatterTypes = async (req, res) => {
    try {
    const matterTypes = await matterType.findAll()
    res.status(200).json(matterTypes)
    } catch (error) {
    return handleError(500,res, error)
    }
}

export const createMatterType = async (req, res) => {
    try {
        const { name, description } = req.body
        const newMatterType = await matterType.create({ name, description })
        res.status(201).json(newMatterType)
    } catch (error) {
        return handleError(500, res, error)
    }
}

export const updateMatterType = async (req, res) => {
    try {
        const { id } = req.params
        const { name, description } = req.body
        const updatedMatterType = await matterType.update({ name, description }, { where: { id } })
        res.status(200).json(updatedMatterType)
    } catch (error) {
        return handleError(500, res, error)
    }
}

export const deleteMatterType = async (req, res) => {
    try {
        const { id } = req.params
        const deletedMatterType = await matterType.destroy({ where: { id } })
        res.status(200).json(deletedMatterType)
    } catch (error) {
        return handleError(500, res, error)
    }
}

export const getMatterTypeById = async (req, res) => {
    try {
        const { id } = req.params
        const matterType = await matterType.findByPk(id)
        res.status(200).json(matterType)
    } catch (error) {
        return handleError(500, res, error)
    }
}
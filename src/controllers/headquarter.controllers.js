import { Op } from "sequelize"
import { Headquarters } from "../models/headquarter.models"
import { handleError } from "../handlers/error.handler"

export const getHeadquarters = async (req, res) => {
    try {
        let { page = 1, limit = 10 } = req.query
        
        page = parseInt(page)
        limit = parseInt(limit)

        const offset = (page - 1) * limit

        const { count, rows } = await Headquarters.findAndCountAll({
            where: { available: true },
            limit,
            offset,
            order: [["id", "ASC"]],
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

export const getAllHeadquarters = async (req, res) => {
    try {
        const getHeadquarters = await Headquarters.findAll()
        if (getHeadquarters.length == 0) return res.status(404).json({ message: "No se encuentran datos en Headquarters" })
        res.status(200).json(getHeadquarters)
    } catch (error) {
        return handleError(500, res, error)
    }
}

export const getHeadquartersById = async (req, res) => {
    try {
        const { id } = req.params
        const headquarters = await Headquarters.findByPk(id, { where: { available: true } })
        if (!headquarters) return res.status(404).json({ message: "Headquarters not found" })

        res.status(200).json(headquarters.id, headquarters.name, headquarters.description)
    } catch (error) {
        return handleError(500, res, error)
    }
}


export const createHeadquarters = async (req, res) => {
    try {
        const { name, description } = req.body
        //validamos si existe el nombre
        const existNameHeadquarters = await Headquarters.findOne({ where: { name: { [Op.iLike]: name }, available: true } })
        if (existNameHeadquarters) return res.status(400).json({ message: "Headquarters already exists with Name: " + existNameHeadquarters.name + "." })

        const newHeadquarters = await Headquarters.create({ name, description })
        res.status(201).json(newHeadquarters)
    } catch (error) {
        return handleError(500, res, error)
    }
}

export const updateHeadquarters = async (req, res) => {
    try {
        const { id } = req.params
        const { name, description } = req.body
        //validamos si existe el id
        const existIdHeadquarters = await Headquarters.findByPk(id, { where: { available: true }})
        if (!existIdHeadquarters) return res.status(404).json({ message: "Headquarters not found or not available" })

        //validamos si existe el nombre
        const existNameHeadquarters = await Headquarters.findOne({ where: { name: { [Op.iLike]: name }, available: true } })
        if (existNameHeadquarters.name !== name) return res.status(400).json({ message: "No fields changed" })

        //updateamos si pasa las validaciones
        await existIdHeadquarters.update({ name, description })
        res.status(200).json()
    } catch (error) {
        return handleError(500, res, error)
    }
}

export const deleteHeadquarters = async (req, res) => {
    try {
        const { id } = req.params
        //validamos el id
        const existIdHeadquarters = await Headquarters.findByPk(id, { where: { available: true } })
        if (!existIdHeadquarters) return res.status(404).json({ message: "Headquarters not found or not available" })

        //pasamos a false el available
        if (existIdHeadquarters) await existIdHeadquarters.update({ available: false })
        res.status(200).json({ message: "Headquarters deleted successfully" })
    } catch (error) {
        return handleError(500, res, error)
    }
}
import { Op } from "sequelize"
import { handleError } from "../handlers/error.handler.js"
import { CareerType } from "../models/career_type.models.js"

export const getAllCareerType = async (req, res) => {
  try {
    let { page = 1, limit = 10 } = req.query

    page = parseInt(page)
    limit = parseInt(limit)

    const offset = (page - 1) * limit

    const { count, rows } = await CareerType.findAndCountAll({
      where: { available: true },
      limit,
      offset,
      order: [["id", "ASC"]]
    })

    return res.json({
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      data: rows
    })
  } catch (error) {
    return handleError(500, res, error)
  }
}

export const getCareerTypeById = async (req, res) => {
  try {
    const { id } = req.params
    const careerType = await CareerType.findByPk(id, { where: { available: true } })
    if (!careerType) return res.status(404).json({ message: "CareerType not found" })
    res.status(200).json(careerType.id,careerType.name, careerType.description)
  } catch (error) {
    return handleError(500, res, error)
  }
}

export const createCareerType = async (req, res) => {
  try {

    const { name, description } = req.body
    const existNameCareerType = await CareerType.findOne({ where: { name: { [Op.iLike]: name }, available: true } })

    if (existNameCareerType) return res.status(400).json({ message: "CareerType already exists with Name: " + existNameCareerType.name + "." })

    const newCareerType = await CareerType.create({ name, description })

    res.status(201).json(newCareerType.id,newCareerType.name, newCareerType.description)
  } catch (error) {
    return handleError(500, res, error)
  }
}

export const updateCareerType = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description } = req.body

    //Validacion si existe el id o no.
    const existIdCareerType = await CareerType.findByPk(id, { where: { available: true } })
    if (!existIdCareerType) return res.status(404).json({ message: "CareerType not found or not available" })

    //Validacion si existe el nombre o no.
    const existNameCareerType = await CareerType.findOne({ where: { name: { [Op.iLike]: name }, available: true } })
    if (existNameCareerType.name !== name) return res.status(400).json({ message: "No fields changed" })

    //updateamos si pasa las validaciones
    await existIdCareerType.update({ name, description })
    res.status(200).json()



  } catch (error) {
    return handleError(500, res, error)
  }
}

export const deleteCareerType = async (req, res) => {
  try {
    const { id } = req.params

    //Validaicones Si existe el id y esta disponible
    const existIdCareerType = await CareerType.findByPk(id, { where: { available: true } })
    if (existIdCareerType) return res.status(404).json({ message: "CareerType not found or not available" })

    //pasamos a true
    if (existIdCareerType) await existIdCareerType.update({ available: false })

    res.status(200).json({ message: "CareerType deleted successfully" })
  } catch (error) {
    return handleError(500, res, error)
  }
}


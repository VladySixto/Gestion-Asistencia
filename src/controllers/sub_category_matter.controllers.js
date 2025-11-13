import { SubCategoryMatter } from "../models/sub_categrory_matter.models.js"
import { handleError } from "../handlers/error.handler.js"

export const getSubCategoriesMatter = async (req, res) => {
    try {
        let { page = 1, limit = 10 } = req.query

        page = parseInt(page)
        limit = parseInt(limit)

        const offset = (page - 1) * limit

        const { count, rows } = await SubCategoryMatter.findAndCountAll({
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

export const getAllSubCategoriesMatter = async (req, res) => {
    try {
        const getSubCategoriesMatter = await SubCategoryMatter.findAll()
        if (getSubCategoriesMatter.length == 0) return res.status(404).json({ message: "No se encuentran datos en SubCategoryMatter" })
        res.status(200).json(getSubCategoriesMatter)
    } catch (error) {
        return handleError(500, res, error)
    }
}

export const createSubCategoryMatter = async (req, res) => {
    try {
        const { name, description } = req.body
        const newSubCategoryMatter = await SubCategoryMatter.create({ name, description })
        res.status(201).json(newSubCategoryMatter)
    } catch (error) {
        return handleError(500, res, error)
    }
}

export const updateSubCategoryMatter = async (req, res) => {
    try {
        const { id } = req.params
        const { name, description } = req.body
        const updatedSubCategoryMatter = await SubCategoryMatter.update({ name, description }, { where: { id } })
        res.status(200).json(updatedSubCategoryMatter)
    } catch (error) {
        return handleError(500, res, error)
    }
}

export const deleteSubCategoryMatter = async (req, res) => {
    try {
        const { id } = req.params
        const deletedSubCategoryMatter = await SubCategoryMatter.destroy({ where: { id } })
        res.status(200).json(deletedSubCategoryMatter)
    } catch (error) {
        return handleError(500, res, error)
    }
}

export const getSubCategoryMatterById = async (req, res) => {
    try {
        const { id } = req.params
        const subCategoryMatter = await SubCategoryMatter.findByPk(id)
        res.status(200).json(subCategoryMatter)
    } catch (error) {
        return handleError(500, res, error)
    }
}
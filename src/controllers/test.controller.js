import { Test } from "../models/test.model.js"

export const createTest = async (req, res) => {
  try {
    const { name } = req.body
    const newTest = await Test.create({ name })
    res.status(201).json(newTest)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getallTest = async(req,res) =>{
  try {
    const getall = await Test.findAll()

    if(getall.length == 0) return res.status().json({message: "No se encuentran datos en Test"})
    res.status(200).json(getall)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

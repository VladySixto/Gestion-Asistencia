import { Test } from "../models/test.model.js"
import { handleError } from "../handlers/error.handler.js"

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
    return handleError(500,res, error)
  }
}

//  -#-#-#- NO COPIAR LOS COMENTARIOS PARA PEGAR EN OTROS CONTROLADORES -#-#-#-
export const controladorDePlantilla = async (req, res) => {
  try {
    //aca va la logica, no van filtros para el body, eso se hace en el middlewares/validates y en el routes

  } catch (error) {
    return handleError(500,res, error)
  }
}
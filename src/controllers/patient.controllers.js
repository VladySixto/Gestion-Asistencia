import {Patient} from "../models/patient.models.js"
import { Op } from "sequelize"
export const searchPatient = async(req,res) =>{
    try {
        
        const { id, cud, identification } = req.query

        // Construimos
        const where = {}
        if (id) {
            where.id = id
        } else if (cud) {
            where.cud = { [Op.iLike]: `%${cud}%` }
        } else if (identification) {
            where.identification = { [Op.iLike]: `%${identification}%` }
        } else {
            return res.status(400).json({ message: "Please provide one of the following search parameters: id, cud, or identification." })
        }

        const patient = await Patient.findOne({ where })

        if (!patient) {
            return res.status(404).json({ message: "Patient not found with the provided criteria." })
        }

        res.status(200).json(patient)

    } catch (error) {
         return res.status(500).json({message: "Internal error",error:error.message})
    }
}

export const getAllFPatients = async (req, res) => {
    try {
        // 1. parametros de paginacion
        const { page = 1, size = 10, name, identification } = req.query

        const limit = parseInt(size)
        const offset = (parseInt(page) - 1) * limit

        // 3. Construimos la cláusula 'where' dinámicamente para los filtros.
        const where = {}
        if (name) {
            where[Op.or] = [
                { name: { [Op.iLike]: `%${name}%` } },
                { lastname: { [Op.iLike]: `%${name}%` } }
            ]
        }
        if (identification) {
            where.identification = identification
        }

        // 4. Usamos findAndCountAll con paginación y filtros.
        const { count, rows } = await Patient.findAndCountAll({
            limit,
            offset,
            where
        })

        res.status(200).json({
            totalItems: count,
            totalPages: Math.ceil(count / limit),
            currentPage: parseInt(page),
            patients: rows
        })
    } catch (error) {
        return res.status(500).json({message: "Internal error",error:error.message})
    }
}

export const createPatient = async(req,res) =>{
    try {
        const {name, lastname, birthdate, email, phone, identification, cud, haveTutor} = req.body

        // Validación de existencia optimizada en una sola consulta
        const existingPatient = await Patient.findOne({
            where: {
                [Op.or]: [
                    { email: email },
                    { identification: identification },
                    { cud: cud },
                    { phone: phone }
                ]
            }
        })

        if (existingPatient) {
            if (existingPatient.email === email) return res.status(400).json({ message: "Email already exists" })
            if (existingPatient.identification === identification) return res.status(400).json({ message: "Identification already exists" })
            if (existingPatient.cud === cud) return res.status(400).json({ message: "CUD already exists" })
            if (existingPatient.phone === phone) return res.status(400).json({ message: "Phone already exists" })
        }
        //creamos el Paciente
        const newPatient = await Patient.create({
        name,
        lastname,
        birthdate,
        email,
        phone,
        identification,
        cud,
        haveTutor
    })
    
    res.status(201).json({message:"Patient created successfully",id:newPatient.id, name:newPatient.name})

    } catch (error) {
         return res.status(500).json({message: "Internal error",error:error.message})
    }
}

export const updatePatient = async(req,res) =>{
    try {
         // eslint-disable-next-line no-unused-vars
         const {name, lastname, birthdate, email, phone, identification, cud, haveTutor} = req.body
         const {id} = req.params

         // 1. Buscar el paciente a actualizar
         const patient = await Patient.findByPk(id)
         if(!patient) return res.status(404).json({message:"Patient not found"})
        
         // 2. Validar que los campos únicos no existan en OTRO paciente
         const orConditions = []
         if (email) orConditions.push({ email: email })
         if (identification) orConditions.push({ identification: identification })
         if (cud) orConditions.push({ cud: cud })
         if (phone) orConditions.push({ phone: phone })

         if (orConditions.length > 0) {
             const existingPatient = await Patient.findOne({
                 where: {
                     [Op.or]: orConditions,
                     id: { [Op.ne]: id } // Excluir al paciente actual de la búsqueda
                 }
             })

             if (existingPatient) {
                 if (email && existingPatient.email === email) return res.status(400).json({ message: "Email already in use by another patient" })
                 if (identification && existingPatient.identification === identification) return res.status(400).json({ message: "Identification already in use by another patient" })
                 if (cud && existingPatient.cud === cud) return res.status(400).json({ message: "CUD already in use by another patient" })
                 if (phone && existingPatient.phone === phone) return res.status(400).json({ message: "Phone already in use by another patient" })
             }
         }

         // 3. Actualizar los datos del paciente
         patient.set(req.body)

         // 4. Guardar los cambios en la base de datos
         await patient.save()

         res.status(200).json({
            message: "Patient updated successfully",
            patient
         })

    } catch (error) {
         return res.status(500).json({message: "Internal error",error:error.message})
    }
}


export const deletePatient = async(req,res) =>{
    try {
        // eslint-disable-next-line no-unused-vars
        const {id} = req.params
      } catch (error) {
         return res.status(500).json({message: "Internal error",error:error.message})
    }
}
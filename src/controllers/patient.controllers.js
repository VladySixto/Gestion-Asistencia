import {Patient} from "../models/patient.models.js"

export const getPatients = async (req, res) => {
    try {
        const patients = await Patient.findAll()
        res.status(200).json(patients)
    } catch (error) {
        return res.status(500).json({message: "Internal error",error:error.message})
    }
}

export const createPatient = async(req,res) =>{
    try {
        const {name, lastname, birthdate, email, phone, identification, cud, haveTutor} = req.body

        //Validaciones de existencia
        const existEmail = await Patient.findOne({where: {email}})
        const existIdentification = await Patient.findOne({where: {identification}})
        const existCud = await Patient.findOne({where: {cud}})
        const existPhone = await Patient.findOne({where: {phone}})

        if(existEmail) return res.status(400).json("Email already exists in Patients")
        if(existIdentification) return res.status(400).json("Identification already exists in Patients")
        if(existCud) return res.status(400).json("CUD already exists in Patients")
        if(existPhone) return res.status(400).json("Phone already exists in Patients")

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
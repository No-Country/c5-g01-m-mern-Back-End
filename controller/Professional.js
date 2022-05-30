const { response } = require("express")
const Professional = require("../models/Professional")


const getProfessionals = async (req,res=response)=>{
  const professionals = await Professional.find({})


  if(!professionals){
      res.json({msg:'No hay profesionales por el momento'})
  }

  res.json({
      msg:'success',
      data:professionals
  })
}



const filterProfessionals = async (req,res=response)=>{
    const {specialty,geoLocation,professional} = req.body
    const filterProfessional = await Professional.findOne({specialty:specialty,geoLocation:geoLocation,professional:professional})

    if(!filterProfessional){
        res.json({msg:'Lamentablemente, no existe ningun profesional con estas caracteristicas'})
    }

    res.json({msg:'Success',data:filterProfessional})
}

const createProfessionals = async (req,res=response)=>{
   const {name,lastname,geoLocation,specialty,professional} = req.body

   const dataProfessional = {name,lastname,geoLocation,specialty,professional}

   const data = await new Professional(dataProfessional)


   data.save()

   res.json({
       data:data
   }) 

  }






module.exports={
    getProfessionals,
    createProfessionals,
    filterProfessionals
}
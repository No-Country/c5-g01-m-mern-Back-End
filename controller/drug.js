const { response } = require("express")
const Drug = require("../models/Drug")




const getAllDrugs = async (req,res=response) =>{
 const drugs = await Drug.find({})

 if(!drugs){
    res.json({msg:'No hay medicinas'})
 }


 res.json({msg:drugs})
}

const getDrugsById = async (req,res=response) =>{
    const {id} = req.params;
    const drugsById = await Drug.findById(id)
   
    if(!drugsById){
      return res.json({msg:'No hay medicinas'})
    }
   
   
    res.json({msg:drugsById})
   }
   


const createDrugs = async (req,res=response) =>{
    const {name,price} = req.body;
    const nameDrugs = await Drug.findOne({name:name})
   
    if(nameDrugs){
      return res.json({msg:'Medicina repetida'})
    }

    const data = {name,price}

    const drugData = await new Drug(data)

    await drugData.save()

       


    res.json({msg:drugData})
   }
   



module.exports={
    getAllDrugs,
    getDrugsById,
    createDrugs
}
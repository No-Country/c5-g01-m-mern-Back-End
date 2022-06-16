const { response } = require("express")
const Inquiry = require("../models/Inquiry")



const getInquiryByUserId = async (req,res=response)=>{
    const {_id} = req.params
    const InquiryByUserId = await Inquiry.find({Paciente:_id})
  

    if(!InquiryByUserId){
        res.json({msg:'Actualmente no tienes consultas'})
    }
  
    res.json({
        msg:'success',
        data:InquiryByUserId
    })
  }

const createInquiry = async (req,res=response)=>{
    const {Paciente,Professional,dateInquiry,created} = req.body


    const dataInquiry = {Paciente,Professional,dateInquiry,created}

    const data = await new Inquiry(dataInquiry)

    await data.save()

    res.json({
        msg:'success',
        data:data
    })
  }

  module.exports= {
    getInquiryByUserId,
    createInquiry
  }
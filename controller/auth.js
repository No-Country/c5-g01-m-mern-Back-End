const { response } = require("express");
const User = require("../models/User");


const createUser = async (req,res=response)=>{
 const {name,lastname,password,email,cellphone} = req.body
 const emailExists = await User.findOne({email:email})
 const cellphoneExists = await User.findOne({cellphone:cellphone})

  if(emailExists){
    return res.json({msg:'Ya existe un usuario con este mail'})
  }
  if(cellphoneExists){
    return res.json({msg:'Ya existe un usuario con este telefono'})
  }


 const dataUser = {name,lastname,password,email,cellphone}
 
 const data =  await new User(dataUser)


  data.save()
 

  res.json({
      msg:'success',
      data:data
    })

}

const getUser =(req,res=response)=>{

}
const getUserById =(req,res=response)=>{

}

const editUser =(req,res=response)=>{

}

const deleteUser =(req,res=response)=>{

}



module.exports={
    createUser,
    getUser,
    getUserById,
    editUser,
    deleteUser
}
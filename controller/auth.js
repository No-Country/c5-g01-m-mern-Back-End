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

  const users = User.find({})


  if(!users){
    res.json({msg:'No hay ningun usuario'})
  }

  res.json({msg:users})
}

const getUserById =(req,res=response)=>{
const {id} = req.params
const userById = User.findById(id)

if(!userById){
  res.json({msg:'El usuario no existe'})
}


res.json({msg:userById})
}

const editUser =(req,res=response)=>{
const {id} = req.params
const {name,password,lastname,email,cellphone} = req.body
const data = {name,password,lastname,email,cellphone}
const userById = User.findByIdAndUpdate(id,data)



res.json({msg:userById})

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
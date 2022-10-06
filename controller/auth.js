const { response } = require("express");
const User = require("../models/User");
const bcrypt= require('bcryptjs');
const { generateJWT } = require("../middlewares/JsonWebTokens");

const createUser = async (req,res=response)=>{

    const {name,lastName,password,email} = req.body
    const emailExists = await User.findOne({email:email})
   
     if(emailExists){
       return res.status(403).json({msg:'Ya existe un usuario con este mail'})
     }

    
    const data = await new User({name,lastName,password,email}) 
    const salt =  bcrypt.genSaltSync();
    data.password= bcrypt.hashSync(password, salt);
   
     await data.save()
    
     
     res.json({
         msg:'success',
         data:data
       })

}


const loginUser = async (req,res=response)=>{
  const {password,email} = req.body
  
  const emailExists = await User.findOne({email})
 
   if(!emailExists){
     return res.status(404).json({msg:'No existe ningun usuario con este mail'})
   }
   console.log(emailExists)

   const validPassword = bcrypt.compareSync(password, emailExists.password)
   if(!validPassword){
    return res.status(403).json({msg:'La contraseña es incorrecta'})
   }


   const token = await generateJWT(emailExists._id)
   
   res.json({
       msg:'success',
       data:emailExists,
       token:token
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
const {name,password,lastName,email} = req.body
const data = {name,password,lastName,email}
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
    deleteUser,
    loginUser
}
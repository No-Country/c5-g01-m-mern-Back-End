const Router = require('express')
const {createUser} = require('../controller/auth.js')
const {check} = require('express-validator')
const { validate } = require('../models/User.js')

const router = Router()



router.get('/get-users',(req,res)=>{
    res.json({msg:'success'})
})

router.get('/get-users/:id',(req,res)=>{
    res.json({msg:'success'})
})

router.put('/modify-user',(req,res)=>{
    res.json({msg:'success'})
})

router.delete('/delete-user',(req,res)=>{
    res.json({msg:'success'})
})

router.post('/create-user',[
    check('name','El nombre es requerido').not().isEmpty(),
    check('password','El password es requerido').not().isEmpty(),
    check('email','El email es requerido').not().isEmpty(),
    check('cellphone','El cellphone es requerido').not().isEmpty(),
    check('lastname','El lastname es requerido').not().isEmpty(),
    validate
],createUser)



module.exports=router;
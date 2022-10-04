const Router = require('express')
const {createUser,editUser,deleteUser,getUser,getUserById, loginUser} = require('../controller/auth.js')
const [validaciones,validacionLogin] = require('../middlewares/validations/validationsCheck')

const router = Router()


router.get('/get-users',getUser)

router.get('/get-users/:id',getUserById)

router.put('/modify-user',validaciones,editUser)


router.delete('/delete-user',deleteUser)



router.post('/logIn',validacionLogin,loginUser)

router.post('/create-user',validaciones,createUser)



module.exports=router;
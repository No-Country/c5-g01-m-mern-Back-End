const Router = require('express')
const { getAllDrugs,getDrugsById,createDrugs } = require('../controller/drug')
const validacionesDrugs = require('../middlewares/validations/validationsCheck')


const router = Router()



router.get('/get-drugs',getAllDrugs)

router.get('/get-drugsById/:id',getDrugsById)

router.post('/create-drugs',validacionesDrugs,createDrugs)



module.exports=router;
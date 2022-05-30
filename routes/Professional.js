const Router = require('express')
const { getProfessionals,createProfessionals, filterProfessionals} = require('../controller/Professional')


const router = Router()


router.get('/getProfessionals',getProfessionals)

router.post('/create-Professionals',createProfessionals)

router.post('/filter-Professionals',filterProfessionals)



module.exports  = router;
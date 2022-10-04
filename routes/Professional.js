const Router = require('express')
const { getProfessionals,createProfessionals, filterProfessionals,getProfessionalsById} = require('../controller/Professional')
const validacionesProfesionales = require('../middlewares/validations/validationsCheck')

const router = Router()

router.get('/getProfessionals',getProfessionals)

router.get('/getProfessionalsId/:id',getProfessionalsById)


router.post('/create-Professionals',validacionesProfesionales,createProfessionals)

router.post('/filter-Professionals',filterProfessionals)



module.exports  = router;
const {validate } = require('../Validar-Campos')
const {check} = require('express-validator')


const validaciones = [
    check('name','El nombre es requerido').not().isEmpty(),
    check('lastName','El lastname es requerido').not().isEmpty(),
    check('password','El password es requerido').not().isEmpty(),
    check('email','No es un email').isEmail(),
    check('email','El email es requerido').not().isEmpty(),
    validate
]

 const validacionLogin = [
     check('email','No es un email').not().isEmpty(),
     check('email','No es un email').isEmail(),
     check('password','El password es requerido').not().isEmpty(),
     validate
 ]


const validacionesDrugs = [
    check('name','El nombre es requerido').not().isEmpty(),
    check('price','El lastname es requerido').not().isEmpty(),
    check('price','El lastname es requerido').not().isNumeric(),
]

const validacionesProfesionales = [
    check('name','El nombre es requerido').not().isEmpty(),
    check('lastname','El apellido es requerido').not().isEmpty(),
    check('time1','El apellido es requerido').not().isEmpty(),
    check('time2','El apellido es requerido').not().isEmpty(),
    check('geoLocation','El apellido es requerido').not().isEmpty(),
    check('specialty','La especialidad es requerida').not().isEmpty(),
    check('professional','La profesionalidad es requerida').not().isEmpty(),
    check('location','La localidad es requerida').not().isEmpty()
]

module.exports= [validaciones,validacionLogin,validacionesDrugs,validacionesProfesionales]

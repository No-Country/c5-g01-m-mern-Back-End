const {Schema,model} = require('mongoose')

const ProfessionalSchema = Schema({
   name:{
       type:String,
       required:true,
   },
   lastname:{
    type:String,
    required:true,
   },
   geoLocation:{
       type:String,
       required:true
   },
   specialty:{
       type:String,
       required:true
   },
   professional:{
       type:String,
       required:true
   }

})

module.exports = model('Professional',ProfessionalSchema)
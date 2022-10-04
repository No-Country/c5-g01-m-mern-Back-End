const {Schema,model} = require('mongoose')

const inquirySchema = Schema({
   Paciente:{
       type:Schema.Types.ObjectId,
       required:true,
       ref:'User'
   },
   Professional:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:'Professional'
   },
   dateInquiry:{
      type:String
   },
   created:{
       date:Date
   }
})

module.exports = model('Inquiry',inquirySchema)
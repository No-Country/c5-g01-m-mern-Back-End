const {Schema,model} = require('mongoose')

const DigitalinquirySchema = Schema({
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
   text:{
    type:String,
    required:true
   },
   dateInquiry:{
      type:String
   },
   created:{
       date:Date.now()
   }
})

module.exports = model('D-Inquiry',DigitalinquirySchema)
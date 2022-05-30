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
   date:{
      type:Date
   },
   created:{
       date:Date.now()
   }
})

module.exports = model('Inquiry',inquirySchema)
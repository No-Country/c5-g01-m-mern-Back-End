const {Schema,model, Mongoose} = require('mongoose')

const inquirySchema = Schema({
   Paciente:{
       type:Schema.Types.ObjectId,
       required:true,
       ref:'User'
   },
   Medico:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:'Medico'
   },
   date:{
      type:Date
   },
   created:{
       date:Date.now()
   }
})

module.exports = model('Inquiry',inquirySchema)
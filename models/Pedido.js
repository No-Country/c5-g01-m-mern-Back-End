const {Schema,model} = require('mongoose')

const PedidoSchema = Schema({
   Paciente:{
       type:Schema.Types.ObjectId,
       required:true,
       ref:'User'
   },
   drug:{
    type:Object,
    required:true
   },
   created:{
       date:Date
   }
})

module.exports = model('Pedido',PedidoSchema)
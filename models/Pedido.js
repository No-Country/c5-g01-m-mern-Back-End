const {Schema,model} = require('mongoose')

const PedidoSchema = Schema({
   Paciente:{
       type:Schema.Types.ObjectId,
       required:true,
       ref:'User'
   },
   drug:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:'Drug'
   },
   created:{
       date:Date.now()
   }
})

module.exports = model('Pedido',PedidoSchema)
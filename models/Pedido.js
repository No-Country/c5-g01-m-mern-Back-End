const {Schema,model} = require('mongoose')

const PedidoSchema = Schema({
   Paciente:{
       type:Schema.Types.ObjectId,
       required:true,
       ref:'User'
   },
   drug:{
    type:Array,
    required:true
   }
})

module.exports = model('Pedido',PedidoSchema)
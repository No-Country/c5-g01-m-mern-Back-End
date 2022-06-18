const Router = require('express')
const { getPedidoByUserId, getAllPedido, createPedidos } = require('../controller/pedidos')


const router = Router()



router.get('/get-pedidos',getAllPedido)

router.get('/get-pedidosByUserID/:id',getPedidoByUserId)

router.post('/create-drugs',createPedidos)



module.exports=router;
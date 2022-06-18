const { response } = require("express")
const Pedido = require("../models/Pedido")

const getAllPedido = async (req,res=response) =>{
 const pedido = await Pedido.find({})

 if(!pedido){
    res.json({msg:'No hay pedidos'})
 }


 res.json({msg:pedido})
}

const getPedidoByUserId = async (req,res=response) =>{
    const {_id} = req.params;
    const pedidoById = await Pedido.find({Paciente:_id})
   
    if(!pedidoById){
       res.json({msg:'No tienes ningun pedido'})
    }
   
   
    res.json({msg:pedidoById})
   }
   


const createPedidos = async (req,res=response) =>{
    const {Paciente,drug,created} = req.body;

    const data = {Paciente,drug,created}

    const pedidoData = await new Pedido(data)

    await pedidoData.save()

    res.json({msg:pedidoData})
   }
   



module.exports={
    getAllPedido,
    getPedidoByUserId,
    createPedidos
}
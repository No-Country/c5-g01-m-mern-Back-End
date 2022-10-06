const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{

    constructor(){
        this.app= express(),
        this.port= process.env.PORT || 3090;
        

        this.paths={
          auth:'/auth',
          drug:'/drug',
          professional:'/professional',
          inquiry:'/inquiry',
          pedidos:'/pedido'
        }


         this.conectionDB();

        this.middlewares();

        this.routes()
    }


     async conectionDB(){
         await dbConnection()
     }

    middlewares(){
        this.app.use(cors())
        
        this.app.use(express.json())
        
        //middleware que lleva al public
        this.app.use(express.static('public')); 
    
      }



    
      routes(){ 
          this.app.use(this.paths.auth,require('../routes/auth'));
          this.app.use(this.paths.professional,require('../routes/professional'));
          this.app.use(this.paths.drug,require('../routes/drug'));
          this.app.use(this.paths.inquiry,require('../routes/inquiry'));
          this.app.use(this.paths.pedidos,require('../routes/pedido'));
      }
    
      listen(){
        this.app.listen(this.port)
        console.log(`Servidor corriendo en  ${this.port}`)
      }  

  
     
      
}

module.exports = Server


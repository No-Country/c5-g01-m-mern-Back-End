const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{

    constructor(){
        this.app= express(),
        this.port= process.env.PORT || 3000;
        

        this.paths={
          auth:'/auth',
          drug:'/drug',

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
      }
    
      listen(){
        this.app.listen(this.port)
        console.log(`Servidor corriendo en  ${this.port}`)
      }  



    
}

module.exports = Server


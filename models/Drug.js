const {Schema,model} = require('mongoose')

const DrugSchema = Schema({
name:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
image:{
    type:String,
    required:true
}
})

module.exports = model('Drug',DrugSchema)
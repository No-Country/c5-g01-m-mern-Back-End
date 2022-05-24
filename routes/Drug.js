const Router = require('express')


const router = Router()



router.get('/get-drugs',(req,res)=>{
    res.json({msg:'success'})
})

router.get('/get-drugsById/:id',(req,res)=>{
    res.json({msg:'success'})
})

router.post('/get-drugs',(req,res)=>{
    res.json({msg:'success'})
})



module.exports=router;
const express =require("express")
const Router=express.Router()

Router.post("/fooddata",(req,res)=>{
    try {
        res.send([global.food_items,global.food_items2])
      
    } catch (error) {
        res.json({success:false})
    }
})





module.exports=Router;
const express =require("express")
const Router=express.Router()
const bcrypt =require("bcrypt")
const jwt = require("jsonwebtoken")
const jwtsecret = "sdvfvfbbfbbfgbfgbgbfgbbgbgbgbgbf"

const User =require("../models/User")
const { body, validationResult } = require('express-validator');

Router.post("/CreateUser",[ 
    body('email',"incorrect email").isEmail(),
    body('name',"name must be alteast 5 characters").isLength({ min: 5 }),
// password must be at least 5 chars long
body('password',"password must be atleast 5 characters").isLength({ min: 5 }),],async(req,res)=>{
    // validating 8
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array() });
    }

   
    const salt =await bcrypt.genSalt(10)
    let secPassword = await bcrypt.hash(req.body.password,salt)


  try {

    // it create C from crud
     User.create(  {
      name:req.body.name,
        location:req.body.location,
        email:req.body.email,
        password:secPassword
    })
    res.json({success:true})
  } catch (error) {
    console.log(error)
    res.json({success:false})
  }
   
})

// Login using
// http://localhost:5000/api/loginuser
Router.post("/loginuser",
async(req,res)=>{
   
  let email=req.body.email

   try {
    
       
       const userData= await User.findOne({email})
       if(!userData){
        return res.status(400).json({ errors: "try login with correct credentials" });
       }
       const pwdCompare = await bcrypt.compare(req.body.password,userData.password )
       if(!pwdCompare){
        return res.status(400).json({ errors: "try login with correct credentials" });
       }
    //    taking out id from database  for authorization comparision with jwt
const data={
    user:{
        id:userData.id
    }
}
// herw we have given algo data(id) and secret
const authToken =jwt.sign(data,jwtsecret)
 res.json({success:true,authToken:authToken})
      


       
   } catch (error) {
       console.log(error)
       res.json({success:false})
   }

})
module.exports=Router;

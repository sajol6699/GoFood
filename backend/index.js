const express =require("express")
const app= express()
const port =5000
const mongodb= require("./db")
const cors =require("cors")

app.use(cors())
mongodb()



// app.use express.json is a middlewear
app.use(express.json());
app.use('/api',require("../backend/Routes/CreateUser") )
app.use('/api',require("../backend/Routes/Displaydata") )




app.listen(port,()=>{
    console.log(`app listning to port ${port}`)
})

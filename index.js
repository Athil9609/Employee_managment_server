require("dotenv").config()
require("./Connection/db")
const routes=require("./Routes/Router")


const express=require("express")
const cors=require('cors')



const empserver=express()

empserver.use(cors())


empserver.use(express.json())

empserver.use(routes)


PORT=3000 || process.env.PORT
empserver.listen(PORT,()=>{
    console.log("Server running at:",PORT)
})
const mongoose=require("mongoose")


mongoose.connect(process.env.CONNECTION_STRING).then(res=>{
    console.log("Server connected at mongoDb")
}).catch(err=>{console.log(err)})
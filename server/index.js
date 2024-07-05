//"start":"nodemon index"  baar naar restart nahi karna padta 
const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const userRoutes=require("./routes/userRoutes")
const app=express();
require("dotenv").config();

app.use(cors()); //cross origin resource sharing (allow particular domaain and methods)(we send access control allow origin and method if true then)
app.use(express.json());
app.use("/api/auth",userRoutes);
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB connection successfull");
})
.catch((err)=>{
    console.log(err.message);
});
const server=app.listen(process.env.PORT,()=>{
    console.log(`server started at Port${process.env.PORT}`)
})
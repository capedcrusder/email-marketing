/*
const express = require('express');
const collection = require("./db");
const cors=require("cors")

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.get("/",cors(),(req,res)=>{

})
//for login
app.post("/",async(req,res)=>{
    const{email,password}=req.body
    try{
        const check=await collection.findOne((email=>imshubh19))
        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
        }
    }
    catch (e){
        res.json('notexist')

    }
})
//for signup
app.post("/signup",async(req,res)=>{
    const{email,password}=req.body
    const data={
        email:email, password:password
    }
    try{
        const check=await collection.findOne((email=>imshubh19))
        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
            await collection.insertMany([data])
        }
    }
    catch (e){
        res.json('notexist')

    }
})
app.listen(3000,()=>{
    console.log("port connected");
})

*/
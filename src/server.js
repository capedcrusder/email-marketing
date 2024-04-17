
const express = require('express');
 const collection = require("./db");
const jwt=require('jsonwebtoken');
const cors=require("cors")
const{JWT_SECRET} = require('./config');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())


//for login
app.post("/login",async(req,res)=>{
    const{email,password}=req.body
    try{
        const user=await collection.findOne({email: email})
        if(user && user.password===password){
            const token=jwt.sign({email:user.email},JWT_SECRET);
            res.json({token});
            
        }
        else{
            res.status(401).json({error: "Invalid email or password"});
    }
 } catch (error){
    res.status(500).json({ error: "Internal Server Error" });

    }
});


//for signup
app.post("/signup",async(req,res)=>{
    const{email,password}=req.body;
    try {
        const existingUser = await collection.findOne({ email: email });
        if (existingUser) {
            res.status(400).json({ error: "Email already exists" });
        } else {
            const newUser = await collection.create({ email, password });
            const token = jwt.sign({ email: newUser.email }, JWT_SECRET);
            res.json({ token });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});


//verifying JWT token
function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Unauthorized: Invalid token" });
        }
        req.email = decoded.email;
        next();
    });
}

    
app.listen(8050,()=>{
    console.log("port connected");
});


const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const PORT = 3000;

const user = [
    {name:"trevor",age:20,email:"trevor@gmail.com",},
    {name:"michael",age:22,email:"michael@gmail.com"},
    {name:"franklin",age:24,email:"franklin@gmail.com"},
];

app.get('/user',(req,res)=>{
    user.find()
        .then(allUser=>{
            if(!allUser) {
                return res.status(400).json({success:false,message:"User parameter cannot be empty"})    
            }
            res.status(201).json({success:true,message:"user found",allUser})
        })
        .catch(()=>res.status(500).json({success:false,message:"internal server error"}))
})

app.listen(PORT,()=>console.log(`server is running live on ${PORT}`));
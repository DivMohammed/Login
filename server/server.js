// CREATE SERVER
const express = require("express")
const app = express()
// const nodemailer = require("nodemailer")
const _PORT = process.env.PORT;
const cors = require("cors")
// Package activation
app.use(cors())
// error stuck
app.use(express.json())

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// CONNECT TO DB > DATA BASE
const username = process.env.USERNAME,
      password = process.env.PASSWORD,
      database = process.env.DATABASE;

// Call the library
const mongoose = require("mongoose")
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.fbd0ypi.mongodb.net/${database}?retryWrites=true&w=majority`);








// ADMIN MODEL
const AdminModel = require('./models/Admins')




app.post("/register", async (req , res)=>{
    const {username, password, email} = req.body

    const admin = await AdminModel.findOne({email})
    if(admin){
    //the (&&) mean if the condition true do and there is no else if
    return res.json({message: "email already have"})
    }
    if(!admin){
    const hashedPassword = bcrypt.hashSync(password, 10)

    //The number of cycles to store
    const newAdmin = new AdminModel({username, email, password: hashedPassword});

    await newAdmin.save()

    const token = jwt.sign({id:newAdmin._id}, process.env.SECRET)
    // Generates a token code specifically for the user
    return res.json({token, adminID: newAdmin._id})

    }
});




// app.post("/register", async (req , res)=>{
//     const {username, password, email} = req.body

//     const admin = await AdminModel.findOne({email})
//     if(admin){
//     //the (&&) mean if the condition true do and there is no else if
//     return res.json({message: "email already have"})
//     }
//     if(!admin){
//     const hashedPassword = bcrypt.hashSync(password, 10)

//     //The number of cycles to store
//     const newAdmin = new AdminModel({username, email, password: hashedPassword});

//     await newAdmin.save();

//     return res.json({message: "Admin created successfully"})
//     }
// });



app.post("/login", async (req, res)=>{
    const {email, password} = req.body


    const admin = await AdminModel.findOne({email})

    if(!admin){
    // !admin && res.json({message: "Email dose not exists!"})
    return res.json({message: "Email dose not exists!"})
    }

    if(admin){
    const isPasswordValid = await bcrypt.compare(password, admin.password);
     !isPasswordValid && res.json({message: "Username or Password is not correct"})

    if(isPasswordValid){
    var token = jwt.sign({id: admin._id}, process.env.SECRET)
    // Generates a token code specifically for the user
    return res.json({token, adminID: admin._id})
    }
    }
})


// app.post("/forgetPassword", async (req, res)=>{
//     const {email} = req.body
//     res.json(email)
// })




// Server running
// It is not important that the port number can be any number
// The second parameter is what to do after listening
app.listen(_PORT, ()=>{
    console.log("Server work!!")
})
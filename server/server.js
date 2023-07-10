// CREATE SERVER
const express = require("express")
const app = express()
const nodemailer = require("nodemailer")
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


function sendEmail({ recipient_email, OTP }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "home123.aavaa@gmail.com",
        pass: "mhmaadV13579",
      },
    });

    const mail_configs = {
      from: "home123.aavaa@gmail.com",
      to: recipient_email,
      subject: "KODING 101 PASSWORD RECOVERY",
      html: `<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - OTP Email Template</title>
  

</head>
<body>
<!-- partial:index.partial.html -->
<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Koding 101</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for choosing Koding 101. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
    <p style="font-size:0.9em;">Regards,<br />Koding 101</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>Koding 101 Inc</p>
      <p>1600 Amphitheatre Parkway</p>
      <p>California</p>
    </div>
  </div>
</div>
<!-- partial -->
  
</body>
</html>`,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occured` });
      }
      return resolve({ message: "Email sent succesfuly" });
    });
  });
}


app.post("/send_recovery_email", (req, res) => {
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});


// Server running
// It is not important that the port number can be any number
// The second parameter is what to do after listening
app.listen(_PORT, ()=>{
    console.log("Server work!!")
})
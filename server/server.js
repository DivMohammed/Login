// CREATE SERVER
const express = require("express")
const app = express()
const nodemailer = require("nodemailer");
const _PORT = process.env.PORT;
const cors = require("cors")
// Package activation
app.use(cors())
// error stuck
app.use(express.json())

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

app.use(express.static('public'))
// app.use('/uploads', express.static('uploads'))

const path = require('path')
const multer = require('multer')

const { sendTestEmail } = require("./models/mailer");

const fs = require('fs')








// CONNECT TO DB > DATA BASE
const username = process.env.USERNAME,
      password = process.env.PASSWORD,
      database = process.env.DATABASE;

// Call the library
const mongoose = require("mongoose")
///////
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
    const conn = await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.fbd0ypi.mongodb.net/${database}?retryWrites=true&w=majority`);
    console.log(`MongoDB Connecteed: ${conn.connection.host}`)
    } catch (error) {
    console.log(error)
    process.exit(1)
    }
}
///////
// mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.fbd0ypi.mongodb.net/${database}?retryWrites=true&w=majority`);








//////////////////





// app.post("/send_recovery_email", (req, res) => {
//     const a = {OTP, recipient_email} = req.body
//       // if(a){
//    return sendEmail(a)
//     .then((response) => res.json(response.message))
//     .catch((error) => res.status(500).json(error.message));
//     // sendEmail(req.body)
//     // .then((response) => res.send(response.message))
//     // .catch((error) => res.status(500).send(error.message));
//     // return res.json({a})
//     // }
// });



// const sendEmail = async ({recipient_email, OTP}) => {
//   return await new Promise((resolve, reject) => {
//     var transporter = nodemailer.createTransport({
//       // service: "gmail",
//       host: 'smtp.gmail.com',
//       secure: false, // use SSL
//       port: _PORT, // port for secure SMTP
//       auth: {
//         // type: "login", // default
//         user: process.env.EMAILMAILE,
//         pass: process.env.PASSWORDMAILE,
//       },
//       tls: {
//         rejectUnauthorized: false
//     }
//     });

//     const mail_configs = {
//       from:  process.env.EMAILMAILE,
//       to: recipient_email,
//       subject: "KODING 101 PASSWORD RECOVERY",
//       html: `<!DOCTYPE html>
// <html lang="en" >
// <head>
//   <meta charset="UTF-8">
//   <title>CodePen - OTP Email Template</title>
  

// </head>
// <body>
// <!-- partial:index.partial.html -->
// <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
//   <div style="margin:50px auto;width:70%;padding:20px 0">
//     <div style="border-bottom:1px solid #eee">
//       <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Koding 101</a>
//     </div>
//     <p style="font-size:1.1em">Hi,</p>
//     <p>Thank you for choosing Koding 101. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
//     <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
//     <p style="font-size:0.9em;">Regards,<br />Koding 101</p>
//     <hr style="border:none;border-top:1px solid #eee" />
//     <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
//       <p>Koding 101 Inc</p>
//       <p>1600 Amphitheatre Parkway</p>
//       <p>California</p>
//     </div>
//   </div>
// </div>
// <!-- partial -->
  
// </body>
// </html>`,
//     };
//       transporter.sendMail(mail_configs, function (error, info) {
//       if (error) {
//         console.log(error);
//         return reject({ message: `An error has occured` });
//       }
//       return resolve({ message: "Email sent succesfuly" });
//     });
//   });
// }




//////////////////












// ADMIN MODEL
const AdminModel = require('./models/Admins')
const UPimage = require('./models/image');
const UserGallery = require("./models/imagesGallery");

// const upload = require('./middleware/upload')




app.post("/register", async (req , res)=>{
    const {username, password, email, backgroundImage, avatar} = req.body

    const admin = await AdminModel.findOne({email})
    if(admin){
    //the (&&) mean if the condition true do and there is no else if
    return res.json({message: "email already have"})
    }
    if(!admin){
    const hashedPassword = bcrypt.hashSync(password, 10)

    //The number of cycles to store
    const newAdmin = new AdminModel({username, email, password: hashedPassword, backgroundImage, avatar});

    await newAdmin.save()

    const token = jwt.sign({id:newAdmin._id}, process.env.SECRET)
    // Generates a token code specifically for the user
    return res.json({token, adminID: newAdmin._id, message: "admin created"})

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






app.get("/users", async (req, res)=>{
    const users = await AdminModel.find();
    res.json(users)
})





app.post("/update", async (req, res)=>{
    const {username, email, id, image, avatar, backgroundImageOld} = await req.body

    const pathFile = `public/images/${backgroundImageOld}`

    if(backgroundImageOld !== "default.jpg"){
        await UPimage.deleteOne({image:backgroundImageOld})

        await fs.unlink(pathFile, (err) => {
            if (err) {
                console.error(err)
                return
            }
            })
    }

    await AdminModel.updateOne({_id:id},{username:username, email:email, backgroundImage:image, avatar:avatar})


    return res.json({username, email, id, image, avatar, backgroundImageOld})
})







app.post("/updateGallery", async (req, res)=>{
    const {id, GalleryImage} = await req.body

   await AdminModel.updateOne({_id:id},{GalleryImage:GalleryImage})

   return res.json({GalleryImage})
})










app.post("/check", async (req, res)=>{
    const {email} = await req.body

    const check = await AdminModel.findOne({email})
    if (check){
        return res.json("email Exist")
    }

    if (!check){
        return res.json("email does not Exist")
    }
})





const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    // fileFilter: function(req, file, callback){
    //     if(
    //         file.mimetype == 'image/png' ||
    //         file.mimetype == 'image/jpg'
    //     ){
    //         callback(null, true)
    //     }else{
    //         console.log('only jpg & png file supported!')
    //         callback(null, false)
    //     }
    // },
    // limits: {
    //     fileSize: 1024 * 1024 * 2
    // }
})

app.post('/upload', upload.single('file'), function (req, res) {
    // UPimage
    UPimage.create({image: req.file.filename})
    .then(result => res.json(result))
    .catch(err => console.log(err))
})


app.get('/getImage', async(req, res)=>{
    await UPimage.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
















// gallery



const storageGallery = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/imagesGallery')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const uploadGallery = multer({
    storage: storageGallery,
    // fileFilter: function(req, file, callback){
    //     if(
    //         file.mimetype == 'image/png' ||
    //         file.mimetype == 'image/jpg'
    //     ){
    //         callback(null, true)
    //     }else{
    //         console.log('only jpg & png file supported!')
    //         callback(null, false)
    //     }
    // },
    // limits: {
    //     fileSize: 1024 * 1024 * 2
    // }
})

app.post('/uploadGallery', uploadGallery.single('file'), function (req, res) {
    // UPimage
    UserGallery.create({image: req.file.filename})
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

app.get('/getImageGallery', async(req, res)=>{
    await UserGallery.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})






app.post('/deleteGallery', async(req, res)=>{ 
    const {id, i} = await req.body

    const pathFile = `public/imagesGallery/${i}`

    await AdminModel.updateOne({_id:id},{$pull:{GalleryImage:{$in:[i]}}})
    await UserGallery.deleteOne({image:i})

    await fs.unlink(pathFile, (err) => {
        if (err) {
            console.error(err)
            return
        }
        })
    return res.json('ok')

})









// const sendEmail = async ({recipient_email, OTP}) => {
//     return await new Promise((resolve, reject) => {
//       var transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: "dev.mohammed.omar0@gmail.com",
//           pass: "mhmaadV13579",
//         },
//       });
  
//       const mail_configs = {
//         from: "dev.mohammed.omar0@gmail.com",
//         to: recipient_email,
//         subject: "KODING 101 PASSWORD RECOVERY",
//         html: `<!DOCTYPE html>
//   <html lang="en" >
//   <head>
//     <meta charset="UTF-8">
//     <title>CodePen - OTP Email Template</title>
    
  
//   </head>
//   <body>
//   <!-- partial:index.partial.html -->
//   <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
//     <div style="margin:50px auto;width:70%;padding:20px 0">
//       <div style="border-bottom:1px solid #eee">
//         <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Koding 101</a>
//       </div>
//       <p style="font-size:1.1em">Hi,</p>
//       <p>Thank you for choosing Koding 101. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
//       <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
//       <p style="font-size:0.9em;">Regards,<br />Koding 101</p>
//       <hr style="border:none;border-top:1px solid #eee" />
//       <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
//         <p>Koding 101 Inc</p>
//         <p>1600 Amphitheatre Parkway</p>
//         <p>California</p>
//       </div>
//     </div>
//   </div>
//   <!-- partial -->
    
//   </body>
//   </html>`,
//       };
//         transporter.sendMail(mail_configs, function (error, info) {
//         if (error) {
//           console.log(error);
//           return reject({ message: `An error has occured` });
//         }
//         return resolve({ message: "Email sent succesfuly" });
//       });
//     });
//   }




//   app.post("/send_recovery_email", async (req, res) => {
//         // const a = {OTP, recipient_email} = req.body
//     await sendEmail(req.body)
//       .then((response) => res.send(response.message))
//       .catch((error) => res.status(500).send(error.message));
//   });



// app.post("/send_recovery_email", (req, res) => {
//   const {OTP, recipient_email} = req.body
  
// });




// app.get("/", (req, res) => {
//   res.send("Run /send-email to send test email");
// });

// /*POPULATE SENDER_EMAIL_ID*/
// const SENDER_EMAIL_ID = "dev.mohammed.omar0@gmail.com";

// app.get("/send-email", async (req, res) => {
//   /*POPULATE SENDER_EMAIL_ID*/
// const {OTP,recipient_email} = await req.body
// // const {recipient_email} = await req.body
// const SENDER_EMAIL_ID = recipient_email;
//   try {
//     if (SENDER_EMAIL_ID === "EMAIL_ID") {
//       throw new Error(
//         "Please update SENDER_EMAIL_ID with your email id in server.js"
//       );
//     }
//     const info = await sendTestEmail({OTP,SENDER_EMAIL_ID});
//     res.send(info);
//   } catch (error) {
//     res.send(error);
//   }
// });

// app.post("/send_recovery_email", (req, res) => {
//   const {OTP, recipient_email} = req.body

// });










app.post("/send_recovery_email", async (req, res) => {
  const {recipient_email, OTP} = await req.body
  try {
    if (recipient_email === "EMAIL_ID") {
      throw new Error(
        "Please update SENDER_EMAIL_ID with your email id in server.js"
      );
    }
    const info = await sendTestEmail(recipient_email,OTP);
    res.send(info);
  } catch (error) {
    res.send(error);
  }
});








app.post('/getId', async(req, res)=>{ 
    const {email, newPassword} = await req.body
    const check = await AdminModel.findOne({email})

    if (check){
        const newHashedPassword = bcrypt.hashSync(newPassword, 10)
        await AdminModel.updateOne({_id:check._id},{password:newHashedPassword})
        return res.json({message: "ok"})
    }

    if (!check){
        return res.json({message: "not"})
    }
})








// // Back up
// app.get("/", (req, res) => {
//   res.send("Run /send-email to send test email");
// });

// /*POPULATE SENDER_EMAIL_ID*/
// const SENDER_EMAIL_ID = "dev.mohammed.omar0@gmail.com";


// app.get("/send-email", async (_, res) => {
//   try {
//     if (SENDER_EMAIL_ID === "EMAIL_ID") {
//       throw new Error(
//         "Please update SENDER_EMAIL_ID with your email id in server.js"
//       );
//     }
//     const info = await sendTestEmail(SENDER_EMAIL_ID);
//     res.send(info);
//   } catch (error) {
//     res.send(error);
//   }
// });









// Server running
// It is not important that the port number can be any number
// The second parameter is what to do after listening
/////
connectDB().then(() => {
app.listen(_PORT, ()=>{
    console.log("Server work!!")
})
})
/////
// app.listen(_PORT, ()=>{
//     console.log("Server work!!")
// })
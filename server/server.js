// CREATE SERVER
const express = require("express")
const app = express()
const nodemailer = require("nodemailer");
const _PORT = process.env.PORT;
const cors = require("cors")
const bodyParser = require("body-parser");

// Package activation
app.use(cors())
// for IDK
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
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
const cloudinary = require("cloudinary").v2
const fse = require("fs-extra")

const uploadImage = require('./models/Cloudinary')







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
    const {username, email, id, urlbackgroundImag, urlavatar, avatar, imgUrl, IdImgbackground, IdImgAvatar} = await req.body

    // const pathFile = `public/images/${backgroundImageOld}`

    // if(backgroundImageOld !== "default.jpg"){
    //     await UPimage.deleteOne({image:backgroundImageOld})

    //     await fs.unlink(pathFile, (err) => {
    //         if (err) {
    //             console.error(err)
    //             return
    //         }
    //         })
    // }
    if(IdImgbackground){
    await cloudinary.uploader.destroy(IdImgbackground)
    }

    if(IdImgAvatar){
    await cloudinary.uploader.destroy(IdImgAvatar)
    }
    
    await AdminModel.updateOne({_id:id},{username:username, email:email, avatar:urlavatar? urlavatar : avatar, backgroundImage:urlbackgroundImag? urlbackgroundImag : imgUrl})

    return res.json({username, email, id, urlavatar, urlbackgroundImag, imgUrl, IdImgbackground, IdImgAvatar})
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
    const {id, i, IdImgGallery} = await req.body

    const pathFile = `public/imagesGallery/${i}`

    await AdminModel.updateOne({_id:id},{$pull:{GalleryImage:{$in:[i]}}})
    await UserGallery.deleteOne({image:i})

    await fs.unlink(pathFile, (err) => {
        if (err) {
            console.error(err)
            return
        }
        })



  // await fse.ensureFile("./data.txt")
  // const existingData = await fse.readFile("./data.txt", "utf8")
  // await fse.outputFile(
  //   "./data.txt",
  //   existingData
  //     .split("\n")
  //     .filter(id => id != req.body.id)
  //     .join("\n")
  // )

  // // actually delete the photo from cloudinary
    await cloudinary.uploader.destroy(IdImgGallery)

    return res.json({IdImgGallery})

})



// app.post("/delete-photo", async (req, res) => {
//   // do whatever you need to do in your database etc...
//   await fse.ensureFile("./data.txt")
//   const existingData = await fse.readFile("./data.txt", "utf8")
//   await fse.outputFile(
//     "./data.txt",
//     existingData
//       .split("\n")
//       .filter(id => id != req.body.id)
//       .join("\n")
//   )

//   // actually delete the photo from cloudinary
//   cloudinary.uploader.destroy(req.body.id)

//   res.redirect("/view-photos")
// })








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








const cloudinaryConfig = cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.CLOUDAPIKEY,
    api_secret: process.env.CLOUDINARYSECRET,
    secure: true
  })
  
//   function passwordProtected(req, res, next) {
//     res.set("WWW-Authenticate", "Basic realm='Cloudinary Front-end Upload'")
//     if (req.headers.authorization == "Basic YWRtaW46YWRtaW4=") {
//       next()
//     } else {
//       res.status(401).send("Try again")
//     }
//   }
  
//   app.use(passwordProtected)
  
//   app.get("/", (req, res) => {
//     res.send(`<!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>Document</title>
//     </head>
//     <body>
//       <h1>Welcome</h1>
  
//       <form id="upload-form">
//         <input id="file-field" type="file" />
//         <button>Upload</button>
//       </form>
  
//       <hr />
  
//       <a href="/view-photos">How would I use the public_id values that I store in my database?</a>
  
//       <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
//       <script src="/client-side.js"></script>
//     </body>
//   </html>`)
//   })
  
  app.get("/get-signature", async (req, res) => {
    const timestamp = await Math.round(new Date().getTime() / 1000)
    const signature = await cloudinary.utils.api_sign_request(
      {
        timestamp: timestamp
      },
      cloudinaryConfig.api_secret
    )
    res.json({ timestamp, signature })
  })



  
  app.post("/do-something-with-photo", async (req, res) => {
    // based on the public_id and the version that the (potentially malicious) user is submitting...
    // we can combine those values along with our SECRET key to see what we would expect the signature to be if it was innocent / valid / actually coming from Cloudinary
    const expectedSignature = cloudinary.utils.api_sign_request({ public_id: req.body.public_id, version: req.body.version }, cloudinaryConfig.api_secret)
  
    // We can trust the visitor's data if their signature is what we'd expect it to be...
    // Because without the SECRET key there's no way for someone to know what the signature should be...
    if (expectedSignature === req.body.signature) {
      // Do whatever you need to do with the public_id for the photo
      // Store it in a database or pass it to another service etc...
      await fse.ensureFile("./data.txt")
      const existingData = await fse.readFile("./data.txt", "utf8")
      await fse.outputFile("./data.txt", existingData + req.body.public_id + "\n")
    }
  })
  
  app.get("/view-photos", async (req, res) => {
    await fse.ensureFile("./data.txt")
    const existingData = await fse.readFile("./data.txt", "utf8")
    res.send(`<h1>Hello, here are a few photos...</h1>
    <ul>
    ${existingData
      .split("\n")
      .filter(item => item)
      .map(id => {
        return `<li><img src="https://res.cloudinary.com/${cloudinaryConfig.cloud_name}/image/upload/w_200,h_100,c_fill,q_100/${id}.jpg">
        <form action="delete-photo" method="POST">
          <input type="hidden" name="id" value="${id}" />
          <button>Delete</button>
        </form>
        </li>
        `
      })
      .join("")}
    </ul>
    <p><a href="/">Back to homepage</a></p>
    `)
  })
  
  // app.post("/delete-photo", async (req, res) => {
  //   // do whatever you need to do in your database etc...
  //   await fse.ensureFile("./data.txt")
  //   const existingData = await fse.readFile("./data.txt", "utf8")
  //   await fse.outputFile(
  //     "./data.txt",
  //     existingData
  //       .split("\n")
  //       .filter(id => id != req.body.id)
  //       .join("\n")
  //   )
  
  //   // actually delete the photo from cloudinary
  //   cloudinary.uploader.destroy(req.body.id)
  
  //   res.redirect("/view-photos")
  // })














  app.post("/uploadImage", (req, res) => {
    uploadImage(req.body.image)
      .then((url) => res.send(url))
      .catch((err) => res.status(500).send(err));
  });
  

















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
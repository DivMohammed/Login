// import Avatar from 'react-avatar';
import Avatar from 'react-avatar-edit'

import Axios from "axios"
import {useState, useEffect, useRef} from 'react';
import  {useCookies} from 'react-cookie'



import {Button, Container, Form} from 'react-bootstrap'
import Modal from 'react-modal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'


import './Dashboard.css'

import DEB from '../imgs/default.jpg';
import DEA from '../imgs/icondefult.jpg';
import UserAvatar from '../Components/UserAvatar/UserAvatar';
import FriendsList from '../Components/Friends/FriendsList';

import { IoSearch } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';


import imgPrev from '../imgs/imgPrev.png'

import arrow from '../imgs/arrow.png'










const Dashboard = () => {

  // const _PORT = 3002
// It's okay for these to be public on client-side JS
// You just don't ever want to leak your API Secret
const api_key = "111846971978579"
const cloud_name = "dz7qnyca4"

  const  [username, setUsername] = useState("")
  const  [email, setEmail] = useState("")
  const  [backgroundImage, setBackgroundImage] = useState("")
  const  [avatar, setAvatar] = useState(null)
  const  [file, setFile] = useState()
  // const  [image, setImage] = useState()
  const  [change, setchange] = useState(false)
  const  [friends, setFriends] = useState([])
  const  [search, setSearch] = useState()
  const  [changeSearch, setChangeSearch] = useState(false)

  const  [value, setValue] = useState(new Date())

  const  [Gallery, setGallery] = useState()
  const  [GalleryImage, setGalleryImage] = useState([])


  const  [backgroundImageOld, setbackgroundImageOld] = useState("")

  const  [counter, setCounter] = useState()


  const  [imgUrl, setimgUrl] = useState()

  const  [imgAvatarUrl, setimgAvatarUrl] = useState()
  const [urlavatar, setUrlavatar] = useState();










  // const [loading, setLoading] = useState(false);
  // const [url, setUrl] = useState("");

  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  // function uploadSingleImage(base64) {
  //   setLoading(true);
  //   Axios
  //     .post("http://localhost:5000/uploadImage", { image: base64 })
  //     .then((res) => {
  //       setUrl(res.data);
  //       alert("Image uploaded Succesfully");
  //     })
  //     .then(() => setLoading(false))
  //     .catch(console.log);
  // }

  // const uploadImage = async (event) => {
  //   const files = event.target.files;
  //   console.log(files.length);

  //   if (files.length === 1) {
  //     const base64 = await convertBase64(files[0]);
  //     uploadSingleImage(base64);
  //     return;
  //   }
  // }














  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  // const uploadSingleImage = async () => {
  //  await Axios.post("http://localhost:3002/uploadImage", { image: imgAvatarUrl })
  //   .then((res) => {
  //       setUrlavatar(res.data);
  //       console.log(res.data)
  //     })
  //     .catch(console.log);
  // }

  // const uploadImage = async () => {
  //   // e.preventDefault()
  //   // const files = event.target.files;
  //   // console.log(files.length);

  //   // if (files.length === 1) {
  //     const base64 = await convertBase64(imgAvatar);
  //     uploadSingleImage(base64);
  //     return;
  //   // }
  // }


















////////////////////////


// const handleImage = (e) =>{
//   const file = e.target.files[0];
//   setFile(file);
//   setFileToBase(file);
//   console.log(file);
// }

// const setFileToBase = (file) =>{
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onloadend = () =>{
//       setimgUrl(reader.result);
//       console.log(imgUrl)
//   }
// }
















// document.querySelector("#upload-form").addEventListener("submit", async function (e) {
//   e.preventDefault()

//   // get signature. In reality you could store this in localstorage or some other cache mechanism, it's good for 1 hour
//   const signatureResponse = await Axios.get("/get-signature")

//   const data = new FormData()
//   data.append("file", document.querySelector("#file-field").files[0])
//   data.append("api_key", api_key)
//   data.append("signature", signatureResponse.data.signature)
//   data.append("timestamp", signatureResponse.data.timestamp)

//   const cloudinaryResponse = await Axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`, data, {
//     headers: { "Content-Type": "multipart/form-data" },
//     onUploadProgress: function (e) {
//       console.log(e.loaded / e.total)
//     }
//   })
//   console.log(cloudinaryResponse.data)

//   // send the image info back to our server
//   const photoData = {
//     public_id: cloudinaryResponse.data.public_id,
//     version: cloudinaryResponse.data.version,
//     signature: cloudinaryResponse.data.signature
//   }

//   Axios.post("/do-something-with-photo", photoData)
// })



////////////////////////





// document.querySelector("#upload-form").addEventListener("submit", async function (e) {
//   e.preventDefault()

  // // get signature. In reality you could store this in localstorage or some other cache mechanism, it's good for 1 hour
  // const signatureResponse = await Axios.get("/get-signature")

  // const data = new FormData()
  // data.append("file", document.querySelector("#file-field").files[0])
  // data.append("api_key", api_key)
  // data.append("signature", signatureResponse.data.signature)
  // data.append("timestamp", signatureResponse.data.timestamp)

  // const cloudinaryResponse = await Axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`, data, {
  //   headers: { "Content-Type": "multipart/form-data" },
  //   onUploadProgress: function (e) {
  //     console.log(e.loaded / e.total)
  //   }
  // })
  // console.log(cloudinaryResponse.data)

  // // send the image info back to our server
  // const photoData = {
  //   public_id: cloudinaryResponse.data.public_id,
  //   version: cloudinaryResponse.data.version,
  //   signature: cloudinaryResponse.data.signature
  // }

  // Axios.post("/do-something-with-photo", photoData)
// })





// ///////////////////////////////////////////









const images = [...document.getElementsByClassName('photo')];

// popup

const popup = document.querySelector('.popup');
// const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');



let index = counter; // will track our current image;

    // const imagesFun = () => {
      images.forEach((item,i) => {
        item.addEventListener('click', () => {
          // console.log(i)
          setCounter(i)
        })
      })
    // }

        const imagesFun = () => {
          images.forEach((item,i) => {
            item.addEventListener('click', () => {
              updateImage(i);
              // console.log(i)
            })
          })
          popup.classList.toggle('active');
        }



const updateImage = (i) => {
    let path = `${GalleryImage[i]}`;
    largeImage.src = path;
    // imageName.innerHTML = path;
    // console.log(i)
    imageIndex.innerHTML = `0${i+1}`;
    index = i;
    console.log(index)
    console.log(counter)
}


const closeBtnFun = () => {
  popup.classList.toggle('active');
}


const leftArrowFun = () => {
  if(index > 0){
    updateImage(index - 1);
}
}

const rightArrowFun = () => {
  if(index < GalleryImage.length - 1){
    updateImage(index + 1);
}
}











// /////////////////////////////////////////////



  const fileInput = useRef();
  const fileInputGallery = useRef();
  const divC = useRef();


  const [ , setCookies] = useCookies(["accsee_token"]);


  const customStyles = {
    content: {
    top: '70%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '0',
    },
  };

  const  [modelIsOpen, setIsOpen] = useState(false)

  function openModel(i){
    change && setIsOpen(true) 
    console.log(i)
    // const url = URL.createObjectURL(i)

    // const imgg = new Image();
    // imgg.src = url;

    // console.log(imgg)
    // setimgAvatar(i)

  }

  function closeModel(i){
    setIsOpen(false)
    console.log(i)
  }

  const onCrop = (i) => {
    setAvatar(i)
    console.log(i)
    setimgAvatarUrl(i)
    
    // const url = URL.createObjectURL(i)

    // const imgg = new Image();
    // imgg.src = url;

    // console.log(url)
  }

  const onClose = () => {
    closeModel();
  }

  useEffect(() => {
    // http://localhost:3002
    // https://busy-gold-snail-tux.cyclic.cloud/users
    // `${window.location.protocol}//${window.location.hostname}:${_PORT}/users`

    const respawn = Axios.get('http://localhost:3002/users')
    if(respawn){
     respawn.then((res) => (
      res.data.filter((user) => user._id === window.localStorage.getItem("userID") &&
      setUsername(user.username) + setEmail(user.email) + setBackgroundImage(user.backgroundImage) + setAvatar(user.avatar) + setGalleryImage(user.GalleryImage) + setbackgroundImageOld(user.backgroundImage) + setimgUrl(user.backgroundImage)
      )))
    }else{
      console.log("error")
    }
  
    },[])


console.log(window.location.hostname)

console.log(window.location.protocol)
console.log(`${window.location.protocol}//${window.location.hostname}:${import.meta.env.VITE_PORT_ONE}/users`)
console.log(import.meta.env.VITE_PORT_ONE)


    const removeItem = () =>{
      setCookies("access_token", "")
      window.localStorage.removeItem("userID")
      window.location.reload(false)
      window.location.replace(window.location.origin)
      }




      // const handelUpload = async (e) =>{
      //   e.preventDefault()
      //   const formdata = new FormData()
      //   formdata.append("file", file);
      //   Axios.post(`https://busy-gold-snail-tux.cyclic.cloud/upload`, formdata)
      //   .then(res => setBackgroundImage(res.data.image))
      //   .catch(err => console.log(err))
      // }







      const handleImage = (e) =>{
        const file = e.target.files[0];
        setFile(file);
        // setFileToBase(file);
        // console.log(file);
      }


      
      // const setFileToBase = (file) =>{
      //   if(file){
      //   const reader = new FileReader();
      //   reader.readAsDataURL(file);
      //   reader.onloadend = () =>{
      //       setimgUrl(reader.result);
      //   }
      // }
      // }
      // console.log(`this${imgUrl}`)






      const handelUploadGallery = async(e) =>{
        e.preventDefault()

        fileInputGallery.current.click()
      }

// https://busy-gold-snail-tux.cyclic.cloud
    // useEffect(()=>{
    //    async function GalleryFun(){
    //     if(Gallery){

    //       const formdata = new FormData()
    //       formdata.append("file", Gallery);
    //      await Axios.post(`http:/localhost:3002/uploadGallery`, formdata)
    //       .then(res => GalleryImage.push(res.data.image))
    //       .catch(err => console.log(err))
    //       // setGalleryImage(res.data.image)
  
    //       const id = window.localStorage.getItem("userID")
    //      await Axios.post(`http:/localhost:3002/updateGallery`,{id, GalleryImage})
    //       .then(res => console.log(res) + window.location.reload())
    //       .catch(err => console.log(err))
    //       // window.location.reload()
    //       }
    // }
    // GalleryFun()
    // },[Gallery])

      // console.log(Gallery)

const  [galleryId , setGalleryId] = useState()

    useEffect(()=>{
    const GalleryFun = async ()=>{
      if(Gallery){
        // get signature. In reality you could store this in localstorage or some other cache mechanism, it's good for 1 hour
        const signatureResponse = await Axios.get("http://localhost:3002/get-signature")
        
        // document.querySelector("#file-field").files[0]
        const data = new FormData()
        data.append("file", Gallery)
        data.append("api_key", api_key)
        data.append("signature", signatureResponse.data.signature)
        data.append("timestamp", signatureResponse.data.timestamp)
        
        console.log(data)
        const cloudinaryResponse = await Axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`, data, {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: function (e) {
            console.log(e.loaded / e.total)
          }
        })
        console.log(cloudinaryResponse.data.url)
        setGalleryId(cloudinaryResponse.data.public_id)
        await GalleryImage.push(cloudinaryResponse.data.url)

      
        // send the image info back to our server
        const photoData = {
          public_id: cloudinaryResponse.data.public_id,
          version: cloudinaryResponse.data.version,
          signature: cloudinaryResponse.data.signature
        }
      
        Axios.post("http://localhost:3002/do-something-with-photo", photoData)




        // const formdata = new FormData()
        //   formdata.append("file", Gallery);
        //  await Axios.post(`http:/localhost:3002/uploadGallery`, formdata)
        //   .then(res => GalleryImage.push(res.data.image))
        //   .catch(err => console.log(err))
        //   setGalleryImage(res.data.image)
  
          const id = window.localStorage.getItem("userID")
         await Axios.post('http://localhost:3002/updateGallery',{id, GalleryImage})
          .then(res => console.log(res))
          .catch(err => console.log(err))
          window.location.reload()
        }
      }
    GalleryFun()
    },[Gallery])





      console.log(galleryId)

      console.log(GalleryImage)


// setTimeout(() => {
//   console.log(GalleryImage)
// }, 9000);







const handleClick = async (i) =>{
  
  const alldiv = document.getElementsByClassName('photo')
  
for (let index = 0; index < alldiv.length; index++) {
  if(i === alldiv[i].id){

    const IdImgGallery = i.match("([^\\/]+)(?=\\.\\w+$)")[0];

  
    const id = window.localStorage.getItem("userID")
         await Axios.post(`http://localhost:3002/deleteGallery`,{id, i, IdImgGallery})
          .then(res => console.log(res))
          .catch(err => console.log(err))
    }
  
    alldiv[i].remove()
    window.location.reload()
}

}

// const handleClickk = (i) =>{
//   // e.preventDefault()
//   // console.log(divC.current)
//   console.log(i)

// }








    const handelUpdate = () =>{
        setchange(prev => !prev) + setFile(null)
      }



  // const  [urlbackgroundImag, setUrlbackgroundImag] = useState()


  // const usefile = async () => {
  //   // get signature. In reality you could store this in localstorage or some other cache mechanism, it's good for 1 hour
  // const signatureResponse = await Axios.get("http://localhost:3002/get-signature")
  
  // // document.querySelector("#file-field").files[0]
  // const data = new FormData()
  // data.append("file", file)
  // data.append("api_key", api_key)
  // data.append("signature", signatureResponse.data.signature)
  // data.append("timestamp", signatureResponse.data.timestamp)
  
  // console.log(data)
  // const cloudinaryResponse = await Axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`, data, {
  //   headers: { "Content-Type": "multipart/form-data" },
  //   onUploadProgress: function (e) {
  //     console.log(e.loaded / e.total)
  //   }
  // })
  // console.log(cloudinaryResponse.data.url)

  // // send the image info back to our server
  // const photoData = {
  //   public_id: cloudinaryResponse.data.public_id,
  //   version: cloudinaryResponse.data.version,
  //   signature: cloudinaryResponse.data.signature
  // }

  // Axios.post("http://localhost:3002/do-something-with-photo", photoData)
  
  // // http://localhost:3002
  // // const urlbackgroundImag = cloudinaryResponse.data.url;
  // setUrlbackgroundImag(cloudinaryResponse.data.url)
  // setimgUrl(urlbackgroundImag);
  //     }



  const handelSubmit = async(e) => { 
    e.preventDefault()

    if(file){
  // get signature. In reality you could store this in localstorage or some other cache mechanism, it's good for 1 hour
  const signatureResponse = await Axios.get("http://localhost:3002/get-signature")
  
  // document.querySelector("#file-field").files[0]
  const data = new FormData()
  data.append("file", file)
  data.append("api_key", api_key)
  data.append("signature", signatureResponse.data.signature)
  data.append("timestamp", signatureResponse.data.timestamp)
  
  console.log(data)
  const cloudinaryResponse = await Axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`, data, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: function (e) {
      console.log(e.loaded / e.total)
    }
  })
  console.log(cloudinaryResponse.data.url)

  // send the image info back to our server
  const photoData = {
    public_id: cloudinaryResponse.data.public_id,
    version: cloudinaryResponse.data.version,
    signature: cloudinaryResponse.data.signature
  }

  Axios.post("http://localhost:3002/do-something-with-photo", photoData)
  
  var urlbackgroundImag = cloudinaryResponse.data.url;
  setimgUrl(urlbackgroundImag);
  // var IdbackgroundImag = cloudinaryResponse.data.public_id;
  // if(file){
  //   usefile()
  // }
  var IdImgbackground = imgUrl.match("([^\\/]+)(?=\\.\\w+$)")[0];
  }

  if(imgAvatarUrl){
  await Axios.post("http://localhost:3002/uploadImage", { image: imgAvatarUrl })
  .then((res) => {
      setUrlavatar(res.data);
      console.log(res.data)
    })
    .catch(console.log);

    var IdImgAvatar = imgUrl.match("([^\\/]+)(?=\\.\\w+$)")[0];
  //  await uploadSingleImage()
  }
        const id = window.localStorage.getItem("userID")
        await Axios.post(`http://localhost:3002/update`,{username, email, id, urlbackgroundImag, urlavatar, avatar, imgUrl, IdImgbackground, IdImgAvatar})
        .then(res => console.log(res))
        .catch(err => console.log(err))
      }



console.log(`****************${urlavatar}`)
console.log(`++++++++++++++++${imgAvatarUrl}`)




    useEffect(() => {
      const jdkn = async() => { 
      await Axios.post(`http://localhost:3002/check`,{email})
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  jdkn()
},[email])












    // useEffect (() => {

    //   const respawn = Axios.get(`https://busy-gold-snail-tux.cyclic.cloud/getImage`)
    //   if(respawn){
    //     respawn.then(res => res.data.filter((img) => img.image === backgroundImage ? setImage(img.image) : null))
    //   .catch(err => console.log(err))
    //   } 
    
    //   },[backgroundImage])









      useEffect (() => {

        const respawn = Axios.get(`http://localhost:3002/getImageGallery`)
        if(respawn){
          respawn.then(res => res.data.filter((img) => img.image === GalleryImage ? setGalleryImage(img.image) : null))
        .catch(err => console.log(err))
        } 
      
        },[GalleryImage])
        // setGalleryImage(img.image)



        useEffect(() => {
            async function getData(){
            const respawn = await Axios.get(`http://localhost:3002/users`)
            if(respawn){
                setFriends(respawn.data)
              }
            }
           getData()
        },[])



        const members = friends.map(function(member){
          return <FriendsList
          key = {member._id}
          userId = {member._id}
          username = {member.username}
          email = {member.email}
          backgroundImage = {member.backgroundImage}
          avatar = {member.avatar}
          />
        })

console.log(avatar)
console.log(imgUrl)




  return (
    <>
    <div className="cardup">

    <div className="card__img__UP">{imgUrl ? <img src={imgUrl} alt=''/> : <img src={DEB} alt=''/>}

    {/* <img src={'https://busy-gold-snail-tux.cyclic.cloud/Images/'+image} alt=''/> */}
    {change === true &&  <div className='filterBack'></div>}

    <div className="card__avatar" onClick={openModel}>
    <UserAvatar/>
    {change === true &&  <img className='pri' src={avatar ? avatar : DEA}/>}

    {change === true &&  <div className='filterFront'></div>}
    </div>

  <Modal
    isOpen={modelIsOpen}
    onRequestClose={closeModel}
    style={customStyles}
    contentLabel="Example Model"
    ariaHideApp={false}
    >
      <div>
        <Avatar
          width={300}
          height={300}
          onCrop={onCrop}
          onClose={onClose}
          label="أختر ملفا"
          // onBeforeFileLoad={onBeforeFileLoad}
        />
      </div>
  </Modal>
  
    <div className="card__img__childe">
      <input ref={fileInput} style={{display: 'none'}} type="file" onChange={(e) => handleImage(e)} />
      {/* <input ref={fileInput} style={{display: 'none'}} type="file" onChange={e => setFile(e.target.files[0])} /> */}
      {/* {change === true && file ? <button className='handelUpload' onClick={handelUpload}>Upload</button> : null} */}
      {change === true && <button onClick={e => e.preventDefault() + fileInput.current.click()}>chose</button>}
    </div>
    </div>
    <Form>
    <Container>
      <button type="button" onClick={handelUpdate} className="btn btn-primary btn-sm change__img">{change === true? "الغاء التعديل" : "تعديل"}</button>
      {change === true && <button type="submit" onClick={handelSubmit} className="btn btn-primary btn-sm">حفظ التعديل</button>}
      {/* <button type='button' onClick={uploadSingleImage}>up</button> */}

      <div className="card__title__up">
      <p className="card__title">الأسم:</p>
      <span style={{display: change === true? "none" : "block"}}>{username}</span>
      {/* <input style={{display: change === true? "block" : "none"}} value={username} onChange={e => setUsername(e.target.value)}/> */}
      <Form.Control type="text"
              required
              value={username}
              onChange={e => setUsername(e.target.value)}
              style={{display: change === true? "block" : "none", width:"260px"}}
      />

      <p className="card__email">البريد الألكتروني:</p>
      <span style={{display: change === true? "none" : "block"}}>{email}</span>
      {/* <input style={{display: change === true? "block" : "none"}} value={email} onChange={e => setEmail(e.target.value)} /> */}
      <Form.Control type="email" 
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{display: change === true? "block" : "none", width:"260px"}}
      />
      </div>


      <div className='hold_component' style={{display:'flex'}}>
        <div className='hold_friends'>
          <div className='hold_heading'>
          {changeSearch ? "" : <h5>Friends</h5>}
          {!changeSearch ? <IoSearch className='search_icon' onClick={() => {setChangeSearch(prev => !prev)}}/> : <AiOutlineClose className='search_icon' onClick={() => {setChangeSearch(prev => !prev) + setSearch('')}}/>}
          {changeSearch && <input className='search' autoFocus placeholder='بحث' onChange={(e)=> setSearch(e.target.value)}/>}

          </div>
        {members.filter((item) => {return search === '' ? '' : item.props.username.includes(search) && item.key !== window.localStorage.getItem("userID")})}
        </div>

        <div>
          <Calendar
            value={value}
            onChange={setValue}
            calendarType='gregory'
            defaultView='month'
          />
        </div>
      </div>


      <div className='hold_Examples'>
    <div className='hold_title'>
        <img src={imgPrev} alt="" className='change'/>
        <h1>أعمالي</h1>
    </div>
    </div>



      <div className='Photo_gallery'>
      {/* <img src={'http://localhost:3002/ImagesGallery/'+GalleryImage} alt=''/>  */}

          {/* <div className="photo" style={{backgroundImage:`url('${prev}')`, backgroundSize: "cover", backgroundPosition:"center"}}></div>
          <div className="photo" style={{backgroundImage:`url('${prev}')`, backgroundSize: "cover", backgroundPosition:"center"}}></div>
          <div className="photo" style={{backgroundImage:`url('${prev}')`, backgroundSize: "cover", backgroundPosition:"center"}}></div> */}

{
    // return <><div key={i} id={i} ref={divC} className="photo" onClick={() => imagesFun()} style={{backgroundImage:`url(${window.location.protocol}//${window.location.hostname}:${_PORT}/ImagesGallery/${[i]})`, backgroundSize: "cover", backgroundPosition:"center"}}>


GalleryImage.map((i,index)=>{
  return <div key={index} id={i} ref={divC} className="photo" onClick={() => imagesFun()} style={{backgroundImage:`url(${[i]})`, backgroundSize: "cover", backgroundPosition:"center"}}>
      <button key={index}  type="button" className='deleteImg' onClick={() => handleClick(i)}>x</button>
  </div>
})
}




{/* onClick={() => imagesFun()} */}



          {/* <div className="photo" style={{backgroundImage:`url('${'http://localhost:3002/ImagesGallery/'+GalleryImage[0]}')`, backgroundSize: "cover", backgroundPosition:"center"}}></div>
          <div className="photo" style={{backgroundImage:`url('${'http://localhost:3002/ImagesGallery/'+GalleryImage[1]}')`, backgroundSize: "cover", backgroundPosition:"center"}}></div> */}


          <input ref={fileInputGallery} style={{display: 'none'}} type="file" onChange={e => setGallery(e.target.files[0])} />
          {<button onClick={handelUploadGallery} className='addImg'>+</button>}
          {/* {<button onClick={e => e.preventDefault() + fileInputGallery.current.click()} className='addImg'>+</button>} */}

      </div>



      <div className="card__wrapper">
      <Button className='btn__logut' variant="danger" onClick={removeItem}>تسجيل خروج</Button>
      </div>









      {/* <!-- popup --> */}
    <div className="popup">
        {/* <!-- top bar --> */}
        <div className="top-bar">
            <p className="image-name">Gallery</p>
            <span className="close-btn" onClick={closeBtnFun}></span>
        </div>
        {/* <!-- arrows --> */}
        <button type='button' className="arrow-btn left-arrow" onClick={leftArrowFun}><img src={arrow} alt=""/></button>
        <button type='button' className="arrow-btn right-arrow" onClick={rightArrowFun}><img src={arrow} alt=""/></button>
        {/* <!-- image --> */}
        <img src={`${GalleryImage[counter]}`} className="large-image" alt=""/>
        {/* <!-- image-index --> */}
        <h1 className="index">{`0${counter + 1}`}</h1>
    </div>

    {/* <UploadImage/> */}
    </Container>
    </Form>
    </div>
    
    </>
  )
}


export default Dashboard
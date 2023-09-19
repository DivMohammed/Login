import './Profile.css'



// import { RecoveryContext } from "../../App"
import {useEffect, useState} from 'react';

import imgPrev from '../../imgs/imgPrev.png'

import {Container, Form} from 'react-bootstrap'
import DEB from '../../imgs/default.jpg';
import DEA from '../../imgs/icondefult.jpg';
import Axios from 'axios';

import arrow from '../../imgs/arrow.png'



const Profile = () => {
    // const {user} = useContext(RecoveryContext);

    const  [username, setUsername] = useState("")
    const  [email, setEmail] = useState("")
    const  [backgroundImage, setBackgroundImage] = useState("")
    const  [avatar, setAvatar] = useState("")
    const  [GalleryImage, setGalleryImage] = useState([])


    const  [counter, setCounter] = useState()

    const images = [...document.getElementsByClassName('photo')];    
    const popup = document.querySelector('.popup');
    const largeImage = document.querySelector('.large-image');
    const imageIndex = document.querySelector('.index');

    const _PORT = 3002



    useEffect(() => {

        const respawn = Axios.get(`${window.location.protocol}//${window.location.hostname}:${_PORT}/users`)
        if(respawn){
            respawn.then((res) => (
            res.data.filter((user) => `${window.location.origin}/Profile/${user._id}` === window.location.href &&
            setUsername(user.username) + setEmail(user.email) + setBackgroundImage(user.backgroundImage) + setAvatar(user.avatar) + setGalleryImage(user.GalleryImage)
            )))
        }else{
            console.log("error")
        }
      
        },[])


        // {console.log(GalleryImage)}

        
        
        
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
            let path = `${window.location.protocol}//${window.location.hostname}:${_PORT}/ImagesGallery/${GalleryImage[i]}`;
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
        



  return (
    <>
    <div className="cardup">
    <div className="card__img__UP">{backgroundImage ? <img src={`${window.location.protocol}//${window.location.hostname}:${_PORT}/Images/`+backgroundImage} alt=''/> : <img src={DEB} alt=''/>}

    <div className="card__avatar">
    {avatar? <img src={avatar} alt={DEA} /> : <img src={DEA} />}
    </div>


</div>
<Form>
<Container>
    <div className="card__title__upp">
    <p className="card__title">الأسم:</p>
    <span>{username}</span>

    <p className="card__email">البريد الألكتروني:</p>
    <span >{email}</span>
    </div>


        <div className='hold_Examples'>
        <div className='hold_title'>
            <img src={imgPrev} alt="" className='change'/>
            <h1>أعمالي</h1>
        </div>
        </div>


        <div className='Photo_gallery'>
        {GalleryImage.length <= 0 ? <p className='message_Photo_gallery'>لا توجد أعمال</p> : ""}
        {
        GalleryImage.map(i=>{
        return <div key={i} id={i} className="photo" onClick={() => imagesFun()} style={{backgroundImage:`url(${window.location.protocol}//${window.location.hostname}:${_PORT}/ImagesGallery/${[i]})`, backgroundSize: "cover", backgroundPosition:"center"}}>
                  {/* return <div key={i} id={i} className="photo" onClick={() => imagesFun()} style={{backgroundImage:`url('${'http://localhost:3002/ImagesGallery/'+[i]}')`, backgroundSize: "cover", backgroundPosition:"center"}}> */}
        </div>
        })
        }
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
        <img src={`${window.location.protocol}//${window.location.hostname}:${_PORT}/ImagesGallery/${GalleryImage[counter]}`} className="large-image" alt=""/>
        {/* <!-- image-index --> */}
        <h1 className="index">{`0${counter + 1}`}</h1>
    </div>

        </Container>
        </Form>
        </div>
    </>
  )
}

export default Profile
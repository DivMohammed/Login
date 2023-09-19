// import Avatar from 'react-avatar';
import Axios from "axios"
import {useState, useEffect, useContext} from 'react';
import './Cardinfo.css'
// import Dashboard from '../Dashboard/Dashboard';
// export const info = createContext();

// import { info } from '../App';
import UserAvatar from '../Components/UserAvatar/UserAvatar';
import { Link } from "react-router-dom";
import imgPrev from '../imgs/imgPrev.png'
import { info } from "../sections/Header/Header";

const Cardinfo = () => {

  const {setIsNavActive, setIsIconActive} = useContext(info)

  const _PORT = 3002


  const  [username, setUsername] = useState("")
  const  [email, setEmail] = useState("")
  const  [backgroundImage, setBackgroundImage] = useState("")
  const  [ID, setID] = useState("")

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };


  useEffect(() => {

  const respawn = Axios.get(`${window.location.protocol}//${window.location.hostname}:${_PORT}/users`)
  if(respawn){
   respawn.then((res) => (
    res.data.filter((str) => str._id === window.localStorage.getItem("userID")?
    setUsername(str.username) + setEmail(str.email) + setID(str._id) + setBackgroundImage(str.backgroundImage)
    :
    null
    )))
  }else{
    console.log("gg")
  }

  },[])



return (
  // `${window.location.protocol}//${window.location.hostname}:${_PORT}
  <>
  {/* {console.log(avatar)} */}
   {/* githubHandle="DivMohammed" */}
{/* <info.Provider value={{username, email, setUsername, setEmail}}> */}
      <div className='cardInfoUp' onClick={handleOpen} style={{backgroundImage: `url('${window.location.protocol}//${window.location.hostname}:${_PORT}/Images/${backgroundImage}')` , backgroundSize: "cover", backgroundPosition:"center"}}>
        {/* <Avatar onClick={handleOpen} src={avatar} size={50} round="50px" /> */}
        <UserAvatar />
        {open &&
        <div className='cardInfo'>
        <Link onClick={()=>{(setIsIconActive(current => !current)) + (setIsNavActive(current => !current))}} style={{backgroundImage: `url('${imgPrev}')`}} to={`/dashboard/${ID}`}><button type="button" className="btn btn-primary btn-sm">الملف الشخصي</button></Link>
        </div> 
      }
      </div>
{/* </info.Provider> */}
</>
)
}


export default Cardinfo
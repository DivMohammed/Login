import {useRef , useState} from 'react';

import './Header.css'

import { HiBars3 } from 'react-icons/hi2';
import { AiOutlineClose } from 'react-icons/ai';
import  {useCookies} from 'react-cookie'

import {Button} from 'react-bootstrap'



const Header = () => {
    const [isIconActive, setIsIconActive] = useState();
    const [isNavActive, setIsNavActive] = useState();

    const [ , setCookies] = useCookies(["accsee_token"])
    
    const icon = useRef().current
    const nav = useRef().current

    const removeItem = () =>{
        //meaning make it empty
        setCookies("access_token", "")
        window.localStorage.removeItem("userID")
        window.location.reload(false)
        }

console.log(icon)
  return (
    
    <header>
    <div className="container">
        <a href="/" ><img className="logo" src="/src/imgs/logo.png" alt=""/></a>
            <ul  className={`main-nav ${isNavActive? "active" : "" }`} ref={nav}>
            <li><a href="#home">الرئيسية</a></li>
            <li><a href="#about">من نحن</a></li>
            <li><a href="#pricing">خدماتنا</a></li>
            <li><a href="#pricing">أنضم ألينا</a></li>
            <li><a href="#contact">تواصل معنا</a></li>
            {`${window.location.origin}/` === window.location.href && !window.localStorage.getItem('userID')?
                <a href="/register"><button className="button-36" role="button">تسجيل دخول</button></a>
                :
                ""
            }
            {window.localStorage.getItem('userID')?
                <Button variant = "danger" onClick={removeItem}>LogOut</Button>
                :
                ""
            }
            </ul>
            <div className="nav">
                <i onClick={()=>{(setIsIconActive(current => !current)) + (setIsNavActive(current => !current))}} className={`fa-solid fa-bars ${isIconActive ? "fa-times " + "setP": "" }`} ref={icon}> {isIconActive? <AiOutlineClose/> :<HiBars3/> }</i>
            </div> 
    </div>
    </header>

)
}




export default Header
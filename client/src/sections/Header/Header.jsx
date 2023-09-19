import {useRef , useState, createContext} from 'react';

import './Header.css'

import { HiBars3 } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import  {useCookies} from 'react-cookie'

import {Container} from 'react-bootstrap'
import Cardinfo from '../../Cardinfo/Cardinfo';

import imgPrev from '../../imgs/imgPrev.png'
import { Link } from 'react-router-dom';


export const info = createContext();


const Header = () => {

    const [isIconActive, setIsIconActive] = useState();
    const [isNavActive, setIsNavActive] = useState();

    const [ , setCookies] = useCookies(["accsee_token"])
    
    const icon = useRef().current
    const nav = useRef().current

    // console.log(window.location.href)
    // className={window.location.href === window.origin+'/' && 'active'}

    return (
    <>
    <header>
        <Container> 
        <Link to={window.origin} aria-label="to home"><img className="logo" src="/src/imgs/logo.png" alt="" /></Link>
            <ul className={`main-nav ${isNavActive? "active" : "" }`} ref={nav}>
            <li className={window.location.href === window.origin+'/' ? 'active' : ""} onClick={()=>{(setIsIconActive(current => !current)) + (setIsNavActive(current => !current))}} style={{backgroundImage: `url('${imgPrev}')`}}><Link to={window.origin}>الرئيسية</Link></li>
            <li className={window.location.href === window.origin+'/WhoAreWe' ? 'active' : ""} onClick={()=>{(setIsIconActive(current => !current)) + (setIsNavActive(current => !current))}} style={{backgroundImage: `url('${imgPrev}')`}}><Link to="/WhoAreWe">من نحن</Link></li>
            <li className={window.location.href === window.origin+'/OurServices' ? 'active' : ""} onClick={()=>{(setIsIconActive(current => !current)) + (setIsNavActive(current => !current))}} style={{backgroundImage: `url('${imgPrev}')`}}><Link to='/OurServices'>خدماتنا</Link></li>
            <li className={window.location.href === window.origin+'/joinUs' ? 'active' : ""} onClick={()=>{(setIsIconActive(current => !current)) + (setIsNavActive(current => !current))}} style={{backgroundImage: `url('${imgPrev}')`}}><Link to="/joinUs">أنظم ألينا</Link></li>
            <li className={window.location.href === window.origin+'/ContactUs' ? 'active' : ""} onClick={()=>{(setIsIconActive(current => !current)) + (setIsNavActive(current => !current))}} style={{backgroundImage: `url('${imgPrev}')`}}><Link to="/ContactUs">تواصل معنا</Link></li>
            {/* {`${window.location.origin}/` === window.location.href && !window.localStorage.getItem('userID')?
                <a href="/register"><button className="button-36" role="button">تسجيل دخول</button></a>
                : 
                ""
            } */}
            {/* {window.location.href !== `${window.location.origin}/login` && window.location.href !== `${window.location.origin}/register` && !window.localStorage.getItem('userID')?
                <a href="/register"><button className="button-36" role="button">تسجيل دخول</button></a>
                :
                ""
            } */}
            {!window.localStorage.getItem('userID')?
                <a href="/register"><button className="button-36" role="button">تسجيل دخول</button></a>
                :
                ""
            }
            {window.localStorage.getItem('userID')?
                <>
                <info.Provider value={{setIsNavActive ,setIsIconActive}}>
                <Cardinfo/>
                </info.Provider>
                </>
                :
                ""
            }
            </ul>
            <div className="nav">
                <i onClick={()=>{(setIsIconActive(current => !current)) + (setIsNavActive(current => !current))}} className={`fa-solid fa-bars ${isIconActive ? "fa-times " + "setP": "" }`} ref={icon}> {isIconActive? <IoClose/> :<HiBars3/> }</i>
            </div>
        </Container>
    </header>
    </>
)
}




export default Header
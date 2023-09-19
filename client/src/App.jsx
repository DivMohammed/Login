import {useState, createContext} from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import { Header, Home , Footer} from './sections'
import Register from './Register/Register'
import Login from './Login/Login'
import ForgetPassword from './Login/ForgetPassword'
import Dashboard from './Dashboard/Dashboard'

import 'bootstrap/dist/css/bootstrap.min.css'
import JoinUs from './sections/JoinUs/JoinUs';
import OurServices from './sections/OurServices/OurServices';
import WhoAreWe from './sections/WhoAreWe/WhoAreWe';
import ContactUs from './sections/ContactUs/ContactUs';
import Reset from './Login/Reset';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
import Profile from './Components/Profile/Profile';
import Axios from 'axios';



export const RecoveryContext = createContext();




function App() {

  const _PORT = 3002


  const  [ID, ] = useState(window.localStorage.getItem("userID"))

  const  [otp, setOtp] = useState('')
  const  [email, setEmail] = useState('')
  const  [user, setUser] = useState([])

  const  [userr, setUserr] = useState('')



  // function NavigateComponents() {
  //   if (page === "login") return <Login />;
  //   if (page === "otp") return <OTPInput />;
  //   if (page === "reset") return <Reset />;
  
  //   return <Recovered />;
  // }



  const respawn = Axios.get(`${window.location.protocol}//${window.location.hostname}:${_PORT}/users`)
        if(respawn){
         respawn.then((res) => (
          res.data.filter((userr) => `${window.location.origin}/Profile/${userr._id}` === window.location.href && setUserr(userr._id)
          )))
        }else{
          console.log("error")
        }


  return (
    <>
          <Router>
          <Header/>
          <RecoveryContext.Provider
          value={{otp, setOtp, setEmail, email, setUser, user}}
          >
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/TermsAndConditions' element={<TermsAndConditions/>}/>
              <Route path={`/dashboard/${ID}`} element={<Dashboard/>}/>
              <Route path={`/profile/${userr}`} element={<Profile/>}/>


              <Route path='/joinUs' element={<JoinUs/>}/>
              <Route path='/OurServices' element={<OurServices/>}/>
              <Route path='/WhoAreWe' element={<WhoAreWe/>}/>
              <Route path='/ContactUs' element={<ContactUs/>}/>

              <Route path='/login' element={<Login/>}/>
              <Route path='/Reset' element={<Reset/>}/>
              <Route path='/ForgetPassword' element={<ForgetPassword/>}/>

              <Route path='/admins' element={<></>}/>
              <Route path='/send-email ' element={<></>}/>
              <Route path='/getImage' element={<></>}/>
            </Routes>
          </RecoveryContext.Provider>

          <Footer/>
          </Router>


          {/* <RecoveryContext.Provider
          value={{ page, setPage, otp, setOTP, setEmail, email }}
          >
          <div className="flex justify-center items-center">
            <NavigateComponents />
          </div>
        </RecoveryContext.Provider> */}




          {/* <RecoveryContext.Provider
  value={{ page, setPage, otp, setOTP, setEmail, email }}
>
  <div className="flex justify-center items-center">
    <NavigateComponents />
  </div>
</RecoveryContext.Provider> */}
    </>
  )
}






export default App

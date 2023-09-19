import './Login.css'
// import PropTypes from 'prop-types';
import {useState ,useRef, useContext} from "react"
import Axios from "axios"
import  {useCookies} from 'react-cookie'

import {Container, Form, Button} from 'react-bootstrap'


import regImg from '../imgs/regImg.jpg'
import { Link } from "react-router-dom"
import { RecoveryContext } from "../App"
// import ForgetPassword from './ForgetPassword'



const Login = () => {
    const {email, otp, setOtp, setEmail} = useContext(RecoveryContext);


    const inputEmail = useRef().current

    // const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    // const [OTP , setOTP] = useState()
    const [alertt, setAlertt] = useState ("none");
    const [alerttEmail, setalerttEmail] = useState ("none");

  
    const [, setCookies] = useCookies(["accsee_token"])

    const _PORT = 3002



    const onSubmit = async(e) => { 
      //In order not to reload the page
      e.preventDefault()
      const respawn = await Axios.post(`${window.location.protocol}//${window.location.hostname}:${_PORT}/login`,{email, password})
      if(respawn.data.adminID){
      setCookies("access_token" , respawn.data.token)
      window.localStorage.setItem("userID", respawn.data.adminID)
      console.log(respawn)

      window.location.replace(window.location.origin)
      return true
      }else{
       return setAlertt("block")
      }
  }




  const nagigateToOtp = async() => {
  if (email) {
    const OTP = Math.floor(Math.random() * 9000 + 1000);
    console.log(OTP);
    setOtp(OTP);

    await Axios.post(`${window.location.protocol}//${window.location.hostname}:${_PORT}/send_recovery_email`, {recipient_email: email, OTP}) // switch
    .then((r) => console.log(r)).catch(console.log("error"));
    return;
  }
  setalerttEmail("block")
}



console.log(email)
console.log(otp)


  return (
    <>
  <Container>
  <section className="login_up" style={{marginTop:"150px" , marginBottom:"100px"}} >
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black ">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">تسجيل دخول</p>
  
                    <Form className="form" onSubmit={onSubmit}>
  
                      {/* <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                      <Form.Control type="text" placeholder="Name"
                              id = "username" value={username}
                              onChange={e => setUsername(e.target.value)}
                      />
                      </div>
                      </div> */}
  
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0" ref={inputEmail}>
                      <Form.Control type="email" placeholder="البريد الألكتروني"
                              required
                              id = "email" value={email}
                              onChange={e => setEmail(e.target.value)}
                      />
                      </div>
                      </div>
  
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                      <Form.Control type="password" placeholder="كلمة السر"
                              required
                              id="password" value={password}
                              onChange={e => setPassword(e.target.value)}
                      />
                      </div>
                      </div>
  
                      {/* <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label className="form-check-label" htmlFor="form2Example3c">
                          أنا أوافق على جميع <a href="#!">الشروط و الأحكام</a>
                        </label>
                      </div> */}
  
                      <Button style={{width:"100%"}} variant="success" type="submit">تسجيل دخول</Button>
                      <p>ليس لدي حساب</p>
                      <a href="/register"> تسجيل دخول جديد</a>  
                      <Link to= {email ? "/ForgetPassword": ""}   style={{display:"block"}} onClick={() => nagigateToOtp()}>نسيت كلمة السر؟</Link>
                    </Form>
                    {/* to= {email ? "/ForgetPassword": ""}  */}
    
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
    
                    <img src={regImg} className="img-fluid" />
    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="alerttEmail" style={{display:alerttEmail}}>
      <span className="closebtn" onClick={()=> setalerttEmail("none")}>&times;</span> 
      <strong>تحذير!</strong> الرجاء كتابة البريد الألكتروني
      </div>

      <div className="alertt" style={{display:alertt}}>
      <span className="closebtn" onClick={()=> setAlertt("none")}>&times;</span> 
      <strong>تحذير!</strong> كلمة المرور او البريد الألكتروني غير صحيحة
      </div>

    </section>
    </Container>
</>
    )
  }


  // const AuthForm = ({label, email, setEmail, password, setPassword, inputEmail,onSubmit}) => {


  //   return (
  //   <Container>
  
  //   <section className="vh-100" >
  //     <div className="container h-100">
  //       <div className="row d-flex justify-content-center align-items-center h-100">
  //         <div className="col-lg-12 col-xl-11">
  //           <div className="card text-black ">
  //             <div className="card-body p-md-5">
  //               <div className="row justify-content-center">
  //                 <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
  //                   <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">تسجيل دخول</p>
  
  //                   <Form className="form" onSubmit={onSubmit}>
  
  //                     {/* <div className="d-flex flex-row align-items-center mb-4">
  //                       <i className="fas fa-user fa-lg me-3 fa-fw"></i>
  //                       <div className="form-outline flex-fill mb-0">
  //                     <Form.Control type="text" placeholder="Name"
  //                             id = "username" value={username}
  //                             onChange={e => setUsername(e.target.value)}
  //                     />
  //                     </div>
  //                     </div> */}
  
  //                     <div className="d-flex flex-row align-items-center mb-4">
  //                       <i className="fas fa-user fa-lg me-3 fa-fw"></i>
  //                       <div className="form-outline flex-fill mb-0" ref={inputEmail}>
  //                     <Form.Control type="email" placeholder="Email"
                              
  //                             id = "email" value={email}
  //                             onChange={e => setEmail(e.target.value)}
  //                     />
  //                     </div>
  //                     </div>
  
  //                     <div className="d-flex flex-row align-items-center mb-4">
  //                       <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
  //                       <div className="form-outline flex-fill mb-0">
  //                     <Form.Control type="text" placeholder="Password"
  //                             id="password" value={password}
  //                             onChange={e => setPassword(e.target.value)}
  //                     />
  //                     </div>
  //                     </div>
  
  //                     <div className="form-check d-flex justify-content-center mb-5">
  //                     <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
  //                       <label className="form-check-label" htmlFor="form2Example3c">
  //                         أنا أوافق على جميع <a href="#!">الشروط و الأحكام</a>
  //                       </label>
  //                     </div>
  
  //                     <Button style={{width:"100%"}} variant="success" type="submit">{label}</Button>
  //                     {label === "login"? 
  //                     <>
  //                     <p>ليس لدي حساب</p>
  //                     <a href="/register"> تسجيل دخول جديد</a>  
  //                     </>
  //                       :                    
  //                     <>
  //                     <p>لدي حساب مسبق</p>
  //                     <a href="/login">تسجيل دخول</a>
  //                     </>
  //                     }
  //                   </Form>
    
  //                 </div>
  //                 <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
    
  //                   <img src={regImg} className="img-fluid" />
    
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  
  //   </Container>
  //     )
  //   }
  
    // AuthForm.propTypes = {
    //   label: PropTypes.node,
    //   email: PropTypes.node,
    //   setEmail: PropTypes.func,
    //   password: PropTypes.node,
    //   setPassword: PropTypes.func,
    //   inputEmail: PropTypes.node,
    //   onSubmit: PropTypes.func,
    // };

{/* <AuthForm
      label="login"
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      inputEmail={inputEmail}
      onSubmit={onSubmit}
      /> */}

  export default Login
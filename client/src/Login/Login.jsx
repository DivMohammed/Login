// import PropTypes from 'prop-types';
import {useState ,useRef, createContext} from "react"
import Axios from "axios"
import  {useCookies} from 'react-cookie'

import {Container, Form, Button} from 'react-bootstrap'


import regImg from '../imgs/regImg.jpg'
import ForgetPassword from './ForgetPassword'

export const NameEmail = createContext()


const Login = () =>{

    const inputEmail = useRef().current

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [label , ] = useState("login")
  //* setLabel
  
    const [, setCookies] = useCookies(["accsee_token"])

    const onSubmit = async(e) => { 
      //In order not to reload the page
      e.preventDefault()
      const respawn = await Axios.post("http://localhost:3001/login",{email, password})
      if(respawn.data.adminID){
      setCookies("access_token" , respawn.data.token)
      window.localStorage.setItem("userID", respawn.data.adminID)
      console.log(respawn)

      window.location.replace(window.location.origin)
      }else{console.log("JJ")}
  }



  return (
    <>
  <Container>
    <section className="vh-100" >
      <div className="container h-100">
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
                      <Form.Control type="email" placeholder="Email"
                              
                              id = "email" value={email}
                              onChange={e => setEmail(e.target.value)}
                      />
                      </div>
                      </div>
  
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                      <Form.Control type="text" placeholder="Password"
                              id="password" value={password}
                              onChange={e => setPassword(e.target.value)}
                      />
                      </div>
                      </div>
  
                      <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label className="form-check-label" htmlFor="form2Example3c">
                          أنا أوافق على جميع <a href="#!">الشروط و الأحكام</a>
                        </label>
                      </div>
  
                      <Button style={{width:"100%"}} variant="success" type="submit">{label}</Button>
                      {label === "login"? 
                      <>
                      <p>ليس لدي حساب</p>
                      <a href="/register"> تسجيل دخول جديد</a>  
                      </>
                        :                    
                      <>
                      <p>لدي حساب مسبق</p>
                      <a href="/login">تسجيل دخول</a>
                      </>
                      }
                      <a href="/OTPInput" style={{display:"block"}}>نسيت كلمة السر؟</a> {/* onClick={() => nagigateToOtp()} */}
                    </Form>
    
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
    </section>
    </Container>
    <NameEmail.Provider value={email}>
    <ForgetPassword/>
    </NameEmail.Provider>
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
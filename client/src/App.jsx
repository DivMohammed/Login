import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import { Header, Home } from './sections'
import Register from './Register/Register'
import Login from './Login/Login'
import ForgetPassword from './Login/ForgetPassword'

// import OTPInput from "./Login/OTPInput";


import 'bootstrap/dist/css/bootstrap.min.css'




function App() {

  return (
    <>
        <Header/>
          <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/OTPInput' element={<ForgetPassword/>}/>

              <Route path='/forgetPassword' element={<ForgetPassword/>}/>
            </Routes>
          </Router>
    </>
  )
}






export default App

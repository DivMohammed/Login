import './Reset.css'

import Axios from "axios"
import {useState, useContext} from "react";
import { RecoveryContext } from "../App";
import { Container , Form} from "react-bootstrap";



function Reset() {
  const {email} = useContext(RecoveryContext);

  const [newPassword, setNewPassword] = useState("");
  const [cheakNewPassword, setCheakNewPassword] = useState("");

  const [alertt, setAlertt] = useState ("none");

  const _PORT = 3002



  const changePassword = async(e) => { 
    e.preventDefault()
    if(newPassword === cheakNewPassword){
  const respawn = await Axios.post(`${window.location.protocol}//${window.location.hostname}:${_PORT}/getId`,{email, newPassword})
  if(respawn){
  //   respawn.then(res => console.log(res.data))
  // .catch(err => console.log(err))
  console.log(respawn)
  // window.location.replace(window.origin+'/login')
  }
    }else if (newPassword !== cheakNewPassword){
      return  setAlertt("block") + console.log("nott")
    }
}


console.log(email)


  return (
    <section className="hold_reset">
    <Container>
            <h2>
              تغيير كلمة المرور
            </h2>

            <form>
              <div className='hold_input'>
                <Form.Control
                            id="password" value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            required
                            type="password"
                            />
                <label
                  htmlFor="password"
                  className=""
                >
                  كلمة المرور الجديدة
                </label>
                <label htmlFor="password" style={{fontSize:"12px", display:"block", textAlign:"center", color:"#9f9f9f"}}>يجب أن يحتوي على حرف كبير , رقم واحد على الأقل و أن يكون من ثماني كلمات او أكثر &#42;</label>
                </div>

                <div className='hold_input'>
                <Form.Control
                            id="confirm-password" value={cheakNewPassword}
                            onChange={e => setCheakNewPassword(e.target.value)}
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            required
                            type="password"
                            />
                <label
                  htmlFor="confirm-password"
                  className=""
                >
                  أعد كتابة كلمة المرور
                </label>
                </div>
                {/* <Button style={{width:"100%"}} onClick={(e) => changePassword(e)}  variant="success" className="reset">أعادة تعيين كلمة المرور</Button> */}
            </form>

            <button
              onClick={(e) => changePassword(e)}
              className="reset"
            >
              أعادة تعيين كلمة المرور
            </button>
            <div className="alertt" style={{display:alertt}}>
        <span className="closebtn" onClick={()=> setAlertt("none")}>&times;</span> 
        <strong>تحذير!</strong> كلمة المرور غير متطابقة
        </div>
      </Container>
      </section>
  );
}


export default Reset
import './ForgetPassword.css'

import {useState, useContext, useEffect} from "react";
import Axios from "axios"
import { RecoveryContext } from "../App";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';

function ForgetPassword () {
  const {email, otp} = useContext(RecoveryContext);
  const [timerCount, setTimer] = useState(60);
  const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
  const [disable, setDisable] = useState(true);

  const [alertt, setAlertt] = useState ("none");

  const _PORT = 3002


  function resendOTP() {
    if (disable) return;
    Axios.post(`${window.location.protocol}//${window.location.hostname}:${_PORT}/send_recovery_email`, {OTP: otp, recipient_email: email})
      .then(() => setDisable(true))
      .then(() => alert("A new OTP has succesfully been sent to your email."))
      .then(() => setTimer(60))
      .catch(console.log);
  }

  function verfiyOTP() {

    if (parseInt(OTPinput.join("")) === otp) {
      // window.location.replace(window.origin+"/Reset")
      // <Link to="/Reset"></Link>
      return;
    }
    setAlertt("block") + console.log("nott")
    return;
  }

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, [disable]);

  console.log(email)
  console.log(otp)
  console.log(OTPinput)

  return (
    <section className='ForgetPassword'>
      <Container>
            <div className="hold_p">
              <p>أعادة تعيين كلمة المرور</p>
              <p><strong>{email}</strong> لقد أرسلنا الكود ألى</p>
            </div>

            <form>
              <div className="">
                <div className="hold_inputs">
                    <input
                      maxLength="1"
                      className=""
                      type="text"
                      name=""
                      id=""
                      onChange={(e) =>
                        setOTPinput([
                          e.target.value,
                          OTPinput[1],
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }
                    ></input>
                    <input
                      maxLength="1"
                      className=""
                      type="text"
                      name=""
                      id=""
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          e.target.value,
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }
                    ></input>
                    <input
                      maxLength="1"
                      className=""
                      type="text"
                      name=""
                      id=""
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          OTPinput[1],
                          e.target.value,
                          OTPinput[3],
                        ])
                      }
                    ></input>
                    <input
                      maxLength="1"
                      className=""
                      type="text"
                      name=""
                      id=""
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          OTPinput[1],
                          OTPinput[2],
                          e.target.value,
                        ])
                      }
                    ></input>
                </div>

                <div className="">
                  <div>
                    <Link
                      to={parseInt(OTPinput.join("")) === otp? "/Reset": ""}
                      onClick={() => verfiyOTP()}
                      className="verfiyOTP"
                    >
                      أرسال
                    </Link>
                  </div>

                  <div className="">
                    <p>ألم تستلم الكود؟</p>{" "}
                    <a
                      className=""
                      style={{
                        color: disable ? "gray" : "blue",
                        cursor: disable ? "none" : "pointer",
                        textDecorationLine: disable ? "none" : "underline",
                      }}
                      onClick={() => resendOTP()}
                    >
                      {disable ? `أعادة أرسال خلال ${timerCount} ثانية` : "Resend OTP"}
                    </a>


                    <div className="alertt" style={{display:alertt}}>
        <span className="closebtn" onClick={()=> setAlertt("none")}>&times;</span> 
        <strong>تحذير!</strong> كلمة المرور غير متطابقة
        </div>
                  </div>
                </div>
              </div>
            </form>
    </Container>
    </section>
  );
}

export default ForgetPassword
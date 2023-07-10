import {useContext} from "react"
import {NameEmail} from "./Login"


const ForgetPassword = () => {

  const email = useContext(NameEmail)

  console.log(email)

    return (
    <>
      {console.log(email)}
      <div>this is <p>{email}</p></div>
    </>
  )
  }

export default ForgetPassword
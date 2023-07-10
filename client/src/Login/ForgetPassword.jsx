import {useContext} from "react"
// import Axios from "axios"
import NameEmail from "./Login"


// export default function ForgetPassword(){
//   const email = useContext(NameEmail)

//   console.log(email)
//     return (
//     <div>this is {email}</div>
//   )
// }

const ForgetPassword = () => {
  const email = useContext(NameEmail)

  console.log(email)
    return (
    <div>this is {email}</div>
  )
}

export default ForgetPassword
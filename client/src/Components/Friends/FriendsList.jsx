import PropTypes from 'prop-types';

import {InputGroup} from 'react-bootstrap'
import './FriendsList.css'

import { Link } from "react-router-dom";



import { RecoveryContext } from "../../App"
import { useContext } from 'react';

import DEB from '../../imgs/default.jpg';





const FriendsList = (props) => {
  const {setUser} = useContext(RecoveryContext);

  const _PORT = 3002

  const showProfile = () =>{
    setUser(props)
}


    return (
    <>
      <InputGroup >
      <Link style={{textDecoration:"none" , color:"black"}} onClick={showProfile} to={`${window.location.protocol}//${window.location.hostname}:${window.location.port}/Profile/${props.userId}`}  rel="noreferrer">
      <div className='card-hold' style={{backgroundImage: `linear-gradient(0.75turn,rgb(250 250 250 / 79%),rgb(250 250 250 / 79%),transparent) , url('${window.location.protocol}//${window.location.hostname}:${_PORT}/Images/${props.backgroundImage || DEB}` , backgroundSize: "cover", backgroundPositionY:"center"}}>

      <img src={props.avatar}/>
      <div className="card-body">
        <h4 >{props.username}</h4>
        <h6 >{props.email}</h6>
      </div>
      </div>
      </Link>
      </InputGroup>
    </>
    )
}


FriendsList.propTypes = {
      username: PropTypes.node,
      email: PropTypes.node,
      avatar: PropTypes.node,
      backgroundImage: PropTypes.node,
      userId: PropTypes.node,
    };

export default FriendsList
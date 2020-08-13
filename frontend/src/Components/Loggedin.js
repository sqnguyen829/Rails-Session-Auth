import React from 'react'
import { useHistory } from 'react-router';

function Loggedin(props) {
    let history = useHistory()
    console.log(props.currentUser)
  return (
    <div>
      <h1>You've logged in {props.currentUser.username}</h1>
      <button onClick ={()=> props.logout()}>Logout</button>
    </div>
  );
}

export default Loggedin;


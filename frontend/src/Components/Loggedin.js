import React from 'react'
import { useHistory } from 'react-router';

function Loggedin(props) {
    let history = useHistory()
    console.log(props.currentUser)
  return (
    <div>
      <h1>You've logged in {props.currentUser.username}</h1>
      <button onClick= {()=> history.push('/logdedin')} >we in</button>
      <button onClick= {()=> history.push('/')} >Home</button>
    </div>
  );
}

export default Loggedin;


import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';

function Loggedin(props) {
    let history = useHistory()

    let [dogs, setDogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/dogs')
        .then(res => res.json())
        .then(dogData => {
          setDogs(dogData)
        })
      },[])

      console.log(dogs)
  return (
    <div>
      <h1>You've logged in {props.currentUser.username}</h1>
      <button onClick ={()=> props.logout(setDogs)}>Logout</button>
    </div>
  );
}

export default Loggedin;


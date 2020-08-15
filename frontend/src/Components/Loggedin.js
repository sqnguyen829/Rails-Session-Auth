import React, { useState, useEffect } from 'react'
import DogContainer from './DogContainer'

function Loggedin(props) {

    let [dogs, setDogs] = useState([])

    useEffect(() => {
        //https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
        let isMounted = true // note this flag denote mount status

        fetch('http://localhost:3000/dogs')
        .then(res => res.json())
        .then(dogData => {
            if(isMounted){
                setDogs(dogData)
            }
        })
        return () => { isMounted = false } // use effect cleanup to set flag false, if unmounted
      },[])

  return (
    <div>
        <h1>You've logged in {props.currentUser.username}</h1>
        <button onClick ={()=> props.logout(setDogs)}>Logout</button>
        <DogContainer dogs={dogs}/>
    </div>
  );
}

export default Loggedin;


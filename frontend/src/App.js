import React, { useState, useEffect } from 'react'
import Login from './Components/Login'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home'
import Loggedin from './Components/Loggedin'

function App() {
  let [currentUser, setUser] = useState({})

  let logout = () => {
    console.log('done')
    fetch('http://localhost:3000/logout',{
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  useEffect(() => {
    fetch('http://localhost:3000/check-login', {
      credentials: 'include',
    })
    .then(res => res.json())
    .then(user => {
      setUser(user)
      if(user.username){
        console.log(user)
        // history.push('/')
      }
    })
  },[])

  console.log(currentUser)
  return (
    <BrowserRouter>
      <Route exact path ='/' component={ () => <Home logout ={logout}/> } />
      <Route exact path ='/login' component= { () => <Login setUser = {setUser} currentUser = {currentUser}/> }/>
      <Route exact path ='/loggedin' component={ () => <Loggedin currentUser = { currentUser }/> }/>
    </BrowserRouter>
  );
}

export default App;

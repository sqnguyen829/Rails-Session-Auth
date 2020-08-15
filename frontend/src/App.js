import React, { useState, useEffect } from 'react'
import Login from './Components/Login'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Loggedin from './Components/Loggedin'
import { useHistory } from 'react-router';

function App() {
  let [currentUser, setUser] = useState({})
  let history = useHistory()

  let logout = (setDogs) => {
    setDogs([])

    //credentials: 'include' , if we plan on change anything that requires session
    fetch('http://localhost:3000/logout', {
      credentials: 'include',
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setUser({})
      history.push('/')
    })
  }

  useEffect(() => {

    //credentials: 'include' , since we are dealing with sessions now
    fetch('http://localhost:3000/check-login', {
      credentials: 'include',
    })
    .then(res => res.json())
    .then(user => {
      if(user.username){
        setUser(user)
        history.push('/loggedin')
      } else {
        history.push('/login')
      }
    })

    //Adding history to the dependency array will get rid of this error message
    //React Hook useEffect has a missing dependency: 'history'. 
    //Either include it or remove the dependency array  react-hooks/exhaustive-deps
  },[history])

  return (
    <Switch>
      <Route exact path ='/' component={ () => <Home /> } />
      <Route exact path ='/login' component= { () => <Login setUser = {setUser} currentUser = {currentUser}/> }/>
      <Route exact path ='/loggedin' component={ () => <Loggedin currentUser = { currentUser } logout ={logout}/> }/>
    </Switch>
  );
}

export default App;

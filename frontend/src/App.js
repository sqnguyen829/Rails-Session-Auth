import React, { useState } from 'react'
import Login from './Components/Login'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home'
import Loggedin from './Components/Loggedin'

function App() {
  let [currentUser, setUser] = useState({})

  console.log(currentUser)
  return (
    <BrowserRouter>
      <Route exact path ='/' component={ Home }/>
      <Route exact path ='/login' component= { () => <Login setUser = {setUser} currentUser = {currentUser}/> }/>
      <Route exact path ='/loggedin' component={ () => <Loggedin currentUser = { currentUser }/> }/>
    </BrowserRouter>
  );
}

export default App;

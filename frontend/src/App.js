import React, { useState, useEffect } from 'react'
import Login from './Components/Login'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home'
import Loggedin from './Components/Loggedin'

function App() {
  let [currentUser, setUser] = useState({username:'John'})

  useEffect(() => {
        console.log('hello')
  })

  return (
    <BrowserRouter>
      <Route exact path ='/' component={ Home }/>
      <Route exact path ='/login' component= { () => <Login setUser = {setUser}/> }/>
      <Route exact path ='/loggedin' component={() => <Loggedin currentUser = { currentUser }/>}/>
    </BrowserRouter>
  );
}

export default App;

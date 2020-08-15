import React from 'react'
import { useHistory } from 'react-router';

function Login(props) {

  let history = useHistory()

  let loginHere = (e) => {
    e.preventDefault()
    
    fetch('http://localhost:3000/login',{
      credentials: 'include',
      method:'POST',
      headers:{ 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
      body:JSON.stringify({
        username:e.target.username.value,
        password:e.target.password.value
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.username){
        props.setUser(data)
        history.push('/loggedin')
      }
    })
  }

  return (
    <div>
      <form onSubmit={ (e) => loginHere(e) }>
          <label>
              Username
          </label>
          <input name='username' type='text'></input>
          <br/>
          <label>
              Password
          </label>
          <input name='password' type='password'></input>
          <br/>
          <input type='submit'></input>
      </form>
    </div>
  );
}

export default Login;


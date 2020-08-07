import React from 'react';

function Login() {

  let loginHere = (e) => {
    e.preventDefault()
    console.log(e.target.username.value)
    fetch('http://localhost:3000/login',{
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
    .then(data => console.log(data))
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


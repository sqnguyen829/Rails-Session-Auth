import React from 'react';
import { useHistory } from 'react-router';

function Home(props) {
    let history = useHistory()
  return (
    <div>
      <button onClick= {()=> history.push('/login')} >Head to Login</button>
      <button onClick= {()=> history.push('/logdedin')} >we in</button>
      <button onClick ={()=> props.logout()}>Logout</button>
    </div>
  );
}

export default Home;


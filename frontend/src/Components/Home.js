import React from 'react';
import { useHistory } from 'react-router';

function Home() {
    let history = useHistory()
  return (
    <div>
      <button onClick= {()=> history.push('/login')} >Head to Login</button>
      <button onClick= {()=> history.push('/logdedin')} >we in</button>
    </div>
  );
}

export default Home;


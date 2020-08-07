import React, { useState, useEffect } from 'react'

function Loggedin(props) {

  return (
    <div>
      <h1>You've logged in {props.currentUser.username}</h1>
    </div>
  );
}

export default Loggedin;


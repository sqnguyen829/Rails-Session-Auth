import React from 'react';
function DogCard(props) {
  return (
    <div>
        <h1>{props.dog.name} is a {props.dog.breed}</h1>
    </div>
  );
}

export default DogCard;
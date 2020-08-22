import React from 'react';
import DogCard from './DogCard'

function DogContainer(props) {
  return (
    <div>
      {props.dogs.map(dog => <DogCard dog = { dog } key = { dog.id }/>)}
    </div>
  );
}

export default DogContainer;

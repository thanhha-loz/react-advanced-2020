import React, { useState } from 'react';

const UseStateObject = () => {
  const [People, setPeople] = useState({
    name: 'Peter',
    age: 29,
    message: 'Random Mess'
  })
  const {name, age, message} = People;
  const changeMess = () => {
setPeople({...People, message: 'New Mess'});
  }
  return <>
  <h4>{name}</h4>
  <h4>{age}</h4>
  <h4>{message}</h4>
<button className='btn' onClick={changeMess}>Change Mess</button>
  </>
};

export default UseStateObject;

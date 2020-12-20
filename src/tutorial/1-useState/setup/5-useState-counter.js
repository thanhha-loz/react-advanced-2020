import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  return <>
  <h2>{value}</h2>
  <button className='btn' onClick={() => setValue(value +1)}>Increase</button>
    <button className='btn' onClick={() => setValue(0)}>Reset</button>
    <button className='btn' onClick={() => setValue(value - 1)}>Decrease</button>
  </>
};

export default UseStateCounter;

import React, { useState } from 'react';


const UseStateBasics = () => {
  const [text, setText] = useState("Random Title");
  const clickHandler = () => {
    if (text === 'Random Title') {
      setText('Hello Bitches');
    } else {
      setText('Random Title');
    }
  }
    return <React.Fragment>
    <h2>{text}</h2>
    <button className='btn' onClick={clickHandler}>
      change title
    </button>
  </React.Fragment>
}

export default UseStateBasics;

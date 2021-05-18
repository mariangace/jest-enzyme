import React, { useState } from 'react';

function Counter({ number }) {
  const [counter, setCounter] = useState(number);

  const handleAddition = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleSubtraction = () => {
    if (counter > 5) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  return (
    <div className='main-comp'>
      <h1 className='title'>INTRO TO TESTING IN REACT</h1>
      <div className='counter'>
        <div className='controls'>
          <button onClick={handleSubtraction}>-</button>
          <p>{counter}</p>
          <button onClick={handleAddition}>+</button>
        </div>
      </div>
      <h2>The number that comes from the props is: {number}</h2>
    </div>
  );
}
//Default props
Counter.defaultProps = {
  number: 15,
};

export default Counter;

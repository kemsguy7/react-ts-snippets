import exp from 'constants';
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      {' '}
      <h2> Current count : {count} </h2>
      <button onClick={() => handleDecrement()}> Decrement </button>
      <button onClick={() => handleIncrement()}> Increment </button>
    </div>
  );
};

export default Counter;

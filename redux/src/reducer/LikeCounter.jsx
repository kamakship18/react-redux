import React, { useState } from 'react';
import { createStore } from 'redux';
import reducer from './Reducer.jsx';
import './LikeCounter.css'; 

const store = createStore(reducer);

const LikeCounter = () => {
  const [count, setCount] = useState(store.getState().count);

  store.subscribe(() => {
    setCount(store.getState().count);
    console.log(setCount);
  });

  const handleIncrement = () => {
    store.dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    store.dispatch({ type: 'DECREMENT' });
  };

  return (
    <div className="container">
      <h2>Redux Like Counter</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default LikeCounter;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from '../actions/counterAction';


const Counter = () => {
  const count = useSelector((state) => state.countHandler.count);  // Access the state
  const dispatch = useDispatch();  // Dispatch actions

  console.log({count})

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {/* <button onClick={() => dispatch(asyncIncrement())}>Async Increment (1 sec delay)</button> */}
    </div>
  );
};

export default Counter;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, asyncIncrement, incrementbyx } from '../actions/counterAction';
// import './Counter.css'; // Importing custom CSS for styling
import './Counters.css';

const Counter = () => {
  const count = useSelector((state) => state.countHandler.count);  // Access the state
  const dispatch = useDispatch();  // Dispatch actions

  const incrementHandler = () => {
    dispatch(increment());
  };

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <div className="count-display">{count}</div>
      <div className="button-group">
        <button className="counter-btn increment-btn" onClick={incrementHandler}>Increment</button>
        <button className="counter-btn increment-x-btn" onClick={() => dispatch(incrementbyx(5))}>Increment By 5</button>
        <button className="counter-btn decrement-btn" onClick={() => dispatch(decrement())}>Decrement</button>
        <button className="counter-btn async-increment-btn" onClick={() => dispatch(asyncIncrement())}>Async Increment (1 sec delay)</button>
      </div>
    </div>
  );
};

export default Counter;

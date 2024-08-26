import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTimer,
  startTimer,
  pauseTimer,
  stopTimer,
  resetTimer,
  tickTimer
} from '../actions/timerActions';
import './Timer.css';

const Timer = () => {
  const dispatch = useDispatch();
  const { timeLeft, running, paused } = useSelector((state) => state.timerHandler);

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (running) {
      const timerInterval = setInterval(() => {
        dispatch(tickTimer());
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [dispatch, running]);
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSetTimer = () => {
    const minutes = parseInt(inputValue, 10);
    if (!isNaN(minutes) && minutes > 0) {
      dispatch(setTimer(minutes));
    }
    setInputValue('');
  };

  const handleStart = () => {
    if (!running && timeLeft > 0) {
      dispatch(startTimer());
    }
  };

  const handlePause = () => {
    if (running) {
      dispatch(pauseTimer());
    }
  };

  const handleStop = () => {
    dispatch(stopTimer());
  };

  const handleReset = () => {
    dispatch(resetTimer());
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <h1>Timer</h1>
      <div className="timer-display">
        <h2>{formatTime(timeLeft)}</h2>
      </div>

      <div className="input-container">
        <input
          type="number"
          placeholder="Set minutes"
          value={inputValue}
          onChange={handleInputChange}
          className="timer-input"
        />
        <button className="set-btn" onClick={handleSetTimer}>Set Timer</button>
      </div>

      <div className="controls">
        <button className="start-btn" onClick={handleStart} disabled={running || timeLeft === 0}>
          Start
        </button>
        <button className="pause-btn" onClick={handlePause} disabled={!running || paused}>
          Pause
        </button>
        <button className="stop-btn" onClick={handleStop}>
          Stop
        </button>
        <button className="clear-btn" onClick={handleReset}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Timer;

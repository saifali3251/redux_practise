export const SET_TIMER = 'SET_TIMER';
export const START_TIMER = 'START_TIMER';
export const PAUSE_TIMER = 'PAUSE_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const TICK_TIMER = 'TICK_TIMER';

export const setTimer = (minutes) => ({
  type: SET_TIMER,
  payload: minutes * 60,  // Convert minutes to seconds
});

export const startTimer = () => ({ type: START_TIMER });
export const pauseTimer = () => ({ type: PAUSE_TIMER });
export const stopTimer = () => ({ type: STOP_TIMER });
export const resetTimer = () => ({ type: RESET_TIMER });
export const tickTimer = () => ({ type: TICK_TIMER });

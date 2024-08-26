import { SET_TIMER, START_TIMER, PAUSE_TIMER, STOP_TIMER, RESET_TIMER, TICK_TIMER } from '../actions/timerActions';

const initialState = {
  timeLeft: 0,  // In seconds
  running: false,
  paused: false,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIMER:
      return {
        ...state,
        timeLeft: action.payload,
        running: false,
        paused: false,
      };
    case START_TIMER:
      return {
        ...state,
        running: true,
        paused: false,
      };
    case PAUSE_TIMER:
      return {
        ...state,
        running: false,
        paused: true,
      };
    case STOP_TIMER:
      return initialState;
    case RESET_TIMER:
      return {
        ...state,
        timeLeft: 0,
        running: false,
        paused: false,
      };
    case TICK_TIMER:
      return {
        ...state,
        timeLeft: state.timeLeft > 0 ? state.timeLeft - 1 : 0,
        running: state.timeLeft > 0,
      };
    default:
      return state;
  }
};

export default timerReducer;

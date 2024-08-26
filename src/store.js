import { applyMiddleware, combineReducers} from 'redux'
import countReducer from './reducers/counterReducers'
import { todoReducer } from './reducers/todoReducers';
import {thunk} from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './reducers/timerReducers';

const reducer = combineReducers(
    {
        countHandler : countReducer,
        todoHandler : todoReducer,
        timerHandler : timerReducer
    }
)


// const store = configureStore({reducer})
const store = configureStore({reducer}, applyMiddleware(thunk))

export default store;
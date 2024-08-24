import { applyMiddleware, combineReducers} from 'redux'
import countReducer from './reducers/counterReducers'
import {thunk} from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers(
    {
        countHandler : countReducer
    }
)


const store = configureStore({reducer})
// const store = configureStore(reducer, applyMiddleware(thunk))

export default store;
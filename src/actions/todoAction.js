import axios from 'axios';
import { FETCH_TODO_REQUEST,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_ERROR,
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    UPDATE_TODO_REQUEST,
    UPDATE_TODO_SUCCESS,
    UPDATE_TODO_ERROR
 } from '../constants/todoConstants';
import { urls,server } from '../utils';


export const fetchTodo = () => {

    return async (dispatch) => {
        dispatch({type : FETCH_TODO_REQUEST})
        try{
            let response = await axios.get(urls[server])
            console.log({response})
            dispatch({type : FETCH_TODO_SUCCESS, payload : response.data})
        }
        catch(error){
            dispatch({type : FETCH_TODO_ERROR, payload : error })

        }
    }
}

export const addTodo = (newTodo) => async (dispatch) => {
    dispatch({type : ADD_TODO_REQUEST})

    try{
        console.log({newTodo})
        let response = await fetch(`${urls[server]}/todo`,
        {
            method : 'POST',
            headers : { 'Content-Type': 'application/json' },
            body : JSON.stringify(newTodo)
        })

        // const data = await response.json();

        // console.log({data})
        // we're adding the newTodo once the response is success into existing todo
        dispatch({type : ADD_TODO_SUCCESS, payload : newTodo})
    }
    catch(error){
        dispatch({type : ADD_TODO_ERROR, payload : error})
    }
}

export const updateTodo = (id, updatedTodo) => async (dispatch) => {
    dispatch({ type: UPDATE_TODO_REQUEST });
    try {
      const response = await fetch(`${urls[server]}/todo/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTodo),
      });
      const data = await response.json();
      dispatch({ type: UPDATE_TODO_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: UPDATE_TODO_ERROR, payload: error.message });
    }
  };

  export const deleteTodo = (id) => async (dispatch) => {
    dispatch({ type: 'DELETE_TODO_REQUEST' });
    try {
      await fetch(`${urls[server]}/todo/${id}`, {
        method: 'DELETE',
      });
      dispatch({ type: 'DELETE_TODO_SUCCESS', payload: id });
    } catch (error) {
      dispatch({ type: 'DELETE_TODO_FAILURE', payload: error.message });
    }
  };
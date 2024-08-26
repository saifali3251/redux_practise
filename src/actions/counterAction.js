// Actions are plain JS objects that describe how thing
import { useEffect } from "react"

// This way of writing is also correct
// export const increment = () => ({
//     type : 'INCREMENT'
// })

export const increment = () => {
    return {
        type : 'INCREMENT'
    }
}

export const incrementbyx = (data) => {
    return {
        type : 'INCREASE',
        payload : data
    }
}



export const decrement = () => {
    return {
        type : 'DECREMENT'
    }
}



// actions generally returns plain simple objects like {'type' : 'INCREMENT'}
// In a typical Redux action creator, you would return an action object like { type: 'INCREMENT' }. 
// However, when using middleware like Redux Thunk, you can return a function that performs asynchronous operations.

// THUNK
// Redux Thunk allows action creators to return functions (thunks) instead of just plain action objects.
// This enables the ability to perform asynchronous tasks like API calls, timers, or other side effects within the action creator.
// The function returned by the action creator receives dispatch as an argument, which can be used to dispatch regular actions to the store.

export const asyncIncrement = () => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(increment());
      }, 1000); // Simulating an asynchronous operation
    };
};


// export const asyncIncrement = () => {
//     return (dispatch) => {
//         useEffect(()=>{
//             setTimeout(()=>{
//                 dispatch(increment());
//             },1000)
//         })
//     }
// }



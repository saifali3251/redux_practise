// Default Initial State
const initialState = {
    count : 0
}

// The reducer receives two arguments, the current state and an action object describing what happened. 
// When the Redux app starts up, we don't have any state yet, so we provide the initialState as the default value for this reducer:

const countReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            console.log('INC',{state})
            return {
                ...state,
                count : state.count + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                count : state.count - 1
            }
        
        case 'INCREASE':
            return {
                ...state,
                count : state.count + action.payload
            }
        // // If the reducer doesn't care about this action type,
        // return the existing state unchanged
        default:
            return state
    }
}

export default countReducer;
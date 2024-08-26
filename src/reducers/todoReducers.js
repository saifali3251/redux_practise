import { FETCH_TODO_REQUEST,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_ERROR,
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    UPDATE_TODO_REQUEST,
    UPDATE_TODO_SUCCESS,
    UPDATE_TODO_ERROR
} from "../constants/todoConstants"


const initialState = {
    loading : false,
    todos : [],
    error : ''
}

export const todoReducer = (state=initialState,action) => {
    switch (action.type){
        // Get all todo
        case FETCH_TODO_REQUEST :
            return {...state,loading : true}
        case FETCH_TODO_SUCCESS :
            return {...state,loading : false,todos : action.payload}
        case FETCH_TODO_ERROR :
            return {...state,loading:false,error : true}

        // Add Todo
        case ADD_TODO_REQUEST:
            return { ...state, loading: true };
        case ADD_TODO_SUCCESS:
            return { ...state, loading: false, todos: [...state.todos, action.payload] };
        case ADD_TODO_ERROR:
            return { ...state, loading: false, error: action.payload };
        
        // Update todo
        case UPDATE_TODO_REQUEST:
            return { ...state, loading: true };
        case UPDATE_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: state.todos.map((todo) =>
                todo.id === action.payload.id ? action.payload : todo
                ),
            };
        case UPDATE_TODO_ERROR:
            return { ...state, loading: false, error: action.payload };

        // Delete todo        
        case 'DELETE_TODO_REQUEST':
            return { ...state, loading: true };
        case 'DELETE_TODO_SUCCESS':
        return {
            ...state,
            loading: false,
            todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
        case 'DELETE_TODO_FAILURE':
        return { ...state, loading: false, error: action.payload };

        default :
            return state        
    }
}
import { ADD_MESSAGE, GET_MESSAGES, DELETE_MESSAGE } from '../constants/ActionTypes';

const initialState = ["Welcome", "Hi"]

export default (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_MESSAGE:        
            return [...state, action.payload];
        case GET_MESSAGES:                
            return state;
        case DELETE_MESSAGE:
            return deleteMessage(action.payload, state);
        default:
        console.log("DEFAULT SWITCH CALLED IN MESSAGE REDUCER")
            return state;
    }
}


function deleteMessage(message, state){
    return state.filter(msg => msg !== message);
}
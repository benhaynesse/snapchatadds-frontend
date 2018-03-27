import { ADD_MESSAGE, GET_MESSAGES, DELETE_MESSAGE } from '../constants/ActionTypes';

export const addMessage = (message) => {
    return {
        type:ADD_MESSAGE,
        payload: message
    }
}

export const getMessages = () => {    
    return {
        type:GET_MESSAGES,
        payload:"ALL"
    }
}

export const deleteMessage = (message) => {
    return {
        type:DELETE_MESSAGE,
        payload:message,
    }
}
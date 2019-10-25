import {
    LOG_IN,
    LOG_OUT
} from '../actions';

const question = (state = {
    username: undefined
}, action) => {
    switch (action.type) {
        case LOG_IN: return { username: action.uid }
        case LOG_OUT: return { username: undefined }
        default: return state;
    }
}

export const getAuthor = (state) => state.username;

export default question;
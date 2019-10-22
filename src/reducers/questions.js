import {
    FETCH_QUESTIONS,
    SAVE_QUESTION,
    SAVE_ANSWER,
} from '../actions';


const question = ( state = {}, action) => {
    switch(action.type){
        case FETCH_QUESTIONS : return action.questions
        case SAVE_QUESTION : return { ...state, ...action.question }
        case SAVE_ANSWER : 
        default: return state;
    }
}

export default question;
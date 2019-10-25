import {
    FETCH_USERS,
    SAVE_ANSWER,
    SAVE_QUESTION
} from '../actions';



const user = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USERS: return action.users
        case SAVE_QUESTION: return {
            ...state, [action.question.author]: {
                ...state[action.question.author],
                questions: state[action.question.author].questions.concat([action.question.id])
            }
        }
        case SAVE_ANSWER: return {
            ...state, [action.authedUser]: {
                ...state[action.authedUser],
                answers: {
                    ...state[action.authedUser].answers,
                    [action.qid]: action.answer
                }
            }
        }
        default: return state
    }
}

export const getUsers = (state) => state;
export const getUser = (state, id) => {
    return state[id]
};

export default user;
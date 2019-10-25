import {
    FETCH_QUESTIONS,
    SAVE_QUESTION,
    SAVE_ANSWER,
} from '../actions';

const question = (state = {}, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS: return action.questions
        case SAVE_QUESTION: return { ...state, [action.question.id]: action.question }
        case SAVE_ANSWER: return {
            ...state,
            [action.qid]: {
                ...state[action.qid], [action.answer]: {
                    ...state[action.qid][action.answer],
                    votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                }
            }
        }
        default: return state;
    }
}

export const getQuestions = (state) => state;
export const getQuestion =  (state, id) => {
    return state[id]
};

export default question;
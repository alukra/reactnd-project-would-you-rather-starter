import { combineReducers } from 'redux'
import question, * as selectorsFromQuestion from './questions';
import user, * as selectorsFromUser from './users';

const rootReducer = combineReducers({
    question,
    user
})

export const getQuestion = (state) => selectorsFromQuestion.getQuestion(state.question)
export const getQuestions = (state, id) => selectorsFromQuestion.getQuestion(state.question, id)
export const getUser = (state) => selectorsFromUser.getUser(state.user)
export const getUsers = (state, id) => selectorsFromUser.getUser(state.user, id)

export default rootReducer
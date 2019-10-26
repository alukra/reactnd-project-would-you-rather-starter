import { combineReducers } from 'redux'
import question, * as selectorsFromQuestion from './questions';
import user, * as selectorsFromUser from './users';
import auth, * as selectorsFromAuth from './auth';

const rootReducer = combineReducers({
    auth,
    question,
    user
})

export const getQuestions = (state) => selectorsFromQuestion.getQuestions(state.question)
export const getQuestion = (state, id) => selectorsFromQuestion.getQuestion(state.question, id)
export const getUsers = (state) => selectorsFromUser.getUsers(state.user)
export const getUser = (state, id) => selectorsFromUser.getUser(state.user, id)
export const getAuthor = (state) => selectorsFromAuth.getAuthor(state.auth)

export default rootReducer
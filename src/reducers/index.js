import { combineReducers } from 'redux'
import question, * as selectorsFromQuestion from './questions';
import user, * as selectorsFromUser from './users';

const rootReducer = combineReducers({
    question,
    user
})

export default rootReducer
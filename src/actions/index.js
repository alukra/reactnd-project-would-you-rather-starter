import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from '../api/_DATA';

//Actions

export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const FETCH_USERS = "FETCH_USERS";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";


//Actions creators 

const recieveQuestions = (questions) => ({
    type: FETCH_QUESTIONS,
    questions
});

const saveQuestion = (question) => ({
    type: SAVE_QUESTION,
    question
});

const saveAnswer = (authedUser, qid, answer) => ({
    type: SAVE_ANSWER,
    answer,
    authedUser,
    qid
});

const recieveUsers = (users) => ({
    type: FETCH_USERS,
    users
});

export const login = (uid) => ({
    type: LOG_IN,
    uid
});

export const logout = () => ({
    type: LOG_OUT
});

// Async actions

export const fetchQuestions = () => (dispatch)  => {
    _getQuestions().then((questions) => {
        dispatch(recieveQuestions(questions));
    });
}

export const fetchUsers = () =>  (dispatch) => {
    _getUsers().then((users) => {
        dispatch(recieveUsers(users));
    });
}

export const saveQuestionAnswer = (authedUser, qid, answer) =>  (dispatch) => {
    _saveQuestionAnswer({authedUser, qid, answer}).then(()=>{
        dispatch(saveAnswer(authedUser, qid, answer));
    });
}

export const createQuestion = ({optionOneText, optionTwoText, author}) => (dispatch) => {
    return new Promise((res, rej) =>{
        _saveQuestion({optionOneText, optionTwoText, author}).then((question)=>{
            dispatch(saveQuestion(question));
            res()
        });
    });
}
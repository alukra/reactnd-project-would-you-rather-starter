//Constants
export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const FETCH_USERS = "FETCH_USERS";


export const fetchQuestions = (questions) => ({
    type: FETCH_QUESTIONS,
    questions
})

export const saveQuestion = (question) => ({
    type: SAVE_QUESTION,
    question
})

export const saveAnswer = (answer) => ({
    type: SAVE_ANSWER,
    answer
})

export const fetchUsers = (users) => ({
    type: FETCH_USERS,
    users
})
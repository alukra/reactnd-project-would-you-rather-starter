/**
 * Get the user that has create the question
 * @param {*} users 
 * @param {*} qid 
 */
export const findUserQuestion = (users, qid) => {
    return Object.keys(users).reduce((user, uid) => {
        if (users[uid].questions.includes(qid)) {
            return users[uid];
        }
        return user;
    }, undefined);
}

/**
 * return a questions list that is answered or unanswered
 * @param {*} type Recieve what questions the users would see the options provide are answered and unanswered
 * @param {*} questions object that has the questions
 * @param {*} userId the user
 */
export const typeQuestion = (type, questions, user) => {
    let keyQuestions = Object.keys(questions).filter(qid => {
        if (type === "answered") {
            return user.answers[qid] !== undefined;
        } else {
            return user.answers[qid] === undefined;
        }
    });
    return keyQuestions.map(qid => questions[qid]);
}

/**
 * Check if a user has a answer in a question selected
 * @param {*} question 
 * @param {*} user 
 */
export const hasAnswered = (question, user) =>
    user.answers[question.id] !== undefined ? true : false


export const getAnswered = (question, user) =>
    user.answers[question.id]

/**
 * Sort an array of question in descendent order using its timestamp
 * @param {Array} questions 
 */
export const sortQuestions = (questions) => {
    return questions.sort((a, b) => {
        return b.timestamp - a.timestamp;
    });
}
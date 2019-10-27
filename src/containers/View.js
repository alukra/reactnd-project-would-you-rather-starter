import React from 'react';
import { connect } from 'react-redux';
import { getUsers, getQuestion, getAuthor } from '../reducers';
import { saveQuestionAnswer } from '../actions';
import { hasAnswered } from "../utils";
import { Redirect } from "react-router-dom";
import CardResult from "../components/CardResult";
import CardQuestion from "../components/CardQuestion";

class View extends React.Component {
    render() {
        const { question, users, userId, saveQuestionAnswer } = this.props;

        if(question === undefined){
            return <Redirect to={"/404"} />
        }
        return hasAnswered(question, users[userId])
            ? <CardResult 
                question={question} 
                user={users[question.author]}
                auther={users[userId]} 
                />
            : <CardQuestion
                question={question}
                user={users[question.author]}
                onSubmit={saveQuestionAnswer}
                autherUser={userId}
            />

    }
}

const mapStateToProps = (state, ownProps) => ({
    question: getQuestion(state, ownProps.match.params.qid),
    users: getUsers(state),
    userId: getAuthor(state)
});

const mapDispatchToProps = ({
    saveQuestionAnswer
})

export default connect(mapStateToProps, mapDispatchToProps)(View);
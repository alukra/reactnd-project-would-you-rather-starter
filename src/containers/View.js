import React from 'react';
import { connect } from 'react-redux';
import { getUsers, getQuestion, getAuthor } from '../reducers';
import styles from "../styles";
import Panel from "muicss/lib/react/panel";
import { hasAnswered } from "../utils";
import CardResult from "../components/CardResult";
import CardQuestion from "../components/CardQuestion";

class View extends React.Component {

    render() {
        const { question, users, userId } = this.props
        return <Panel style={styles.panel} >
            {hasAnswered(question, users[userId])
                ? <CardResult question={question} user={users[question.author]} />
                : <CardQuestion question={question} user={users[question.author]} />
            }
        </Panel>
    }
}

const mapStateToProps = (state, ownProps) => ({
    question: getQuestion(state, ownProps.match.params.qid),
    users: getUsers(state),
    userId: getAuthor(state)
})

export default connect(mapStateToProps, undefined)(View)
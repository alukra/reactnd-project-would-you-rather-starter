import React from 'react';
import { connect } from 'react-redux';
import { getUsers, getQuestions, getAuthor } from '../reducers';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import Panel from 'muicss/lib/react/panel';
import ListQuestion from '../components/ListQuestion';
import {typeQuestion } from '../utils';
import styles from '../styles';

class Home extends React.Component {
    render() {
        const { users, questions, userId } = this.props
        return <Panel style={styles.panel} >
            <Tabs defaultSelectedIndex={0} justified={true}>
                <Tab label="Unanswered Questions">
                    <ListQuestion
                        users={users}
                        questions={typeQuestion("answered", questions, users[userId])}
                    />
                </Tab>
                <Tab label="Answered Questions">
                    <ListQuestion
                        users={users}
                        questions={typeQuestion("unanswered", questions, users[userId])}
                    />
                </Tab>
            </Tabs>
        </Panel>
    }
}

const mapStateToProps = (state) => ({
    users: getUsers(state),
    questions: getQuestions(state),
    userId: getAuthor(state)
})

export default connect(mapStateToProps, undefined)(Home)
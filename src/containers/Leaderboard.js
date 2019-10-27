import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../reducers';
import Panel from 'muicss/lib/react/panel';
import styles from '../styles';


class Leaderboard extends React.Component {

    render() {
        const { users } = this.props
        return <Panel style={styles.panel} >
            {Object.keys(users).sort((a,b)=> {
                return (users[b].questions.length + Object.keys(users[b].answers).length) - (users[a].questions.length + Object.keys(users[a].answers).length) 
            }).map(userId => {
                const numQuestion = users[userId].questions.length;
                const numAnswer = Object.keys(users[userId].answers).length; 
                return <Panel key={userId} style={styles.gridCard2}>
                    <span style={styles.cardImage}>
                        <img
                            src={users[userId].avatarURL}
                            alt="avatar"
                            style={styles.avatarList}
                        />
                    </span>
                    <span className="mui--divider-left" style={styles.gridBlock}>
                        <div className="mui--text-dark mui--text-title">{users[userId].name}</div>
                        <div className="mui--text-body1">
                            {`Answered questions: ${numAnswer}`}
                        </div>
                        <div className="mui--text-body1">
                            {`Created questions: ${numQuestion}`}
                        </div>
                    </span>
                    <span>
                        <Panel>
                            <div style={styles.titlePanel}>
                                <div className="mui--text-headline">Score</div>
                            </div>
                            <div style={styles.score}>
                                {numQuestion + numAnswer}
                            </div>
                        </Panel>
                    </span>
                </Panel>
            })}
        </Panel>
    }
}

const mapStateToProps = (state) => ({
    users: getUsers(state)
});

export default connect(mapStateToProps, undefined)(Leaderboard);
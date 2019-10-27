import React from 'react';
import styles from '../styles';
import Panel from 'muicss/lib/react/panel';
import { getAnswered } from '../utils';

const getPercentage = (question) => {
    let totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
    return ({
        optionOneVotes: (question.optionOne.votes.length / totalVotes) * 100,
        optionTwoVotes: (question.optionTwo.votes.length / totalVotes) * 100,
        totalVotes
    });
}

const CardResult = ({ user, question, auther }) => {
    const percentage = getPercentage(question);
    return <Panel key={question.id} style={styles.panel}>
        <div style={styles.titlePanel}>
            <div className="mui--text-headline">asked by {user.name}:</div>
        </div>
        <div style={styles.gridCard}>
            <span style={styles.cardImage}>
                <img src={user.avatarURL} alt="avatar" style={styles.avatarList} />
            </span>
            <span className="mui--divider-left" style={styles.gridBlock}>
                <div className="mui--text-dark mui--text-title">Results</div>
                <Panel style={getAnswered(question, auther) === "optionOne" ? styles.choiceSelected : undefined} >
                    {getAnswered(question, auther) === "optionOne" ? <div className="mui--text-body1">You voted</div> : undefined}
                    <div className="mui--text-title">{question.optionOne.text}</div>
                    <div style={styles.progressBar}>
                        <div style={{ ...styles.progress, width: `${percentage.optionOneVotes}%` }}></div>
                    </div>
                    <div className="mui--text-body1">{question.optionOne.votes.length} of {percentage.totalVotes} votes</div>
                </Panel>
                <Panel style={getAnswered(question, auther) === "optionTwo" ? styles.choiceSelected : undefined}>
                    {getAnswered(question, auther) === "optionTwo" ? <div className="mui--text-body1">You voted</div> : undefined}
                    <div className="mui--text-title">{question.optionTwo.text}</div>
                    <div style={styles.progressBar}>
                        <div style={{ ...styles.progress, width: `${percentage.optionTwoVotes}%` }}></div>
                    </div>
                    <div className="mui--text-body1">{question.optionTwo.votes.length} of {percentage.totalVotes} votes</div>
                </Panel>
            </span>
        </div>
    </Panel>
}

export default CardResult
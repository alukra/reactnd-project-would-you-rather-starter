import React from 'react';
import styles from '../styles';
import { Link } from 'react-router-dom';
import Container from 'muicss/lib/react/container';
import Panel from 'muicss/lib/react/panel';
import Button from 'muicss/lib/react/button';
import { findUserQuestion } from '../utils'

const ListQuestion = ({ users, questions }) => {
    return <Container>
        {questions.map(question => {
            const user = findUserQuestion(users, question.id)
            return <Panel key={question.id}>
                <div style={styles.titlePanel}>
                    <div className="mui--text-headline">{user.name} ask:</div>
                </div>
                <div style={styles.gridCard}>
                    <span style={styles.cardImage}>
                        <img src={user.avatarURL} alt="avatar" style={styles.avatarList} />
                    </span>
                    <span className="mui--divider-left" style={styles.gridBlock}>
                        <div className="mui--text-dark mui--text-title">Would you rather</div>
                        <div className="mui--text-body1">
                            {`...${question.optionOne.text.substring(0, 15)}...`} 
                        </div>
                    </span>
                </div>
                <Link to={`/view/${question.id}`} >
                    <Button style={styles.blockButton}> View poll</Button>
                </Link>
            </Panel>
        })}
    </Container>
}

export default ListQuestion
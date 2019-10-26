import React from 'react';
import styles from '../styles';
import Panel from 'muicss/lib/react/panel';
import Button from 'muicss/lib/react/button';

const CardResult = ({ user, question }) => {
    return <Panel key={question.id}>
        <div style={styles.titlePanel}>
            <div className="mui--text-headline">{user.name} ask:</div>
        </div>
        <div style={styles.gridCard}>
            <span style={styles.cardImage}>
                <img src={user.avatarURL} alt="avatar" style={styles.avatarList} />
            </span>
            <span className="mui--divider-left" style={styles.gridBlock}>
                <div className="mui--text-dark mui--text-title">Would you rather...</div>
                <div className="mui--text-body1">
                    estoy dentro de result
                </div>
            </span>
        </div>
        <Button style={styles.blockButton}> Submit </Button>
    </Panel>
}

export default CardResult
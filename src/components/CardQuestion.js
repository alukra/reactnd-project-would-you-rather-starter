import React from 'react';
import styles from '../styles';
import Panel from 'muicss/lib/react/panel';
import Radio from 'muicss/lib/react/radio';
import Button from 'muicss/lib/react/button';

class CardQuestion extends React.Component {
    state = {
        value: undefined
    }

    handleChange = (event) => this.setState({ value: event.target.value });

    handleSubmit = () => {
        const { value} = this.state;
        const { autherUser, question} = this.props;
        this.props.onSubmit(autherUser, question.id ,value);
    }

    render() {
        const { user, question } = this.props
        return <Panel key={question.id} style={styles.panel} >
            <div style={styles.titlePanel}>
                <div className="mui--text-headline">{user.name} ask:</div>
            </div>
            <div style={styles.gridCard}>
                <span style={styles.cardImage}>
                    <img src={user.avatarURL} alt="avatar" style={styles.avatarList} />
                </span>
                <span className="mui--divider-left" style={styles.gridBlock}>
                    <div className="mui--text-dark mui--text-title">Would you rather...</div>
                    <form>
                        <Radio
                            label={question.optionOne.text}
                            value="optionOne"
                            checked={this.state.value === 'optionOne'}
                            onChange={this.handleChange.bind(this)}
                        />
                        <Radio
                            label={question.optionTwo.text}
                            value="optionTwo"
                            checked={this.state.value === 'optionTwo'}
                            onChange={this.handleChange.bind(this)}
                        />
                    </form>
                </span>
            </div>
            <Button style={styles.blockButton} onClick={this.handleSubmit} > Submit </Button>
        </Panel>
    }
}

export default CardQuestion
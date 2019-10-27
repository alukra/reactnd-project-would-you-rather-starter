import React from 'react'
import styles from '../styles';
import { connect } from 'react-redux';
import { getAuthor } from '../reducers';
import { createQuestion } from '../actions';
import { Redirect } from 'react-router-dom';
import Panel from 'muicss/lib/react/panel';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

class CreateQuestion extends React.Component {

    state = {
        optionOneText: "",
        optionTwoText: "",
        completed: false
    };

    handleOption = (value, option) => {
        this.setState({ [option]: value });
    }

    handleSubmit = () => {
        const { optionOneText, optionTwoText } = this.state;
        const { author, createQuestion } = this.props;
        createQuestion({
            optionOneText,
            optionTwoText,
            author
        }).then(() => {
            this.setState({ completed: true });
        });
    }

    render() {
        const { optionOneText, optionTwoText, completed } = this.state;
        if (completed) {
            return <Redirect to="/" />
        }
        return <Panel style={styles.panel}>
            <div style={styles.titlePanel}>
                <div className="mui--text-headline">Create new question</div>
            </div>
            <div>
                <div className="mui--text-dark mui--text-body1 mui--text-left">Complete the question:</div>
                <div className="mui--text-dark mui--text-title mui--text-left">Would you rather...</div>
            </div>
            <Input
                value={optionOneText}
                onChange={(event) => { this.handleOption(event.target.value, "optionOneText") }}
                label="Option 1"
                floatingLabel={true}
            />
            <div className="mui--text-dark mui--text-body1">or</div>

            <Input
                value={optionTwoText}
                onChange={(event) => { this.handleOption(event.target.value, "optionTwoText") }}
                label="Option 2"
                floatingLabel={true}
            />
            <Button style={styles.blockButton} onClick={this.handleSubmit}>Submit</Button>
        </Panel>
    }
}

const mapStateToProps = (state) => ({
    author: getAuthor(state)
});

const mapDispatchToProps = ({
    createQuestion
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
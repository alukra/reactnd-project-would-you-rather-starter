import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles';
import { withRouter, Redirect } from "react-router-dom"
import { login } from '../actions';
import { getUsers, getAuthor } from '../reducers';
import Panel from 'muicss/lib/react/panel';
import Button from 'muicss/lib/react/button';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';

class Login extends React.Component {
    state = {
        value: undefined,
        needRedirect: false
    }

    handleChange = (value) => {
        this.setState(() => ({ value }))
    }

    handleClick = () => {
        const { value } = this.state
        if (value) {
            this.props.login(value)
            this.setState(() => ({ needRedirect: true }))
        }
    }

    render() {
        const { value, needRedirect } = this.state
        const { users, location } = this.props
        if (needRedirect) {
            let { from } = location.state || { from: { pathname: '/' } };
            return <Redirect to={from} />
        }
        return <Panel style={styles.panel} className="mui--text-center">
            <div style={styles.titlePanel}>
                <div className="mui--text-headline">Welcome to Would you rather app!</div>
                <img src={"http://placekitten.com/g/400/300"} alt="Would you rather logo" style={styles.loginImagen} />
                <div className="mui--text-title">Sign in</div>
            </div>
            <Dropdown label={value ? value : "Select user to sign in"} onSelect={this.handleChange} >
                {Object.keys(users).map(userId => {
                    return <DropdownItem
                        key={userId}
                        style={styles.loginSelectItem}
                        value={users[userId].id}
                    >
                        <img src={users[userId].avatarURL} alt="avatar" style={styles.avatar} /> {users[userId].name}
                    </DropdownItem>
                })}
            </Dropdown>
            <Button onClick={this.handleClick}>Sign in</Button>
        </Panel>

    }
}

const mapStateToProps = (state) => ({
    users: getUsers(state),
    isAuth: getAuthor(state) === undefined ? false : true,
})

const mapDispatchToProps = ({ login })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

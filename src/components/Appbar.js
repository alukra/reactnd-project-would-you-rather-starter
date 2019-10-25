import React from 'react';
import { Link } from 'react-router-dom';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import styles from '../styles';

class AppbarNavigator extends React.Component {

    render() {
        const { user, isAuth, logout } = this.props
        return <Appbar style={styles.appbar}>
            <div style={styles.navL}>
                <Link to={"/"}>
                    <Button variant="flat" size="large" style={styles.button}>
                        <div className="mui--text-button">Home</div>
                    </Button>
                </Link>
                <Link to={"/add"}>
                    <Button variant="flat" size="large" style={styles.button}>
                        <div className="mui--text-button">Create Question</div>
                    </Button>
                </Link>
                <Link to={"/leaderboard"}>
                    <Button variant="flat" size="large" style={styles.button}>
                        <div className="mui--text-button">Leaderboard</div>
                    </Button>
                </Link>
            </div>
            {isAuth
                ? <div style={styles.navR}>
                    <div className="mui--text-button">Hello {user.name} </div>
                    <img src={user.avatarURL} style={styles.avatar} alt="avatar" />
                    <Button variant="flat" size="large" style={styles.button} onClick={logout}>
                        <div className="mui--text-button">Log out</div>
                    </Button>
                </div>
                : undefined
            }
        </Appbar>
    }
}

export default AppbarNavigator
import React from 'react';
import { Link } from 'react-router-dom';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import styles from '../styles';

class AppbarNavigator extends React.Component {

    render() {
        return <Appbar style={styles.appbar}>
            <div style={styles.navL}>
                <Link to={"/"}>
                    <Button variant="flat" size="large" style={styles.button}>
                        <div className="mui--text-button">Home</div>
                    </Button>
                </Link>
                <Link to={"/create"}>
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
            <div style={styles.navR}>
                <div className="mui--text-button">Hello Angel </div>
                <img src="https://robohash.org/angel" style={styles.avatar} />
                <Button variant="flat" size="large" style={styles.button}>
                    <div className="mui--text-button">Log out</div>
                </Button>
            </div>
        </Appbar>
    }
}

export default AppbarNavigator
import React from 'react';
import { Link } from 'react-router-dom'
import errorImage from '../images/link.png';
import Panel from 'muicss/lib/react/panel';
import Button from 'muicss/lib/react/button';
import styles from '../styles';

const Error404 = ({ location }) => {
    return <Panel style={styles.panel}>
        <div className="mui--text-display1">ERROR 404</div>
        <img src={errorImage} alt="Error 404 Page not found" style={styles.image404} />
        <div className="mui--text-title">If you find this link, tell me.</div>
        <Link to="/">
            <Button color="primary">Return to Home</Button>
        </Link>
    </Panel>
}


export default Error404
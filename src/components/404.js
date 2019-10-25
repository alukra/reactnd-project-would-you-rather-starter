import React from 'react';
import { Link } from 'react-router-dom'
import errorImage from '../images/link.jpg';
import Panel from 'muicss/lib/react/panel';
import Button from 'muicss/lib/react/button';

const Error404 = ({ location }) => {
    return <Panel className="mui--text-center">
        <img src={errorImage} />
        <div className="mui--text-title">Please if you find him tell us</div>
        <div className="mui--text-title">Missing {location.pathname}</div>
        <Link to="/">
            <Button color="primary">Home</Button>
        </Link>
    </Panel>
}


export default Error404
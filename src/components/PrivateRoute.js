import React from 'react';
import { connect } from 'react-redux';
import { getAuthor } from '../reducers';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
    return <Route {...rest} render={(props) => (
        isAuth
            ? <Component {...props} />
            : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: props.location }
                }}
            />
    )} />
}

const mapStateToProps = (state) => ({
    isAuth: getAuthor(state) === undefined ? false : true
})

export default connect(mapStateToProps, undefined)(PrivateRoute);
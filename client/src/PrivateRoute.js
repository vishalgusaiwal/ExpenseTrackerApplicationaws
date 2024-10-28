import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth/auth-helper.js';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                auth.isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
};

export default PrivateRoute;

import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const ProtectedRoute = ({ component: Component, bearer, ...rest }) => (
    <Route render={props =>
        bearer ? <Component {...props} {...rest} bearer={bearer} />
            : <Redirect to="/" />
    }
    />
);

export default ProtectedRoute;
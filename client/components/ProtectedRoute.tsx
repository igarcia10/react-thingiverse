import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { EThingsType } from './Things';
import { AuthContext, IAuthContextState } from '../contexts/AuthContext';

interface IProtectedRouteProps {
    component: React.FC,
    path: string,
    thingsType?: EThingsType
};

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ component: Component, ...rest }) => {

    const { bearer } = useContext<IAuthContextState>(AuthContext);

    return (
        <Route {...rest} render={props => bearer ? <Component {...props} {...rest} /> : <Redirect to="/" />} />
    );
};

export default ProtectedRoute;
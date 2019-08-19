import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { EThingsType, IThingsProps } from './Things';
import { IThing } from './Thing';

interface IProtectedRouteProps {
    component: React.FC<IThing>,
    bearer: string,
    path: string,
    thingsType?: EThingsType
};

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ component: Component, bearer, ...rest }) => (
    <Route render={props => bearer ? <Component {...props} {...rest} /> : <Redirect to="/" />} />
);

export default ProtectedRoute;
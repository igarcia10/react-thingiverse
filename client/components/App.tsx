import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import { Things, ThingsType } from './Things';
import ProtectedRoute from './ProtectedRoute';
import Landing from './Landing';
import AuthContext from '../contexts/AuthContext';
import AuthStateProvider from './AuthStateProvider';
import Login from './Login';

const App = () => (
    <Router>
        <AuthStateProvider>
            <AuthContext.Consumer>
                {context => (
                    <div>
                        <Nav {...context} />
                        <Switch>
                            <Route exact path="/" render={() => context.bearer ? <Redirect to="/latest" /> : <Landing />} />
                            <Route path="/login" component={Login} />} />
                            <ProtectedRoute path="/latest" bearer={context.bearer} thingsType={ThingsType.Latest} component={Things} />
                            <ProtectedRoute path="/newest" bearer={context.bearer} thingsType={ThingsType.Newest} component={Things} />
                            <ProtectedRoute path="/popular" bearer={context.bearer} thingsType={ThingsType.Popular} component={Things} />
                            <ProtectedRoute path="/featured" bearer={context.bearer} thingsType={ThingsType.Featured} component={Things} />
                        </Switch>
                    </div>
                )}
            </AuthContext.Consumer>
        </AuthStateProvider>
    </Router>
);

export default App;
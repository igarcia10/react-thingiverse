import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import { Things, EThingsType } from './Things';
import ProtectedRoute from './ProtectedRoute';
import Landing from './Landing';
import { AuthContext } from '../contexts/AuthContext';
import AuthStateProvider from '../contexts/AuthStateProvider';
import Login from './Login';
import { Thing } from './Thing';

const App: React.FC = () => {

    const thingsURI: string = "things";

    return (
        <Router>
            <AuthStateProvider>
                <AuthContext.Consumer>
                    {context => (
                        <div>
                            <Nav uri={thingsURI} />
                            <Switch>
                                <Route exact path="/" render={() => context.bearer ? <Redirect to={`/${thingsURI}/newest`} /> : <Landing />} />
                                <Route path="/login" component={Login} />} />
                                <ProtectedRoute path={`/${thingsURI}/newest`} thingsType={EThingsType.Newest} component={Things} />
                                <ProtectedRoute path={`/${thingsURI}/popular`} thingsType={EThingsType.Popular} component={Things} />
                                <ProtectedRoute path={`/${thingsURI}/featured`} thingsType={EThingsType.Featured} component={Things} />
                                <ProtectedRoute path={`/${thingsURI}/verified`} thingsType={EThingsType.Verified} component={Things} />
                                <ProtectedRoute path={`/${thingsURI}/:id`} component={Thing} />
                            </Switch>
                        </div>
                    )}
                </AuthContext.Consumer>
            </AuthStateProvider>
        </Router>
    );
};

export default App;
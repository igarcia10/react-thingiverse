import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import { Things, EThingsType } from './Things';
import ProtectedRoute from './ProtectedRoute';
import Landing from './Landing';
import { AuthContext } from '../contexts/AuthContext';
import AuthStateProvider from '../contexts/AuthStateProvider';
import Login from './Login';

const App: React.FC = () => (
    <Router>
        <AuthStateProvider>
            <AuthContext.Consumer>
                {context => (
                    <div>
                        <Nav {...context} />
                        <Switch>
                            <Route exact path="/" render={() => context.bearer ? <Redirect to="/latest" /> : <Landing />} />
                            <Route path="/login" component={Login} />} />
                            <ProtectedRoute path="/latest" bearer={context.bearer} thingsType={EThingsType.Latest} component={Things} />
                            <ProtectedRoute path="/newest" bearer={context.bearer} thingsType={EThingsType.Newest} component={Things} />
                            <ProtectedRoute path="/popular" bearer={context.bearer} thingsType={EThingsType.Popular} component={Things} />
                            <ProtectedRoute path="/featured" bearer={context.bearer} thingsType={EThingsType.Featured} component={Things} />
                        </Switch>
                    </div>
                )}
            </AuthContext.Consumer>
        </AuthStateProvider>
    </Router>
);

export default App;
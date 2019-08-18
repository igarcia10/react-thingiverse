import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import { Things, ThingsType } from './Things';
import ProtectedRoute from './ProtectedRoute';
import Landing from './Landing';
import { AuthProvider, AuthConsumer } from './AuthContext';
import Login from './Login';

const App = () => (
    <Router>
        <AuthProvider>
            <AuthConsumer>
                {({ bearer, login, logout }) => (
                    <div>
                        <Nav bearer={bearer} logout={logout} />
                        <Switch>
                            <Route exact path="/" render={() => bearer ? <Redirect to="/latest" /> : <Landing />} />
                            <Route path="/login" render={props => <Login {...props} login={login} />} />
                            <ProtectedRoute path="/latest" thingsType={ThingsType.Latest} component={Things} />
                            <ProtectedRoute path="/newest" thingsType={ThingsType.Newest} component={Things} />
                            <ProtectedRoute path="/popular" thingsType={ThingsType.Popular} component={Things} />
                            <ProtectedRoute path="/featured" thingsType={ThingsType.Featured} component={Things} />
                        </Switch>
                    </div>
                )}
            </AuthConsumer>
        </AuthProvider>
    </Router>
);

export default App;
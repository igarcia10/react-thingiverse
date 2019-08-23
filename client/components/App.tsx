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
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/',
    headers: {
        Authorization: localStorage.getItem('auth') || ''
    }
});

const App: React.FC = () => (
    <Router>
        <AuthStateProvider>
            <AuthContext.Consumer>
                {({ bearer }) => (
                    <ApolloProvider client={client}>
                        <Nav />
                        <Switch>
                            <Route exact path="/" render={() => bearer ? <Redirect to='/things/newest' /> : <Landing />} />
                            <Route path="/login" component={Login} />} />
                            <ProtectedRoute path="/things/newest" thingsType={EThingsType.Newest} component={Things} />
                            <ProtectedRoute path="/things/popular" thingsType={EThingsType.Popular} component={Things} />
                            <ProtectedRoute path="/things/featured" thingsType={EThingsType.Featured} component={Things} />
                            <ProtectedRoute path="/things/verified" thingsType={EThingsType.Verified} component={Things} />
                            <ProtectedRoute path="/things/:id" component={Thing} />
                        </Switch>
                    </ApolloProvider>
                )}
            </AuthContext.Consumer>
        </AuthStateProvider>
    </Router>
);

export default App;
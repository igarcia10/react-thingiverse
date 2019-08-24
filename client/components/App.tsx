import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Header from './Header';
import { Things, EThingsType } from './Things';
import ProtectedRoute from './ProtectedRoute';
import Landing from './Landing';
import { AuthContext } from '../contexts/AuthContext';
import AuthStateProvider from '../contexts/AuthStateProvider';
import Login from './Login';
import { Thing } from './Thing';
import { ThemeProvider } from 'styled-components';

export interface ITheme {
    theme: IThemeProps
}

interface IThemeProps {
    primary: string,
    secondary: string,
    font: string
};

const theme: IThemeProps = {
    primary: '#f9e79f',
    secondary: ' #58d68d ',
    font: '"Antenna",Helvetica,Arial,sans-serif'
}

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/',
    headers: {
        Authorization: localStorage.getItem('auth') || ''
    }
});

const App: React.FC = () => (
    <Router>
        <ThemeProvider theme={theme}>
            <AuthStateProvider>
                <AuthContext.Consumer>
                    {({ bearer }) => (
                        <ApolloProvider client={client}>
                            <Header />
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
        </ThemeProvider>
    </Router>
);

export default App;
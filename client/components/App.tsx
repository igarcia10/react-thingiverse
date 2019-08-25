import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Header from './Header';
import { ThingList, EThingsType } from './ThingList';
import ProtectedRoute from './ProtectedRoute';
import Landing from './Landing';
import { AuthContext } from '../contexts/AuthContext';
import AuthStateProvider from '../contexts/AuthStateProvider';
import Login from './Login';
import { ThingDetail } from './ThingDetail';
import { ThemeProvider } from 'styled-components';

export interface ITheme {
    theme: IThemeProps
}

interface IThemeProps {
    primary: string,
    secondary: string,
    tertiary: string,
    shadow: string,
    font: string,
    fontColor: string
};

const theme: IThemeProps = {
    primary: '#f9e79f',
    secondary: '#fcf3cf',
    tertiary: '#f39c12',
    shadow: '10px 10px 7px -4px rgba(166,166,166,1)',
    font: '"Antenna",Helvetica,Arial,sans-serif',
    fontColor: 'rgb(46, 68, 78)'
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
                                <ProtectedRoute path="/things/newest" thingsType={EThingsType.Newest} component={ThingList} />
                                <ProtectedRoute path="/things/popular" thingsType={EThingsType.Popular} component={ThingList} />
                                <ProtectedRoute path="/things/featured" thingsType={EThingsType.Featured} component={ThingList} />
                                <ProtectedRoute path="/things/verified" thingsType={EThingsType.Verified} component={ThingList} />
                                <ProtectedRoute path="/things/:id" component={ThingDetail} />
                            </Switch>
                        </ApolloProvider>
                    )}
                </AuthContext.Consumer>
            </AuthStateProvider>
        </ThemeProvider>
    </Router>
);

export default App;
import React, { useState, createContext } from 'react';

interface AuthContextInterface {
    bearer: string,
    login: Function
    logout: Function
}
const defaultAuthContext: AuthContextInterface = {
    bearer: '',
    login: () => { },
    logout: () => { }
}

const { Provider, Consumer } = createContext<AuthContextInterface>(defaultAuthContext);

const AuthProvider = props => {
    const [bearer, setBearer] = useState(localStorage.getItem('bearer') || '');

    const login = (bearer: string) => {
        localStorage.setItem('bearer', bearer);
        setBearer(bearer);
    }

    const logout = () => {
        localStorage.removeItem('bearer');
        setBearer('');
    }

    return (
        <Provider value={{
            bearer: bearer,
            login: login,
            logout: logout
        }}>
            {props.children}
        </Provider>
    );
}

const AuthConsumer = Consumer;

export { AuthProvider, AuthConsumer };
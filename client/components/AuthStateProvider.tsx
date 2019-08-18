import React, { useState } from 'react';
import AuthContext from '../contexts/AuthContext';

const AuthStateProvider = props => {
    const [bearer, setBearer] = useState(localStorage.getItem('auth') || '');
    const [isLoading, setLoading] = useState(false);

    const login = (bearer: string) => {
        localStorage.setItem('auth', bearer);
        setBearer(bearer);
    }

    const logout = () => {
        localStorage.removeItem('auth');
        setBearer('');
    }

    return (
        <AuthContext.Provider value={{
            bearer: bearer,
            login: login,
            logout: logout,
            isLoading: isLoading,
            setLoading: setLoading
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthStateProvider;
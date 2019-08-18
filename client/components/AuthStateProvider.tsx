import React, { useState } from 'react';
import AuthContext from '../contexts/AuthContext';

const AuthStateProvider = props => {
    const [bearer, setBearer] = useState(localStorage.getItem('bearer') || '');
    const [isLoading, setLoading] = useState(false);

    const login = (bearer: string) => {
        localStorage.setItem('bearer', bearer);
        setBearer(bearer);
    }

    const logout = () => {
        localStorage.removeItem('bearer');
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
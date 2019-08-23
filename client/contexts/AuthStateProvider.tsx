import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthStateProvider: React.FC = props => {
    const [apiUrl] = useState<string>(`https://www.thingiverse.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&response_type=code`);
    const [bearer, setBearer] = useState<string>(localStorage.getItem('auth') || '');
    const [thingsURI] = useState<string>('things');

    const login = bearer => {
        localStorage.setItem('auth', bearer);
        setBearer(bearer);
    }

    const logout = () => {
        localStorage.removeItem('auth');
        setBearer('');
    }

    return (
        <AuthContext.Provider value={{
            apiUrl,
            bearer,
            login,
            logout,
            thingsURI
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthStateProvider;
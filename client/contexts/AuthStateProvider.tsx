import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthStateProvider: React.FC = props => {
    const [apiUrl] = useState<string>(`https://www.thingiverse.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&response_type=code`);
    const [bearer, setBearer] = useState<string>(localStorage.getItem('auth') || '');
    const [loading, setLoading] = useState<boolean>(false);

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
            loading,
            setLoading
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthStateProvider;
import React, { useEffect, useContext } from 'react';
import AuthContext from '../contexts/AuthContext'
import axios from 'axios';

const redirect = () => {
    window.location.href = `https://www.thingiverse.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&response_type=code`;
}

const Login = props => {

    const context = useContext(AuthContext);

    useEffect(() => {

        if (context.bearer) {
            props.history.push('/latest');
            return;
        }

        context.setLoading(true);
        const code = props.location.search.split("=")[1];

        if (code) {
            axios.post('http://localhost:3000/auth', { code })
                .then(({ data: { token_type, access_token } }) => {
                    token_type = "bearer";
                    access_token = "123456";
                    if (access_token) {
                        const bearer = `${token_type} ${access_token}`;
                        context.login(bearer);
                        props.history.push('/latest');
                        context.setLoading(false);
                    } else {
                        redirect();
                    }
                });
        } else {
            redirect();
        }
    }, []);

    return <div>Logging in...</div>;
}

export default Login;
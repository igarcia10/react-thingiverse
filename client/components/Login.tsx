import React, { useEffect } from 'react';
import axios from 'axios';

const Login = props => {

    useEffect(() => {
        const code = props.location.search.split("=")[1];

        if (code) {
            axios.post('http://localhost:3000/auth', { code })
                .then(({ data: { token_type, access_token } }) => {

                    const bearer = `${token_type} ${access_token}`;
                    props.login(bearer);
                    props.history.push('/latest');
                });

        } else {
            window.location.href = `https://www.thingiverse.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&response_type=code`;
        }
    }, []);

    return <div>Logging in...</div>;
}

export default Login;
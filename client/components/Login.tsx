import React, { useEffect, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { AuthContext, IAuthContextState } from '../contexts/AuthContext';
import axios from 'axios';


const Login: React.FC<RouteComponentProps> = props => {

    const context: IAuthContextState = useContext(AuthContext);

    const redirect = () => {
        window.location.href = context.apiUrl;
    }

    useEffect(() => {

        if (context.bearer) {
            props.history.push('/latest');
            return;
        }

        const code = props.location.search.split("=")[1];

        if (code) {
            axios.post('http://localhost:3000/auth', { code })
                .then(({ data }) => {
                    const tokenData = data.split('&').flatMap(t => t.split("="));
                    const accessToken = tokenData[1];
                    const tokenType = tokenData[3];

                    if (tokenType && accessToken) {
                        const bearer = `${tokenType} ${accessToken}`;
                        context.login(bearer);
                        props.history.push('/newest');
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
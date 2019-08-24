import React, { useEffect, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { AuthContext, IAuthContextState } from '../contexts/AuthContext';
import { Content } from '../elements/index'


const Login: React.FC<RouteComponentProps> = props => {

    const context: IAuthContextState = useContext(AuthContext);
    context.setLoading(true);

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
                        window.location.href = "http://localhost:1234/";
                    } else {
                        redirect();
                    }
                });
        } else {
            redirect();
        }
    }, []);

    return <Content>&#x231B; Logging in...</Content>;
};

export default Login;
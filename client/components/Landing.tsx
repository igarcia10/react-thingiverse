import React, { useContext } from 'react'
import { IAuthContextState, AuthContext } from '../contexts/AuthContext';
import { Content } from '../elements/index';

const Landing: React.FC = () => {

    const { loading }: IAuthContextState = useContext(AuthContext);

    return (
        <Content>
            {loading ? <div>&#x23F3; Redirecting to Thingiverse...</div> : <div>You must log in to Thingiverse.</div>}
        </Content >
    );
}


export default Landing;
import React, { useContext } from 'react'
import { IAuthContextState, AuthContext } from '../contexts/AuthContext';

const Landing: React.FC = () => {

    const { loading }: IAuthContextState = useContext(AuthContext);

    return (
        <div>
            {loading ? <div>Loading...</div> : <div>You must log in to Thingiverse.</div>}
        </div >
    );
}


export default Landing;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IAuthContextState, AuthContext } from '../contexts/AuthContext';
import { EThingsType } from './Things';

interface INavProps {
    uri: string
}

const Nav: React.FC<INavProps> = ({ uri }) => {
    const { bearer, logout, apiUrl } = useContext<IAuthContextState>(AuthContext);

    return (
        <nav>
            <div>
                {bearer ? (
                    <ul>
                        {Object.keys(EThingsType).map(t =>
                            <li key={t}><Link to={`/${uri}/${EThingsType[t]}`}>{EThingsType[t]}</Link></li>
                        )}
                        <button onClick={logout}>logout</button>
                    </ul>
                ) :
                    <button onClick={() => window.location.href = apiUrl}>Log in</button>}
            </div>
        </nav>
    );
};

export default Nav;
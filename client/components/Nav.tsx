import React from 'react';
import { Link } from 'react-router-dom';
import { IAuthContext } from '../contexts/AuthContext';

const Nav: React.FC<IAuthContext> = ({ apiUrl, bearer, logout }) => (
    <nav>
        <div>
            {bearer ? (
                <ul>
                    <li><Link to="/latest">latest</Link></li>
                    <li><Link to="/newest">newest</Link></li>
                    <li><Link to="/popular">popular</Link></li>
                    <li><Link to="/featured">featured</Link></li>
                    <button onClick={logout}>logout</button>
                </ul>
            ) :
                <button onClick={() => window.location.href = apiUrl}>Log in</button>}
        </div>
    </nav>
);

export default Nav;
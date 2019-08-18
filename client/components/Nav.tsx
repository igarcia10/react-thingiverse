import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ bearer, logout }) => (
    <nav>
        <div>
            {bearer ? (
                <ul>
                    <li><Link to="/latest">latest</Link></li>
                    <li><Link to="/newest">newest</Link></li>
                    <li><Link to="/popular">popular</Link></li>
                    <li><Link to="/featured">featured</Link></li>
                    <button onClick={() => logout()}>logout</button>
                </ul>
            ) : ''}
        </div>
    </nav>
);

export default Nav;
import React from 'react';
import { Link } from 'react-router-dom';

const URL = `https://www.thingiverse.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&response_type=code`;

const Nav = props => (
    <nav>
        <div>
            {props.bearer ? (
                <ul>
                    <li><Link to="/latest">latest</Link></li>
                    <li><Link to="/newest">newest</Link></li>
                    <li><Link to="/popular">popular</Link></li>
                    <li><Link to="/featured">featured</Link></li>
                    <button onClick={() => props.logout()}>logout</button>
                </ul>
            ) :
                <button disabled={props.isLoading} onClick={() => window.location.href = URL}>Log in</button>}
        </div>
    </nav>
);

export default Nav;
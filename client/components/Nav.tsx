import React from 'react';
import { Link } from 'react-router-dom';
import { IAuthContext } from '../contexts/AuthContext';

const Nav: React.FC<IAuthContext> = props => {

    const redirect = () => {
        props.setLoading(true);
        window.location.href = props.apiUrl;
    };

    return (
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
                    <button disabled={props.isLoading} onClick={redirect}>Log in</button>}
            </div>
        </nav>
    )
};

export default Nav;
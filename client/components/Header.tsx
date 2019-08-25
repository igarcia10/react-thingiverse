import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IAuthContextState, AuthContext } from '../contexts/AuthContext';
import { EThingsType } from './ThingList';
import { Button, Nav, Logo } from '../elements/index'

const Header: React.FC = () => {
    const { bearer, logout, apiUrl, loading, setLoading } = useContext<IAuthContextState>(AuthContext);

    const clickFn = () => {
        setLoading(true);
        window.location.href = apiUrl;
    }

    const linksMenu = (
        <Nav>
            <Logo></Logo>
            {Object.keys(EThingsType).map(t =>
                <span key={t}><Link to={`/things/${EThingsType[t]}`}>{EThingsType[t]}</Link></span>
            )}
            <Button onClick={logout}>logout</Button>
        </Nav>
    );

    const loginHeader = (
        <Nav>
            <Logo></Logo>
            <Button disabled={loading} onClick={clickFn}>Log in</Button>
        </Nav>
    );

    return (<div>
        {bearer ? linksMenu : loginHeader}
    </div >);
};

export default Header;
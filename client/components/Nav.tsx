import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IAuthContextState, AuthContext } from '../contexts/AuthContext';
import { EThingsType } from './Things';
import { Button, Nav as StyledNav, Logo } from '../elements/index'

const Nav: React.FC = () => {
    const { bearer, logout, apiUrl, loading, setLoading } = useContext<IAuthContextState>(AuthContext);

    const clickFn = () => {
        setLoading(true);
        window.location.href = apiUrl;
    }

    const linksMenu = (
        <StyledNav>
            <Logo></Logo>
            {Object.keys(EThingsType).map(t =>
                <span key={t}><Link to={`/things/${EThingsType[t]}`}>{EThingsType[t]}</Link></span>
            )}
            <Button onClick={logout}>logout</Button>
        </StyledNav>
    );

    const loginHeader = (
        <StyledNav>
            <Logo></Logo>
            <Button disabled={loading} onClick={clickFn}>Log in</Button>
        </StyledNav>
    );

    return (<div>
        {bearer ? linksMenu : loginHeader}
    </div >);
};

export default Nav;
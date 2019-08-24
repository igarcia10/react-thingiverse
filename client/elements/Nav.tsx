import styled from 'styled-components';

export const Logo = styled.div`
    background: url(https://cdn.thingiverse.com/site/img/thingiverse-logo-2015.png) center center no-repeat;
    width: 128px;
    height: 23px;
    background-size: auto; 
    background-size: cover;
`;

export const Nav = styled.nav`
    z-index: 1;
    top: 0;
    left:0;
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    background: ${props => props.theme.primary};
    width: 100%;
    font-family: ${props => props.theme.font};
    text-transform: uppercase;
    & a {
        color: #3498db;
        text-decoration: none;
        font-weight: bold;
        width: 100%;
        height: 100%;
    }
    & a:hover {
       background: #f7dc6f;
    }
`;
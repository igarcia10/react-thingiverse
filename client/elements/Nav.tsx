import styled from 'styled-components';

export const Logo = styled.div`
    background: url(https://cdn.thingiverse.com/site/img/thingiverse-logo-2015.png) center center no-repeat;
    width: 128px;
    height: 23px;
    background-size: auto; 
    background-size: cover;
`;

export const Nav = styled.nav`
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    vertical-align: middle;
    padding: 0.4rem 0;
    background: ${props => props.theme.primary};
    width: 100%;
    font-family: ${props => props.theme.font};
    font-weight: normal;
    text-transform: uppercase;
`;
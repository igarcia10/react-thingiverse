import styled from 'styled-components';
import { ITheme } from '../components/App';

export const Logo = styled.div`
    background: url(https://cdn.thingiverse.com/site/img/thingiverse-logo-2015.png) center center no-repeat;
    filter: invert(100%);
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
    background: ${(props: ITheme) => props.theme.primary};
    width: 100%;
    font-family: ${(props: ITheme) => props.theme.font};
    text-transform: uppercase;
    & a {
        color: ${(props: ITheme) => props.theme.tertiary};
        text-decoration: none;
        font-weight: bold;
    }
    & a:hover {
       color:  #d68910;
    }
`;
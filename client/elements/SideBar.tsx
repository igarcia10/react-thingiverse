import styled from 'styled-components';
import { ITheme } from '../components/App';

export const SideBar = styled.div`
    width: 100px;
    position: fixed;
    z-index: 1;
    top: 85px;
    right: 10px;
    background: ${(props: ITheme) => props.theme.primary};
    overflow-x: hidden;
    padding: 8px 0;
    font-weight: 500;
    & div {
        padding: 6px 8px 6px 16px;
        font-size: 18px;
        display: block;
    }
    & button {
        margin-left: 16px;
    }
`;
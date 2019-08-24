import { ITheme } from '../components/App';
import styled from 'styled-components';

export const Button = styled.button`
    cursor: pointer;
    font-family: sans-serif;
    font-size: 1.3rem;
    border: none;
    border-radius: 5px;
    padding: 7px 10px;
    background: ${(props: ITheme) => props.theme.secondary};
    color: #fff;
    &:hover {
        background: blue;
    }
`;
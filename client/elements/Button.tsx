import { ITheme } from '../components/App';
import styled from 'styled-components';

export const Button = styled.button`
    cursor: pointer;
    color: ${(props: ITheme) => props.theme.tertiary};
    background: ${(props: ITheme) => props.theme.secondary};
    border: 2px solid ${(props: ITheme) => props.theme.tertiary};
    font-size: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    margin-right: 30px;
    &:hover {
        color: ${(props: ITheme) => props.theme.primary};
        background:  ${(props: ITheme) => props.theme.tertiary};
    }
    &:disabled {
        cursor: auto;
        color: ${(props: ITheme) => props.theme.primary};
        background:  #fef9e7;
        border: 2px solid ${(props: ITheme) => props.theme.primary};
    }
`;
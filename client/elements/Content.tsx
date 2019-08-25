import styled from 'styled-components';
import { ITheme } from '../components/App';

export const Content = styled.div`
    margin: 70px 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    font-family: ${(props: ITheme) => props.theme.font};
    color: ${(props: ITheme) => props.theme.fontColor};
`;
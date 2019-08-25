import styled from 'styled-components';
import { ITheme } from '../components/App';
import { Card } from './common'

export const CreatorDetailCard = styled(Card)`
    font-family: ${(props: ITheme) => props.theme.font};
    color: ${(props: ITheme) => props.theme.fontColor};
    width: 20%;
    height: 40%;
`;

export const CreatorDetailImage = styled.img`
    box-sizing: border-box;
    border: 2px solid ${(props: ITheme) => props.theme.secondary};
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    height: 50px;
    width: 50px;
`;

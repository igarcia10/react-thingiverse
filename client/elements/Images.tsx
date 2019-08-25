import styled from 'styled-components';
import { ITheme } from '../components/App';

export const CreatorImage = styled.img`
    box-sizing: border-box;
    border: 2px solid ${(props: ITheme) => props.theme.secondary};
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    background-color: ${(props: ITheme) => props.theme.secondary};
    vertical-align: middle;
    height: 40px;
    width: 40px;
`;

export const ListImage = styled.img`
    width: 100%;
    height: 219px;
`;

export const DetailImage = styled.img`
    width: 40%;
    height: auto;
`;
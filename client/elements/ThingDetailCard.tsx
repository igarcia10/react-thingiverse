import styled from 'styled-components';
import { ITheme } from '../components/App';
import { Card } from './common'

export const DetailContainer = styled.div`
    font-family: ${(props: ITheme) => props.theme.font};
    color: ${(props: ITheme) => props.theme.fontColor};
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    & button {
        margin: 16px 0;
        height: 35px;
    }
`;

export const ThingDetailCard = styled(Card)`
    width: 60%;
    height: 100%;
    & .title {
        font-size: 20px;
    }
`;

export const ThingDetailFooter = styled.div`

`;
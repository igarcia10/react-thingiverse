import styled from 'styled-components';
import { CreatorImage } from './Images';

export const DetailContainer = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    & button {
        margin: 16px 0;
        height: 35px;
    }
`;

export const DetailHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    & .names {
        flex-direction: column;
        margin: 2px 0 25px 10px;
    }
    & .thingName {
        font-size: 30px;
        font-weight: 600;
    }
    & .creatorName {
        font-size: 12px;
    }
`;

export const DetailCreatorImage = styled(CreatorImage)`
    height: 60px;
    width: 60px;
`;

export const ThingContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    vertical-align: top;
    flex-wrap: wrap;
`;

export const DescriptionContainer = styled.div`
    width: 500px;
    margin-left: 10px;
`;

export const DetailFooter = styled.div`
    font-size: 12px;
    margin-top: 10px;
    font-style: italic;
`;
import styled from "styled-components";
import { ITheme } from "../components/App";
import { Card } from './common'

export const ThingHeader = styled.div`
    position: absolute;
    width: 100%;
    height: 60px;
    padding: 5px;
    font-size: 14px;
    line-height: 1.25em;
    color: ${(props: ITheme) => props.theme.secondary};
    background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);
    box-sizing: border-box;
    & .headerContent {
        font-family: ${(props: ITheme) => props.theme.font};
        height: 2em;
        left: 50px;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }
`;

export const ListedThingCard = styled(Card)`
    width: 296px;
    height: 265px;
    font-size: 0;
    line-height: 0;
`;

export const ListFooter = styled.div`
    height: 42px;
    border-top: 1px solid ${(props: ITheme) => props.theme.primary};
    font-size: 16px;
    font-family: ${(props: ITheme) => props.theme.font};
    line-height: 1em;
    text-align: center;
    padding-top: 13px;
    font-weight: bold;
    color: ${(props: ITheme) => props.theme.tertiary};
`;
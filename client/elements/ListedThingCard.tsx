import styled from "styled-components";
import { ITheme } from "../components/App";

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
        height: 2em;
        left: 50px;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }
`;

export const ListedThingCard = styled.div`
    width: 296px;
    height: 265px;
    font-size: 0;
    line-height: 0;
    display: inline-block;
    border: 2px solid ${(props: ITheme) => props.theme.primary};
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    margin: 15px;
    box-shadow: ${(props: ITheme) => props.theme.shadow};
    & .title {
        font-size: 20px;
    }
`;

export const ListFooter = styled.div`
    font-size: 16px;
    border-top: 1px solid ${(props: ITheme) => props.theme.primary};
    text-align: center;
    padding-top: 13px;
    font-weight: bold;
    line-height: 1em;
    color: ${(props: ITheme) => props.theme.tertiary};
`;
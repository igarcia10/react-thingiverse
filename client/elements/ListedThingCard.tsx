import styled from "styled-components";
import { ITheme } from "../components/App";

export const ThingHeader = styled.div`
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 60px;
    padding: 5px;
    font-size: 12px;
    line-height: 1.25em;
    font-weight: bold;
    color: #fff;
    background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);
    box-sizing: border-box;
    & .headerContent {
        font-family: ${(props: ITheme) => props.theme.font};
        display: inline-block;
        height: 3em;
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
    display: inline-block;
    border: 2px solid #ececec;
    border-radius: 3px;
    font-size: 0;
    line-height: 0;
    position: relative;
    margin-bottom: 20px;
    background: #fff;
    overflow: hidden;
    margin: 15px;
`;

export const InteractionFooter = styled.div`
    height: 42px;
    border-top: 1px solid #ececec;
    font-size: 16px;
    line-height: 1em;
    position: relative;
    background: #fff;
`;
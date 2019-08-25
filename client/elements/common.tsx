import styled from "styled-components";
import { ITheme } from "../components/App";

export const Card = styled.div`
width: 60%;
height: 100%;
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
import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperSection = styled.section`
    min-height: 50dvh;
    display: flex;
    justify-content: center;
    `

export const WrapperLink = styled(Link)`
    color: inherit;
    &:hover {
        text-decoration: none;
    }
  `
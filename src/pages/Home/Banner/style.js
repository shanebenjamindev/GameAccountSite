import styled from "styled-components";

export const WrapperBanner = styled.div`
    position: relative;
    display: flex;
    color: white;
    text-shadow: 2px 2px 10px var(--primary-color); 
    align-items: flex-end;
    justify-content: center;

    > h1 {
        position: absolute;
    }
`;

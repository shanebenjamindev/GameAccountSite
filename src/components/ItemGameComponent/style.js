import styled from "styled-components";

export const WrapperItemGameComponent = styled.div`
    display: flex;
    cursor: pointer;

`
export const ItemGameContainer = styled(WrapperItemGameComponent)`
    transition: 0.25s all ease;

    &:hover{
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-5px);
    border: 2px solid black;
    box-shadow: 5px 5px 10px 0px var(--primary-fade);
}

`
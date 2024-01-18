import { Button, Input } from 'antd';
import styled from 'styled-components';

export const WrapperHeader = styled.div `
    background-color: var(--primary-color)
`

export const WrapperAccount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    `

export const WrapperSearch = styled(Input)`
    border-radius: 24px;
`
export const SearchButton = styled(Button)`
   border-radius: 50%;
`;
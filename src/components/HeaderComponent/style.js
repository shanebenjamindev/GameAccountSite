import { Button, Input } from 'antd';
import styled from 'styled-components';

export const WrapperHeaderComponent = styled.div`
    background-color: var(--primary-color);
    z-index: 9999;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    color: white;
`

export const WrapperSearch = styled(Input)`
    border-radius: 24px;
    width: 100%;
`
export const SearchButton = styled(Button)`
   border-radius: 50%;
`;
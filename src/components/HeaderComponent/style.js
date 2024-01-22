import { Button, Input } from 'antd';
import styled from 'styled-components';
import banner from '../../assets/images/banner.jpg';


export const WrapperBanner = styled.div`
    position: relative;
    display: flex;
    color: white;
    text-shadow: 2px 2px 10px var(--primary-color); 
    align-items: flex-end;
    justify-content: center;
    
    background-image: url(${banner});
    background-size: cover; /* Ensures the background covers the entire container */
    background-position: center; /* Centers the background */
    background-repeat: no-repeat; /* Prevents the background from repeating */
    
    > h1 {
        padding: 10px;
        position: absolute;
    }
`;


export const Hambur = styled.div`
    display: none;
    width: 35px;

    > span {
    display: flex;
    flex-direction: column;
    height: 3px;
    border-radius: 4px;
    background-color: white;
    margin: 6px 0;
    }

  @media (max-width: 767px) {
    display: inline-block;
}


`

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


export const CustomNavbar = styled.div`
    max-width: 75%;
    margin: auto;
`;

export const CustomNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  
  @media (max-width: 767px) {
    position: fixed;
    left: 0;
    top: 0;
    background-color: var(--primary-fade);
    flex-direction: column;
    text-align: left;
    height: 100%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
  }

  @media (min-width: 992px) {
  }
`;

export const CustomNavDropdown = styled.div`
  position: relative;
`;

export const CustomDropdownContent = styled.div`
  position: absolute;
  height: 450px;
  width: 300px;
  left: -2rem;
  border-radius: 4px;
  overflow-y: scroll;
  border: 1px solid var(--primary-fade);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 290px 0px;
    z-index: 9998;
    background-color: white;
`;

import styled, { keyframes } from "styled-components";
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
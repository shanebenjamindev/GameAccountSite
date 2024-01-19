import styled, { keyframes } from "styled-components";
export const WrapperEvent = styled.div`
    position: fixed;
    left:0;
    width: 100%;
    bottom: 0;
`

export const fall = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  
  100% {
    transform: translate(100dvh, 100dvh) rotate(180deg);
  }
`;

export const WrapperFlower = styled.div`
  position: fixed;
  top: 0; 
  z-index: -1;
  height:100%;
  width: 100%;
  `

export const Flower = styled.img`
  position: absolute;
  width: 50px; /* Adjust the width as needed */
  animation: ${fall} linear infinite;
  animation-duration: ${() => Math.random() * 5 + 5}s; /* Randomize duration for a natural look */
`;


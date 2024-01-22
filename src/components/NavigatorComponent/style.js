import { Navbar } from "react-bootstrap";
import styled from "styled-components";


export const CustomNavbar = styled.div`
    max-width: 75%;
    margin: auto;
`;

export const CustomNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CustomNavDropdown = styled.div`
  position: relative;
`;

export const CustomDropdownContent = styled.div`
  position: absolute;
  height: 500px;
  width: 300px;
  left: -3rem;
  border-radius: 4px;
  overflow-y: scroll;
  border: 1px solid var(--primary-fade);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 290px 0px;
    z-index: 9998;
    background-color: white;
`;

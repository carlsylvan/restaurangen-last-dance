import styled from "styled-components";


export const Input = styled.input`
  width: 45%;
  height: 1.8em;
  outline: none;
  border-radius: 18px;
  outline-color: black;
  color: black;
  border: 6px solid black;
  font-size: 16px;
`;


export const AdminBookingInput = styled(Input)`
  height: 1.4em;
  width: 60%;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 35%;
  }
  @media screen and (min-width: 1000px) {
    width: 30%;
  }
  @media screen and (min-width: 1400px) {
    width: 25%;
  }
`;

export const HamburgerLogoInput = styled.input`
    display: none;
`;
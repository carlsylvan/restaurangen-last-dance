import styled from "styled-components";

export const AdminBookingDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: large;
    input {
        cursor: pointer;
    }
    select {
        cursor: pointer;
    }
`;

export const CoolButton = styled.button`
  background-color: darkgray;
  border: none;
  border-radius: 20px;
  color: #fff;
  font-size: 18px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: darkgreen;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
  }
`;
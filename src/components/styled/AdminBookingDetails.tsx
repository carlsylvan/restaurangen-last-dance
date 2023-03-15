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
  background-color: #FFFFFF;
  color: #000000;
  border: 2px solid #000000;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #000000;
    color: #FFFFFF;
    border-color: #FFFFFF;
  }
`;
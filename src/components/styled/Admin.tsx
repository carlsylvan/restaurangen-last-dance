import styled from "styled-components";
import { Button, Input } from "./Booking";

export const AdminBookingsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 25px;
`;

export const AdminBookingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-bottom: 15px;
  box-shadow: 1px 0px 20px rgba(151, 149, 149, 0.8),
    0px 10px 5px rgba(151, 149, 149, 0.1);
  border-radius: 18px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 45%;
  }
  @media screen and (min-width: 1000px) {
    width: 30%;
  }
  @media screen and (min-width: 1400px) {
    width: 22%;
  }
`;

export const AdminBookingInput = styled(Input)`
  height: 1.4em;
  @media screen and (min-width: 768px) {
    width: 35%;
  }
  @media screen and (min-width: 1000px) {
    width: 30%;
  }
  @media screen and (min-width: 1400px) {
    width: 20%;
  }
`;

export const AdminBookingButton = styled(Button)`
  width: 75px;
  height: 35px;
  margin-left: 5px;
`;

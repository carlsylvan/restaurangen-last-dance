import styled from "styled-components";
import { Button, Input } from "./Booking";

export const AdminWrapper = styled.main`
  height: 100%;
  margin-bottom: 150px;
  width: 100%;
  text-align: center;
  > button {
    width: 180px;
    height: 45px;
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 30px;
    background-color: black;
    color: white;
    border: 1px black;
    border-radius: 18px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      opacity: 0.75;
    }
  }
`;

export const AdminForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100%;
  }
`;

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
  transition: all 0.2s ease-in-out;
  &:hover {
    scale: calc(1.05);
  }
  @media screen and (min-width: 768px) {
    width: 45%;
  }
  @media screen and (min-width: 1000px) {
    width: 30%;
  }
  @media screen and (min-width: 1400px) {
    width: 25%;
  }
`;

export const AdminBookingInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 18px 0px 5px 0px;
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

export const AdminBookingButton = styled(Button)`
  width: 75px;
  height: 35px;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 30px;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.75;
  }
`;

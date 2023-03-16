import styled from "styled-components";

export const BookingWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const H1 = styled.h1`
  font-size: 45px;
  font-weight: 700;
  font-family: "Satisfy", "cursive";
  padding: 0;
  margin: 0;
  margin-top: 25px;
`;

export const H4 = styled.h4`
  font-weight: 600;
  padding: 0;
  margin: 0;
  letter-spacing: 1px;
`;

export const H3 = styled.h3`
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  padding-top: 1rem;
`;

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

export const Label = styled.label`
  text-align: end;
  padding-right: 5px;
  font-weight: 500;
  font-size: large;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
`;

export const Button = styled.button`
  text-align: center;
  background-color: black;
  color: white;
  border: 1px black;
  border-radius: 18px;
  margin-top: 15px;
  margin-bottom: 35px;
  font-size: medium;
  width: 100px;
  height: 40px;
  cursor: pointer;
`;

export const ChooseTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: black;
  color: white;
  border: 1px black;
  border-radius: 18px;
  margin-top: 15px;
  margin-bottom: 35px;
  font-size: medium;
  width: 100px;
  height: 40px;
  cursor: pointer;
`;

export const ContactWrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    input {
      width: 44%;
    }
  }
  > input {
    margin-top: 5px;
    width: 50%;
  }
`;

import styled from "styled-components";

export const BookingWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const H1 = styled.h1`
  font-size: 38px;
  font-weight: 700;
`;

export const H2 = styled.h2`
  font-size: 22px;
  font-weight: 600;
`;

export const H3 = styled.h3`
  font-size: 18px;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
  margin-bottom: 5px;
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

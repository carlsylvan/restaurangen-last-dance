import styled from "styled-components";
import { Button, Input, Label } from "../styled/Booking";
import { FormWrapper, InputWrapper } from "../styled/Wrappers";

const Textarea = styled.textarea`
  width: 70vw;
  height: 40vh;
  outline: none;
  border-radius: 18px;
  outline-color: black;
  color: black;
  border: 6px solid black;
  font-size: 16px;
`;

export const Contact = () => {
    return (
        <>
        <h3>Kontakta oss</h3>
        <FormWrapper>
            <InputWrapper>
                <Label>Namn</Label>
                <Input type="text" required />
            </InputWrapper>
            <InputWrapper>
                <Label>Email</Label>
                <Input type="email"required />
            </InputWrapper>
            <InputWrapper>
                <Label>Bokningsnummer</Label>
                <Input type="text" required />
            </InputWrapper>
            <InputWrapper>
                <Label>Meddelande</Label>
                <Textarea required></Textarea>
            </InputWrapper>
            <Button type="submit">Send</Button>
        </FormWrapper>
        </>
    )
};
import styled from "styled-components";
import { Button, H1, H3, H4, Input, Label } from "../styled/Booking";
import { FormWrapper, InputWrapper, SubmitButtonWrapper } from "../styled/Wrappers";

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
  const handleSubmit = () => {
    alert(
      "Tack för ditt meddelande! Vi återkommer till dig så fort som möjligt."
    );
  };
  return (
    <>
      <H1>Last Dance</H1>
      <H4>restaurang</H4>
      <H3>Kontakta oss</H3>
      <FormWrapper onSubmit={handleSubmit}>
        {/* <InputWrapper>
          <Label>Namn</Label>
          <Input type="text" required />
        </InputWrapper>
        <InputWrapper>
          <Label>Email</Label>
          <Input type="email" required />
        </InputWrapper>
        <InputWrapper>
          <Label>Bokningsnummer</Label>
          <Input type="text" required />
        </InputWrapper>
        <InputWrapper>
          <Label>Meddelande</Label>
          <Textarea required></Textarea>
        </InputWrapper>
        <Button type="submit">Send</Button> */}
        <InputWrapper>
          <label>Namn</label>
          <input type="text" required />
        {/* </InputWrapper>
        <InputWrapper> */}
          <label>Email</label>
          <input type="email" required />
        {/* </InputWrapper>
        <InputWrapper> */}
          <label>Bokningsnummer</label>
          <input type="text" required />
        {/* </InputWrapper>
        <InputWrapper> */}
          <label>Meddelande</label>
          <textarea required></textarea>
        </InputWrapper>
        <SubmitButtonWrapper type="submit">Send</SubmitButtonWrapper>
      </FormWrapper>
    </>
  );
};

import {
  BookingWrapper,
  InputWrapper,
  Form,
  H1,
  H2,
  H3,
  Input,
  Label,
  Button,
  ButtonWrapper,
  ContactWrapperInput,
} from "../styled/Booking";

export const Booking = () => {
  return (
    <BookingWrapper>
      <div>
        <H1>Last Dance</H1>
        <H2>Restaurang</H2>
      </div>
      <H3>Bokning</H3>
      <Form>
        <InputWrapper>
          <Label>Antal personer: </Label>
          <Input type="number" required />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="start">Datum: </Label>
          <Input
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2018-01-01"
            max="2018-12-31"
            required
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button>17:00</Button>
          <Button>21:00</Button>
        </ButtonWrapper>
        <ContactWrapperInput>
          <div>
            <Input type="text" placeholder="Förnamn" required />
            <Input type="text" placeholder="Efternamn" required />
          </div>
          <Input type="email" placeholder="Epost" required />
          <Input type="tel" placeholder="Tel" required />
        </ContactWrapperInput>
        <Button type="submit">Boka</Button>
      </Form>
    </BookingWrapper>
  );
};

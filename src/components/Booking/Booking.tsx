import { ChangeEvent, useState } from "react";
import { IBooking } from "../../models/IBooking";
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
  ChooseTime,
} from "../styled/Booking";

export const Booking = () => {
  const [booking, setBooking] = useState<IBooking>({
    restaurantId: "6408a12376187b915f68e171",
    date: "",
    time: "",
    numberOfGuests: 0,
    customer: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
    },
  });

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
          <ChooseTime>17:00</ChooseTime>
          <ChooseTime>21:00</ChooseTime>
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

import { time } from "console";
import { ChangeEvent, FormEvent, useState } from "react";
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    if (e.target.type === "number") {
      setBooking({ ...booking, [e.target.name]: +e.target.value });
    }

    if (e.target.type === "text") {
      setBooking({ ...booking, [e.target.name]: e.target.value });
    }
  };

  const handleChooseTime = (chosenTime: string) => {
    setBooking({ ...booking, time: chosenTime });
  };
  console.log(booking);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // if (person.name === "" || person.age === 0) {
    //   console.log("Validation error occured");
    // } else {
    //   console.log("Submit form: ", person);
    // }
  };

  const handleSubmitButton = () => {
    // sendBooking()
    console.log(booking);
  };

  return (
    <BookingWrapper>
      <div>
        <H1>Last Dance</H1>
        <H2>Restaurang</H2>
      </div>
      <H3>Bokning</H3>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>Antal personer: </Label>
          <Input
            type="number"
            value={booking.numberOfGuests}
            onChange={handleChange}
            name="numberOfGuests"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="start">Datum: </Label>
          <Input
            type="date"
            id="start"
            value={booking.date}
            name="date"
            min="2023-03-09"
            max="2023-12-31"
            required
          />
        </InputWrapper>

        <ButtonWrapper>
          <ChooseTime onClick={() => handleChooseTime("17:00")}>
            17:00
          </ChooseTime>
          <ChooseTime onClick={() => handleChooseTime("21:00")}>
            21:00
          </ChooseTime>
        </ButtonWrapper>
        <ContactWrapperInput>
          <div>
            <Input type="text" placeholder="Förnamn" required />
            <Input type="text" placeholder="Efternamn" required />
          </div>
          <Input type="email" placeholder="Epost" required />
          <Input type="tel" placeholder="Tel" required />
        </ContactWrapperInput>
        <Button onClick={handleSubmitButton} type="submit">
          Boka
        </Button>
      </Form>
    </BookingWrapper>
  );
};

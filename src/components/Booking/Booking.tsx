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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    if (e.target.type === "number") {
      setBooking({ ...booking, [e.target.name]: +e.target.value });
    }

    if (e.target.type === "text") {
      setBooking({ ...booking, [e.target.name]: e.target.value });
    }
  };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();

  //   if (person.name === "" || person.age === 0) {
  //     console.log("Validation error occured");
  //   } else {
  //     console.log("Submit form: ", person);
  //   }
  // };

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
            <Input type="text" placeholder="Förnamn" name="name" value={booking.customer.name} onChange={handleChange} required />
            <Input type="text" placeholder="Efternamn" name="lastname" value={booking.customer.lastname} onChange={handleChange} required />
          </div>
          <Input type="email" placeholder="Epost" name="email" value={booking.customer.email} onChange={handleChange} required />
          <Input type="tel" placeholder="Tel" name="phone" value={booking.customer.phone} onChange={handleChange} required />
        </ContactWrapperInput>
        <Button type="submit">Boka</Button>
      </Form>
    </BookingWrapper>
    
  );
};

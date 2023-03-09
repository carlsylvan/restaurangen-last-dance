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
import { ICustomer } from "../../models/ICustomer";

export const Booking = () => {
  const [customer, setCustomer] = useState<ICustomer>({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [booking, setBooking] = useState<IBooking>({
    restaurantId: "6408a12376187b915f68e171",
    date: "",
    time: "",
    numberOfGuests: 1,
    customer: customer,
  });

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.name);
  //   if (e.target.type === "number") {
  //     setBooking({ ...booking, [e.target.name]: +e.target.value });
  //   }

  //   if (e.target.type === "text") {
  //     setCustomer({ ...customer, [e.target.name]: e.target.value });
  //   }

  //   if (e.target.type === "email") {
  //     setCustomer({ ...customer, [e.target.name]: e.target.value });
  //   }

  //   if (e.target.type === "tel") {
  //     setCustomer({ ...customer, [e.target.name]: e.target.value });
  //     setBooking({ ...booking, customer: customer });
  //   }

  //   if (e.target.type === "date") {
  //     setBooking({ ...booking, [e.target.name]: e.target.value });
  //   }
  // };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newCustomer = {...customer, [e.target.name]: e.target.value};
    setCustomer(newCustomer);
    setBooking({...booking, [e.target.name]: e.target.value, customer: newCustomer});
  };

  const handleChooseTime = (chosenTime: string) => {
    setBooking({ ...booking, time: chosenTime });
  };
  console.log(booking);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // sendBooking()
    console.log(booking);

    // if (person.name === "" || person.age === 0) {
    //   console.log("Validation error occured");
    // } else {
    //   console.log("Submit form: ", person);
    // }
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
            onChange={handleChange}
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
            <Input
              type="text"
              placeholder="Förnamn"
              name="name"
              value={customer.name}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              placeholder="Efternamn"
              name="lastname"
              value={customer.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <Input
            type="email"
            placeholder="Epost"
            name="email"
            value={customer.email}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            placeholder="Tel-xxxxxxxxxx"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </ContactWrapperInput>
        <Button type="submit">Boka</Button>
      </Form>
    </BookingWrapper>
  );
};

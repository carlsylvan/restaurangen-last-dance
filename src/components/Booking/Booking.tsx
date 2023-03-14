import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IBooking } from "../../models/IBooking";
import { BookingWrapper, H3, H4 } from "../styled/Booking";
import { ICustomer } from "../../models/ICustomer";
import { sendBooking } from "../../services/bookingService";
import { useOutletContext } from "react-router";
import { IRestaurantContext } from "../../App";
import { BookingTimeDivWrapper, FormWrapper, InputWrapper, NumberOfGuestsWrapper, SubmitButtonWrapper } from "../styled/Wrappers";
import { SelectGuestsAmount } from "../SelectGuestsAmount/SelectGuestsAmount";
import { SelectBookingTime } from "../SelectBookingTime/SelectBookingTime";



export const Booking = () => {
  const startValueCustomer: ICustomer = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
  }
  const startValueBooking: IBooking = {
    restaurantId: "6408a12376187b915f68e171",
    date: "",
    time: "",
    numberOfGuests: 1,
    customer: startValueCustomer,
  }
  const [customer, setCustomer] = useState<ICustomer>(startValueCustomer);
  const [booking, setBooking] = useState<IBooking>(startValueBooking);
  const { bookings, changeLoadedFromApi } = useOutletContext<IRestaurantContext>();
  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [numOfBookedTables, setNumOfBookedTables] = useState<number>(0);
  useEffect(()=>{
    ((numOfBookedTables+Math.ceil(booking.numberOfGuests/6)) > 30) ? setIsAvailable(false):setIsAvailable(true);
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newCustomer = { ...customer, [e.target.name]: e.target.value };
    let numberOfBookedTables: number = 0;
    setCustomer(newCustomer);
    setBooking({...booking, customer: newCustomer});
    if(e.target.type ==="date"){
      setBooking({ ...booking, [e.target.name]: e.target.value });
    };
    bookings.map((item)=>{
    if(item.date===e.target.value){
       numberOfBookedTables = numOfBookedTables + Math.ceil(item.numberOfGuests/6);
    }
    setNumOfBookedTables(numberOfBookedTables);
    });
  };
  
  const handleGuestsNum  = (item: number) => {
    setBooking({...booking, numberOfGuests:item});
  }
  const handleBookingTime  = (bookingTime:string) => {
    setBooking({...booking, time:bookingTime});
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // sendBooking(booking);
    setCustomer(startValueCustomer);
    setBooking(startValueBooking);
    changeLoadedFromApi();
  };



  console.log(bookings);
  
  return (
    <BookingWrapper>
      <H3>Bokning</H3>
      <FormWrapper onSubmit={handleSubmit}>
        <NumberOfGuestsWrapper>
          <H4>Antal presoner</H4>
          <SelectGuestsAmount startNumber={1} handleGuestsNum = {handleGuestsNum}/>
        </NumberOfGuestsWrapper>
        <InputWrapper>
          <label htmlFor="start">Datum: </label>
          <input
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
        <BookingTimeDivWrapper isAvailable = {isAvailable}>
          <SelectBookingTime handleBookingTime={handleBookingTime}/>
        </BookingTimeDivWrapper>
        <InputWrapper>
            <label htmlFor="firstname">Förnamn</label>
            <input
              type="text"
              id="firstname"
              placeholder="Förnamn"
              name="name"
              value={customer.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="lastname">Efternamn</label>
            <input
              type="text"
              id="lastname"
              placeholder="Efternamn"
              name="lastname"
              value={customer.name}
              onChange={handleChange}
              required
            />
          <label htmlFor="epost">Email</label>
          <input
            type="email"
            id="epost"
            placeholder="Epost"
            name="email"
            value={customer.email}
            onChange={handleChange}
            pattern=".+@+.\.com"
            required
          />

          <label htmlFor="phone">Mobil</label>
          <input
            type="tel"
            id="phone"
            placeholder="Tel-xxxxxxxxxx"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </InputWrapper>
        <SubmitButtonWrapper type ="submit">Boka</SubmitButtonWrapper>
      </FormWrapper>
    </BookingWrapper>
  );
};

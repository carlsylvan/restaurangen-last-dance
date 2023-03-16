import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IBooking } from "../../models/IBooking";
import { BookingWrapper, H1, H3, H4 } from "../styled/Booking";
import { ICustomer } from "../../models/ICustomer";
import { sendBooking } from "../../services/bookingService";
import { useOutletContext } from "react-router";
import { IRestaurantContext } from "../../App";
import {
  BookingTimeDivWrapper,
  FormWrapper,
  InputWrapper,
  NumberOfGuestsWrapper,
  SubmitButtonWrapper,
} from "../styled/Wrappers";
import { SelectGuestsAmount } from "../SelectGuestsAmount/SelectGuestsAmount";
import { SelectBookingTime } from "../SelectBookingTime/SelectBookingTime";
import { IAvailableTimes } from "../../models/IAvailableTimes";
import { checkedAvailableTables, checkedAvailableTablesTest, IAvailableTime } from "../../functions/checkedAvailableTables";
import { useNavigate } from "react-router-dom";

export const Booking = () => {
  const startValueCustomer: ICustomer = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
  };
  const startValueBooking: IBooking = {
    restaurantId: "6408a12376187b915f68e171",
    date: "",
    time: "17:00",
    numberOfGuests: 1,
    customer: startValueCustomer,
  };
  const [customer, setCustomer] = useState<ICustomer>(startValueCustomer);
  const [booking, setBooking] = useState<IBooking>(startValueBooking);
  const { bookings, changeLoadedFromApi } = useOutletContext<IRestaurantContext>();
  const [isTableAvailable, setIsTableAvailable] = useState<boolean>(true);
  const [availableTimes, setAvailableTimes] = useState<IAvailableTime[]>([{bookingTime:"17:00", isAvailable:true},{bookingTime:"21:00", isAvailable:true}]);
  const navigate = useNavigate();


  useEffect(()=>{
    let status = checkedAvailableTables(bookings, booking);
    let list = checkedAvailableTablesTest(bookings,booking);
    setAvailableTimes(list);
    
    setIsTableAvailable(status);
  }, [booking]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newCustomer = { ...customer, [e.target.name]: e.target.value };
    setCustomer(newCustomer);
    setBooking({ ...booking, customer: newCustomer });
    if (e.target.type === "date") {
      setBooking({ ...booking, [e.target.name]: e.target.value });
    }
  };

  const handleGuestsNum = (item: number) => {
    setBooking({ ...booking, numberOfGuests: item });
  };
  const handleBookingTime = (bookingTime: string) => {
    setBooking({ ...booking, time: bookingTime });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let response = await sendBooking(booking);
    let id = response.insertedId;
    setCustomer(startValueCustomer);
    setBooking(startValueBooking);
    changeLoadedFromApi();
    localStorage.setItem("booking", JSON.stringify(booking));
    navigate(`/booking/${id}`);
  };


  console.log(availableTimes);
  console.log(bookings);

  return (
    <>
      <H1>Last Dance</H1>
      <H4>restaurang</H4>
      <H3>Bokning</H3>
      <FormWrapper onSubmit={handleSubmit}>
        <NumberOfGuestsWrapper>
          <H4>Antal personer</H4>
          <SelectGuestsAmount
            handleGuestsNum={handleGuestsNum}
            startNumber={1}
          />
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
        <BookingTimeDivWrapper>
          <SelectBookingTime 
            handleBookingTime={handleBookingTime} 
            isTableAvailable = {isTableAvailable} 
            isAvailableAtFive = {availableTimes[0].isAvailable}
            isAvailableAtNine = {availableTimes[1].isAvailable}/>
        </BookingTimeDivWrapper>
        {isTableAvailable ?
          <>
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
              value={customer.lastname}
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
            <SubmitButtonWrapper type="submit">Boka</SubmitButtonWrapper>
          </>
         : 
          <h4>Det finns inga lediga bord</h4>
        }
      </FormWrapper>
    </>
  );
};

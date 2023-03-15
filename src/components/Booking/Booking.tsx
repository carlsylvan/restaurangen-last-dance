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
import { checkedAvailableTables } from "../../functions/checkedAvailableTables";



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
  const [isTableAvailable, setIsTableAvailable] = useState<boolean>(true)
  // const [availableTimes, setAvailableTime] = useState<IAvailableTimes[]>([
  //   {bookingTime: "17:00", numberOfBookedTables: 0, isAvailable: true},
  //   {bookingTime: "21:00", numberOfBookedTables: 0, isAvailable: true},
  // ]);
  useEffect(()=>{
    // let status = checkedAvailableTables(bookings, booking)
    // setIsTableAvailable(status);
    console.log(isTableAvailable);
    // let numberOfTableAtFive = 0;
    // let numberOfTablesAtNine = 0;
    // let temp = [...availableTimes];
    // bookings.map((item)=>{
    // if(item.date===booking.date){
    //    if(item.time==="17:00"){
    //     numberOfTableAtFive=numberOfTableAtFive+Math.ceil(item.numberOfGuests/6);
    //   }
    //   else if(item.time==="21:00") {        
    //     numberOfTablesAtNine=numberOfTablesAtNine+Math.ceil(item.numberOfGuests/6);
    //   }
    // }
    // });
    // temp[0].numberOfBookedTables=numberOfTableAtFive;
    // temp[1].numberOfBookedTables=numberOfTablesAtNine;
    // ((temp[0].numberOfBookedTables+Math.ceil(booking.numberOfGuests/6))>1) ? temp[0].isAvailable = false : temp[0].isAvailable = true;
    // ((temp[1].numberOfBookedTables+Math.ceil(booking.numberOfGuests/6))>1) ? temp[1].isAvailable = false : temp[1].isAvailable = true;
    // setAvailableTime(temp);
    let status = checkedAvailableTables(bookings, booking);
    setIsTableAvailable(status);
   
  }, [booking]);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newCustomer = { ...customer, [e.target.name]: e.target.value };
    setCustomer(newCustomer);
    setBooking({ ...booking, customer: newCustomer });
    if (e.target.type === "date") {
      setBooking({ ...booking, [e.target.name]: e.target.value });
    };
  };

  const handleGuestsNum = (item: number) => {
    setBooking({ ...booking, numberOfGuests: item });
  };
  const handleBookingTime = (bookingTime: string) => {
    setBooking({ ...booking, time: bookingTime });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendBooking(booking);
    setCustomer(startValueCustomer);
    setBooking(startValueBooking);
    changeLoadedFromApi();
  };


  console.log(isTableAvailable);
  console.log(bookings);

  return (
    <>
      <H1>Last Dance</H1>
      <H4>restaurang</H4>
      <H3>Bokning</H3>
      <FormWrapper onSubmit={handleSubmit}>
        <NumberOfGuestsWrapper>
          <H4>Antal personer</H4>
          <SelectGuestsAmount handleGuestsNum = {handleGuestsNum} startNumber = {1}/>
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
          <SelectBookingTime handleBookingTime={handleBookingTime} isTableAvailable = {isTableAvailable}/>
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
        </>:
        <h4>Det finns inga lediga bord</h4>
        }
      </FormWrapper>
    </>
  );
};

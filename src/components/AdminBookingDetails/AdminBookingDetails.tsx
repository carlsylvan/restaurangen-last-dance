import React, { FormEvent, useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { IRestaurantContext } from "../../App";
import { checkedAvailableTables } from "../../functions/checkedAvailableTables";
import { IAvailableTime } from "../../models/IAvailableTime";
import { IBooking } from "../../models/IBooking";
import { IBookingCustomer } from "../../models/IBookingCustomer";
import { IBookingsAdmin } from "../../models/IBookingsAdmin";
import { deleteBookingById, getBookedTableById, getCustomerById, RESTAURANT_ID, updateBookingById, updateCustomerById } from "../../services/bookingService";
import { H1, H3, H4 } from "../styled/Booking";
import { FormWrapper, InputWrapper, SubmitButtonWrapper } from "../styled/Wrappers";

export const AdminBookingDetails = () => {
  const [bookedTable, setBookedTable] = useState<IBookingsAdmin>({
    _id: "?",
    restaurantId: RESTAURANT_ID,
    date: "",
    time: "",
    numberOfGuests: 1,
    customerId: "",
  });
  const [bookedCustomer, setBookedCustomer] = useState<IBookingCustomer>({
    _id: "",
    name: "Namn",
    lastname: "Namnsson",
    email: "email@email.com",
    phone: "0712345678",
})
const { bookings, changeLoadedFromApi } = useOutletContext<IRestaurantContext>();
const [editCustomer, setEditCustomer] = useState(false);
const [booking, setBooking] = useState<IBooking>({
  restaurantId: "6408a12376187b915f68e171",
  date: "",
  time: "",
  numberOfGuests: 1,
  customer: {name: "", lastname: "", email: "", phone: ""},
});
const [isTableAvailable, setIsTableAvailable] = useState<boolean>(true);
// const [availableTimes, setAvailableTimes] = useState<IAvailableTime[]>([{bookingTime:"17:00", isAvailable:true},{bookingTime:"21:00", isAvailable:true}]);


  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let bookingsCopy = [...bookings];
    let filteredList = bookingsCopy.filter((booking) => booking._id != bookedTable._id);
    let availableTimes: IAvailableTime[] = checkedAvailableTables(filteredList, bookedTable.date, bookedTable.numberOfGuests);
    let status = availableTimes.filter((item) => item.bookingTime === bookedTable.time);

    status.length > 0 ? setIsTableAvailable(status[0].isAvailable) : setIsTableAvailable(true);
  }, [bookedTable]);

  useEffect(() => {
    const getBookings = async () => {
      if (id !== undefined) {
        const { bookedTable, error } = await getBookedTableById(id);
        if (error) {
          console.log(error);
        } else {
          setBookedTable(bookedTable!);
          const { bookingCustomer, error: customerError } =
            await getCustomerById(bookedTable!.customerId);
          if (customerError) {
            console.log(customerError);
          } else {
            setBookedCustomer(bookingCustomer!);
          }
        }
      }
    };
    getBookings();
  }, [id]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setBookedTable((bookedTable) => ({
      ...bookedTable,
      [name]: value,
    }));
    setBookedCustomer((bookedCustomer) => ({
      ...bookedCustomer,
      [name]: value,
    }));
  };

  const handleUpdateClick = () => {
    const confirmed = window.confirm(`Bokningen kommer att uppdateras till ${bookedTable.date}, ${bookedTable.time}, ${bookedTable.numberOfGuests} personer.`);
    if (confirmed) {
      updateBookingById(bookedTable._id, bookedTable);
      updateCustomerById(bookedCustomer._id, bookedCustomer);
      alert("Bokningen har uppdaterats.");
    }
  };
  const handleDeleteClick = () => {
    const confirmed = window.confirm("Är du säker på att du vill ta bort bokningen?");
  if (confirmed) {
    deleteBookingById(id!);
    alert("Bokningen har tagits bort.");
    navigate("/admin");
  }
};

const handleEditCustomerClick = () => {
  setEditCustomer(true);
};

const handleUpdateCustomerClick = () => {
  setEditCustomer(false);
  updateCustomerById(bookedCustomer._id, bookedCustomer);
  alert("Kundinformationen har uppdaterats.");
};

const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  changeLoadedFromApi();
}
  

  return (
    <>
    <H1>Last Dance</H1>
    <H4>restaurang</H4>
    <FormWrapper onSubmit={handleSubmit}>
      <SubmitButtonWrapper type="button" onClick={() => {navigate("/admin")}}>Tillbaka till listan över bokningar</SubmitButtonWrapper>
      <H3>Redigera bokning med bokningsnummer: {bookedTable._id}</H3>
      <H4>Bokningsinformation:</H4>
      <InputWrapper>
      <label htmlFor="date">Datum:</label>
        <input
          id="date"
          type="date"
          name="date"
          value={bookedTable.date}
          onChange={handleInputChange}
        />
        </InputWrapper>
        <InputWrapper>
      <label htmlFor="time">Tid:</label>
        <select
          id="time"
          name="time"
          value={bookedTable.time}
          onChange={handleInputChange}
        >
          <option value="17:00">17:00</option>
          <option value="21:00">21:00</option>
        </select>
        </InputWrapper>
        <InputWrapper>
      <label htmlFor="numberOfGuests">Antal personer:</label>
        <select
          name="numberOfGuests"
          value={bookedTable.numberOfGuests}
          onChange={handleInputChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        </InputWrapper>
      {editCustomer ? (
        <>
        <InputWrapper>
      <label htmlFor="name">Namn:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={bookedCustomer.name}
          onChange={handleInputChange}
        />
        </InputWrapper>
        <InputWrapper>
      <label htmlFor="lastname">Efternamn:</label>
        <input
          id="lastname"
          type="text"
          name="lastname"
          value={bookedCustomer.lastname}
          onChange={handleInputChange}
        />
        </InputWrapper>
        <InputWrapper>
      <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={bookedCustomer.email}
          onChange={handleInputChange}
        />
        </InputWrapper>
        <InputWrapper>
      <label htmlFor="phone">Telefon:</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={bookedCustomer.phone}
          onChange={handleInputChange}
        />
        </InputWrapper>
      <SubmitButtonWrapper type="button" onClick={handleUpdateCustomerClick}>Uppdatera kundinformation</SubmitButtonWrapper>
      </>
      ) : (
        <>
        <H4>Kundinformation:</H4>
        <InputWrapper>Namn: {bookedCustomer.name} {bookedCustomer.lastname}</InputWrapper>
        <InputWrapper>E-post: {bookedCustomer.email}</InputWrapper>
        <InputWrapper>Telefon: {bookedCustomer.phone}</InputWrapper>
        <SubmitButtonWrapper onClick={handleEditCustomerClick}>Redigera kund</SubmitButtonWrapper>
      </>
      )}
      {isTableAvailable ? (<SubmitButtonWrapper onClick={handleUpdateClick}>Uppdatera bokning</SubmitButtonWrapper>) : (<SubmitButtonWrapper style={{background:"white", color: "black"}}>Det finns inga lediga bord den tiden</SubmitButtonWrapper>)}
      <SubmitButtonWrapper onClick={handleDeleteClick}>Ta bort bokning</SubmitButtonWrapper>
    </FormWrapper>
    </>
  );
};
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBookingCustomer } from "../../models/IBookingCustomer";
import { IBookingsAdmin } from "../../models/IBookingsAdmin";
import { deleteBookingById, getBookedTableById, getCustomerById, RESTAURANT_ID, updateBookingById, updateCustomerById } from "../../services/bookingService";
import { AdminBookingDetailsWrapper } from "../styled/AdminBookingDetails";
import { H3 } from "../styled/Booking";

export const AdminBookingDetails = () => {
  const [bookedTable, setBookedTable] = useState<IBookingsAdmin>({
    _id: "",
    restaurantId: RESTAURANT_ID,
    date: "",
    time: "",
    numberOfGuests: 1,
    customerId: "",
  });
  const [bookedCustomer, setBookedCustomer] = useState<IBookingCustomer>({
    _id: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
})

  const {id} = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      if (id !== undefined) {
        const { bookedTable, error } = await getBookedTableById(id);
        if (error) {
          console.log("Error fetching booked table: ", error);
        } else {
          setBookedTable(bookedTable!);
          const { bookingCustomer, error: customerError } =
            await getCustomerById(bookedTable!.customerId);
          if (customerError) {
            console.log("Error fetching customer: ", customerError);
          } else {
            setBookedCustomer(bookingCustomer!);
          }
        }
      }
    };
    fetchData();
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
    updateBookingById(bookedTable._id, bookedTable);
    updateCustomerById(bookedCustomer._id, bookedCustomer);
  };
  const handleDeleteClick = () => {
    deleteBookingById(id!);
  };

  return (
    <AdminBookingDetailsWrapper>
      <H3>Redigera bokning med bokningsnummer: {bookedTable._id}</H3>
      <label>
        Datum:
        <input
          type="date"
          name="date"
          value={bookedTable.date}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Tid:
        <select
          name="time"
          value={bookedTable.time}
          onChange={handleInputChange}
        >
          <option value="17:00">17:00</option>
          <option value="21:00">21:00</option>
        </select>
      </label>
      <label>
        Antal personer
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
      </label>
      <label>
        Namn:
        <input
          type="text"
          name="name"
          value={bookedCustomer.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Efternamn:
        <input
          type="text"
          name="lastname"
          value={bookedCustomer.lastname}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={bookedCustomer.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Telefon:
        <input
          type="tel"
          name="phone"
          value={bookedCustomer.phone}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleUpdateClick}>Uppdatera bokning</button>
      <button onClick={handleDeleteClick}>Ta bort bokning</button>
    </AdminBookingDetailsWrapper>
  );
};
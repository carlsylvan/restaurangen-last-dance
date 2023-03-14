import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBookingCustomer } from "../../models/IBookingCustomer";
import { IBookingsAdmin } from "../../models/IBookingsAdmin";
import { API_URL, deleteBookingById, getBookedTableById, getCustomerById, RESTAURANT_ID, updateBookingById } from "../../services/bookingService";
import { AdminBookingDetailsWrapper } from "../styled/AdminBookingDetails";

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBookedTable((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdateClick = () => {
    updateBookingById(bookedTable._id, bookedTable);
    console.log(bookedTable);
  };
  const handleDeleteClick = () => {
    deleteBookingById(id!);
  };

  return (
    <AdminBookingDetailsWrapper>
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
        <input
          type="text"
          name="time"
          value={bookedTable.time}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Antal gäster:
        <input
          type="number"
          name="numberOfGuests"
          value={bookedTable.numberOfGuests}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Namn:
        <input
          type="text"
          name="name"
          value={bookedCustomer.name}
          onChange={(e) =>
            setBookedCustomer((prevState) => ({
              ...prevState,
              lastname: e.target.value,
            }))
          }
        />
      </label>
      <label>
        Efternamn:
        <input
          type="text"
          name="lastname"
          value={bookedCustomer.lastname}
          onChange={(e) =>
            setBookedCustomer((prevState) => ({
              ...prevState,
              lastname: e.target.value,
            }))
          }
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={bookedCustomer.email}
          onChange={(e) =>
            setBookedCustomer((prevState) => ({
              ...prevState,
              lastname: e.target.value,
            }))
          }
        />
      </label>
      <label>
        Telefon:
        <input
          type="tel"
          name="phone"
          value={bookedCustomer.email}
          onChange={(e) =>
            setBookedCustomer((prevState) => ({
              ...prevState,
              lastname: e.target.value,
            }))
          }
        />
      </label>
      <button onClick={handleUpdateClick}>Uppdatera bokning</button>
      <button onClick={handleDeleteClick}>Ta bort bokning</button>
    </AdminBookingDetailsWrapper>
  );
};
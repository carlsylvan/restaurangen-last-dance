import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { IBookingCustomer } from "../../models/IBookingCustomer";
import { IBookingsAdmin } from "../../models/IBookingsAdmin";
import { deleteBookingById, getBookedTableById, getCustomerById, RESTAURANT_ID, updateBookingById, updateCustomerById } from "../../services/bookingService";
import { AdminBookingDetailsWrapper, CoolButton } from "../styled/AdminBookingDetails";
import { H3, H4 } from "../styled/Booking";

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
const [editCustomer, setEditCustomer] = useState(false);

  const {id} = useParams();
  const navigate = useNavigate();
  
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

  

  return (
    <AdminBookingDetailsWrapper>
      <CoolButton onClick={() => {navigate("/admin")}}>Tillbaka till listan över bokningar</CoolButton>
      <H3>Redigera bokning med bokningsnummer: {bookedTable._id}</H3>
      <H4>Bokningsinformation:</H4>
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
      {editCustomer ? (
        <>
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
      <CoolButton onClick={handleUpdateCustomerClick}>Uppdatera kundinformation</CoolButton>
      </>
      ) : (
        <>
        <H4>Kundinformation:</H4>
        <p>Namn: {bookedCustomer.name} {bookedCustomer.lastname}</p>
        <p>E-post: {bookedCustomer.email}</p>
        <p>Telefon: {bookedCustomer.phone}</p>
        <CoolButton onClick={handleEditCustomerClick}>Redigera kund</CoolButton>
      </>
      )}
      <CoolButton onClick={handleUpdateClick}>Uppdatera bokning</CoolButton>
      <CoolButton onClick={handleDeleteClick}>Ta bort bokning</CoolButton>
    </AdminBookingDetailsWrapper>
  );
};
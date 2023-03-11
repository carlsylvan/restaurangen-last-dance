import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IBookingsAdmin } from "../../models/IBookingsAdmin";
import { getBookings } from "../../services/bookingService";
import {
  AdminBookingButton,
  AdminBookingInput,
  AdminBookingsWrapper,
  AdminBookingWrapper,
} from "../styled/Admin";
import { H1, H2, H3 } from "../styled/Booking";

export const Admin = () => {
  const [bookings, setBookings] = useState<IBookingsAdmin[]>([]);
  const [bookingsByDate, setBookingsByDate] = useState<JSX.Element[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getBookingsData = async () => {
      let myBookings = await getBookings();
      setBookings(myBookings);
    };
    if (bookings.length > 0) return;
    getBookingsData();
  });

  const handleClick = (booking: IBookingsAdmin) => {
    navigate(`/admin/${booking._id}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchInput = e.currentTarget.elements.namedItem(
      "_id"
    ) as HTMLInputElement;
    const foundBooking = bookings.find(
      (booking) => booking._id === searchInput.value
    );
    if (foundBooking) {
      //   navigate(`/admin/${foundBooking._id}`);
      console.log(foundBooking);
    } else {
      alert("Det finns tyvärr ingen bokning med det bokningsnumret");
    }

    searchInput.value = "";
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const findMatchingDates = e.target.value;
    const foundBookings = bookings.filter(
      (booking) => booking.date === findMatchingDates
    );
    let bookingsByDate = foundBookings.map((booking: IBookingsAdmin) => {
      return (
        <AdminBookingWrapper key={booking._id}>
          <h4>
            Sittning: {booking.date} kl {booking.time}
          </h4>
          <p>Antal gäster: {booking.numberOfGuests}</p>
          <h5>Bokningsnummer: {booking._id}</h5>
        </AdminBookingWrapper>
      );
    });
    setBookingsByDate(bookingsByDate);
  };

  const bookingsHtml = bookings.map((booking: IBookingsAdmin) => {
    return (
      <AdminBookingWrapper
        onClick={() => {
          handleClick(booking);
        }}
        key={booking._id}>
        <h4>
          Sittning: {booking.date} kl {booking.time}
        </h4>
        <p>Antal gäster: {booking.numberOfGuests}</p>
        <h5>Bokningsnummer: {booking._id}</h5>
      </AdminBookingWrapper>
    );
  });

  return (
    <div>
      <H1>Last Dance</H1>
      <H2>RESTAURANG</H2>
      <H3>Administration</H3>
      <form onSubmit={handleSubmit}>
        <AdminBookingInput
          type="text"
          name="_id"
          placeholder="Bokningsnummer"></AdminBookingInput>
        <AdminBookingButton type="submit">Sök</AdminBookingButton>
        <AdminBookingInput
          onChange={handleOnChange}
          type="date"
          name="date"></AdminBookingInput>
      </form>
      <AdminBookingsWrapper>
        {bookingsByDate.length > 0 ? bookingsByDate : bookingsHtml}
      </AdminBookingsWrapper>
    </div>
  );
};

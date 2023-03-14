import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { IRestaurantContext } from "../../App";
import { IBookingsAdmin } from "../../models/IBookingsAdmin";
import {
  AdminBookingButton,
  AdminBookingInput,
  AdminBookingInputWrapper,
  AdminBookingsWrapper,
  AdminBookingWrapper,
  AdminForm,
  AdminWrapper,
} from "../styled/Admin";
import { H1, H3, H4 } from "../styled/Booking";

export const Admin = () => {
  const { bookings } = useOutletContext<IRestaurantContext>();
  const [bookingsByDate, setBookingsByDate] = useState<JSX.Element[]>([]);
  const navigate = useNavigate();

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
      navigate(`/admin/${foundBooking._id}`);
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
    <AdminWrapper>
      <H1>Last Dance</H1>
      <H4>restaurang</H4>
      <H3>Administration</H3>
      <AdminForm onSubmit={handleSubmit}>
        <AdminBookingInput
          onChange={handleOnChange}
          type="date"
          name="date"></AdminBookingInput>
        <AdminBookingInputWrapper>
          <AdminBookingInput
            type="text"
            name="_id"
            placeholder="Bokningsnummer"></AdminBookingInput>
          <AdminBookingButton type="submit">Sök</AdminBookingButton>
        </AdminBookingInputWrapper>
      </AdminForm>
      <AdminBookingsWrapper>
        {bookingsByDate.length > 0 ? bookingsByDate : bookingsHtml}
      </AdminBookingsWrapper>
    </AdminWrapper>
  );
};

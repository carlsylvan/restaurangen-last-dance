import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { IRestaurantContext } from "../../App";
import { checkedAvailableTables } from "../../functions/checkedAvailableTables";
import { IAvailableTime } from "../../models/IAvailableTime";
import { IBookingsAdmin } from "../../models/IBookingsAdmin";
import { AdminBookingButton } from "../styled/Buttons";
import { AdminForm } from "../styled/Forms";
import { H1, H3, H4 } from "../styled/Headings";
import { AdminBookingInput } from "../styled/Inputs";
import { AdminWrapper } from "../styled/Mains";
import { AdminBookingInputWrapper, AdminBookingsWrapper, AdminBookingWrapper, AvailableTablesWrapper } from "../styled/Wrappers";


export const Admin = () => {
  const { bookings } = useOutletContext<IRestaurantContext>();
  const [filteredBookings, setfilteredBookings] = useState<JSX.Element[]>([]);
  const [availableTables, setAvailableTables] = useState<IAvailableTime[]>([{bookingTime:"17:00", numOfAvailableTables: 0, isAvailable: true},{bookingTime:"21:00", numOfAvailableTables: 0, isAvailable: true}]);
  const navigate = useNavigate();


  useEffect(() => {
    handleFilter("");
  }, [bookings]);

  const handleClick = (booking: IBookingsAdmin) => {
    navigate(`/admin/${booking._id}`);
  };

  const handleClickLink = () => {
    navigate("/booking");
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
    let response = checkedAvailableTables(bookings, e.target.value, 0);
    setAvailableTables(response);
    handleFilter(findMatchingDates);
  };
  function handleFilter(findMatchingDates: string) {
    const foundBookings =
      findMatchingDates === ""
        ? bookings
        : bookings.filter((booking) => booking.date === findMatchingDates);

    let bookingsByDate = foundBookings
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .map((booking: IBookingsAdmin) => {

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
    setfilteredBookings(bookingsByDate);
  }
  console.log(availableTables);
  return (
    <>
      <AdminWrapper>
        <H1>Last Dance</H1>
        <H4>restaurang</H4>
        <H3>Administration</H3>
        <button onClick={handleClickLink}>Boka nytt bord</button>
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
        <AvailableTablesWrapper>
          <H4>Tilgängliga bord</H4>
        <div>
          <span>17:00 -</span>
          <span> {availableTables[0].numOfAvailableTables}st</span>
        </div>
        <div>
          <span>21:00 -</span>
          <span> {availableTables[1].numOfAvailableTables}st</span>
        </div>
        </AvailableTablesWrapper>
        <AdminBookingsWrapper>
          {filteredBookings.length > 0 ? (
            filteredBookings
          ) : (
            <p>Hittade inga bokningar</p>
          )}
        </AdminBookingsWrapper>
      </AdminWrapper>
    </>
  );
};

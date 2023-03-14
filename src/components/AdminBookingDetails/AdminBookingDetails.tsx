import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBookingsAdmin } from "../../models/IBookingsAdmin";
import { getBookedTableById } from "../../services/bookingService";

export const AdminBookingDetails: React.FC = () => {
  const [bookedTable, setBookedTable] = useState<IBookingsAdmin>({
    _id: "",
    restaurantId: "",
    date: "",
    time: "",
    numberOfGuests: 0,
    customerId: "",
  });

  const {id} = useParams();
  
  useEffect(() => {
    if (id !== undefined) { // check if id is defined
      const fetchBookedTable = async () =>  {
        const { bookedTable, error } = await getBookedTableById(id);
        if (error) {
          console.log("Error fetching booked table: ", error);
        } else {
          setBookedTable(bookedTable!);
        }
      };
      fetchBookedTable();
    }
  }, [id]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBookedTable((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdateClick = () => {
    // Call API service to update the booked table here
    console.log("Updated table: ", bookedTable);
  };

  return (
    <div>
      <label>
        Date:
        <input
          type="text"
          name="date"
          value={bookedTable.date}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Time:
        <input
          type="text"
          name="time"
          value={bookedTable.time}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Number of Guests:
        <input
          type="number"
          name="numberOfGuests"
          value={bookedTable.numberOfGuests}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleUpdateClick}>Update Table</button>
    </div>
  );
};
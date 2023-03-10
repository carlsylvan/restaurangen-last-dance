import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBookedTable } from "../../models/IBookedTable";
import { getBookedTableById } from "../../services/bookingService";

export const AdminBookingDetails = () => {
    const [bookedTable, setBookedTable] = useState<IBookedTable>();
    const [error, setError] = useState("");
  
    const { id } = useParams();
  
    useEffect(() => {
      const getData = async () => {
        if (id) {
          let response = await getBookedTableById(id);
  
          if (response.bookedTable) {
            setBookedTable(response.bookedTable);
          } else {
            setError(response.error);
          }
        }
      };
  
      if (bookedTable) return;
  
      getData();
    });
    console.log(bookedTable);
  
    return (
      <>
        {error !== "" ? (
          <>
            <h2>{error}</h2>
          </>
        ) : (
          <>
            <h3>Hej</h3>
            <p>{bookedTable?.id}</p>
          </>
        )}
      </>
    );
  };
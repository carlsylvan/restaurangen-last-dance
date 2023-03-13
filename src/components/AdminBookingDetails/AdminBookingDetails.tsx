import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBookedTable } from "../../models/IBookedTable";
import { IBookingCustomer } from "../../models/IBookingCustomer";
import {
  deleteBookingById,
  getBookedTableById,
  getCustomerById,
  updateBookingById,
  updateCustomerById,
} from "../../services/bookingService";
import {
  BookingWrapper,
  Button,
  ButtonWrapper,
  ChooseTime,
  ContactWrapperInput,
  // Form,
  H1,
  // H2,
  H3,
  Input,
  // InputWrapper,
  Label,
} from "../styled/Booking";

export const AdminBookingDetails = () => {
  const [bookedTable, setBookedTable] = useState<IBookedTable>();
  const [customer, setCustomer] = useState<IBookingCustomer>();
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

    if (!bookedTable) {
      getData();
    }
  }, [id, bookedTable]);
  useEffect(() => {
    const getData = async () => {
      if (id && bookedTable?.customerId) {
        let response = await getCustomerById(bookedTable.customerId);

        if (response.bookingCustomer) {
          setCustomer(response.bookingCustomer);
        } else {
          setError(response.error);
        }
      }
    };

    if (!customer) {
      getData();
    }
  }, [id, bookedTable, customer]);

  const handleUpdateBooking = () => {
    updateBookingById(bookedTable?._id ?? "");
    updateCustomerById(customer?.id ?? "");
    console.log(bookedTable?._id);
    console.log(customer?.id);
  };

  const handleDeleteBooking = () => {
    deleteBookingById(bookedTable?._id ?? "");
  };

  return (
    <></>
    // <BookingWrapper>
    //   <H3>Redigera bokning med referensnummer: {id}</H3>
    //   <Form>
    //     <InputWrapper>
    //       <Label>Antal personer: </Label>
    //       <Input
    //         type="text"
    //         value={bookedTable?.numberOfGuests}
    //         name="numberOfGuests"
    //         required
    //       />
    //     </InputWrapper>
    //     <InputWrapper>
    //       <Label htmlFor="start">Datum: </Label>
    //       <Input
    //         type="date"
    //         id="start"
    //         value={bookedTable?.date}
    //         name="date"
    //         min="2023-03-09"
    //         max="2023-12-31"
    //         required
    //       />
    //     </InputWrapper>

    //     <ButtonWrapper>
    //       <ChooseTime>
    //         17:00
    //       </ChooseTime>
    //       <ChooseTime>
    //         21:00
    //       </ChooseTime>
    //     </ButtonWrapper>
    //     <ContactWrapperInput>
    //       <div>
    //         <Input
    //           type="text"
    //           placeholder="Förnamn"
    //           name="name"
    //           value={customer?.name}
    //           required
    //         />
    //         <Input
    //           type="text"
    //           placeholder="Efternamn"
    //           name="lastname"
    //           value={customer?.lastname}
    //           required
    //         />
    //       </div>
    //       <Input
    //         type="email"
    //         placeholder="Epost"
    //         name="email"
    //         value={customer?.email}
    //         required
    //       />
    //       <Input
    //         type="tel"
    //         placeholder="Tel-xxxxxxxxxx"
    //         name="phone"
    //         value={customer?.phone}
    //         pattern="[0-9]{10}"
    //         required
    //       />
    //     </ContactWrapperInput>
    //     <Button type="submit" onClick={handleUpdateBooking}>Redigera</Button>
    //     <Button type="submit" onClick={handleDeleteBooking}>Ta bort</Button>
    //   </Form>
    // </BookingWrapper>
  );
};

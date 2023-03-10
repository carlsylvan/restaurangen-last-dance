import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBookedTable } from "../../models/IBookedTable";
import { getBookedTableById } from "../../services/bookingService";
import { BookingWrapper, Button, ButtonWrapper, ChooseTime, ContactWrapperInput, Form, H1, H2, H3, Input, InputWrapper, Label } from "../styled/Booking";

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
    
      if (!bookedTable) {
        getData();
      }
    }, [id, bookedTable]
);
    return (
      <BookingWrapper>
        <div>
          <H1>Last Dance</H1>
          <H2>Restaurang</H2>
        </div>
        <H3>Bokning</H3>
        <Form>
          <InputWrapper>
            <Label>Antal personer: </Label>
            <Input
              type="text"
              value={bookedTable?.numberOfGuests}
              name="numberOfGuests"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="start">Datum: </Label>
            <Input
              type="date"
              id="start"
              value={bookedTable?.date}
              name="date"
              min="2023-03-09"
              max="2023-12-31"
              required
            />
          </InputWrapper>
  
          <ButtonWrapper>
            <ChooseTime>
              17:00
            </ChooseTime>
            <ChooseTime>
              21:00
            </ChooseTime>
          </ButtonWrapper>
          <ContactWrapperInput>
            <div>
              <Input
                type="text"
                placeholder="Förnamn"
                name="name"
                value={bookedTable?.customerId}
                required
              />
              <Input
                type="text"
                placeholder="Efternamn"
                name="lastname"
                value={bookedTable?.customerId}
                required
              />
            </div>
            <Input
              type="email"
              placeholder="Epost"
              name="email"
              value={bookedTable?.customerId}
              required
            />
            <Input
              type="tel"
              placeholder="Tel-xxxxxxxxxx"
              name="phone"
              value={bookedTable?.customerId}
              pattern="[0-9]{10}"
              required
            />
          </ContactWrapperInput>
          <Button type="submit">Redigera</Button>
          <Button type="submit">TA BORT</Button>
        </Form>
      </BookingWrapper>
    );

  };
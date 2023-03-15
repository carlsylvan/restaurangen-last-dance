import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IBooking } from "../../models/IBooking";
import { H1, H3, H4 } from "../styled/Booking";

export const BookingConfirmation = () => {
  const [booking, setBooking] = useState<IBooking>();
  const { id } = useParams();

  const ConfirmationPageWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
    margin: 25px 0px 50px 0px;
    > div {
      width: 90%;
      padding: 0px 15px;
      box-shadow: 1px 0px 20px rgba(151, 149, 149, 0.8),
        0px 10px 5px rgba(151, 149, 149, 0.1);
      border-radius: 18px;
      margin: 25px 0px 50px 0px;
      @media screen and (min-width: 768px) {
        width: 60%;
      }
      @media screen and (min-width: 1200px) {
        width: 50%;
      }
      @media screen and (min-width: 1400px) {
        width: 40%;
      }
      p {
        font-size: 18px;
        font-weight: 500;
        span {
          font-weight: 400;
          font-size: 16px;
        }
      }
    }
  `;

  useEffect(() => {
    let myBooking: IBooking = JSON.parse(
      localStorage.getItem("booking") || "[]"
    );

    setBooking(myBooking);
  }, []);

  return (
    <ConfirmationPageWrapper>
      <H1>Last Dance</H1>
      <H4>restaurang</H4>
      <H3>Tack för din bokning!</H3>
      <div>
        <p>
          Bokningsnummer: <span>{id}</span>
        </p>
        <p>
          Datum: <span>{booking?.date}</span>
        </p>
        <p>
          Tid: <span>{booking?.time}</span>
        </p>
        <p>
          Antal gäster: <span>{booking?.numberOfGuests}</span>
        </p>
        <p>
          Namn:{" "}
          <span>{`${booking?.customer.name} ${booking?.customer.lastname}`}</span>
        </p>
        <p>
          E-post: <span>{booking?.customer.email}</span>
        </p>
        <p>
          Mobil: <span>{booking?.customer.phone}</span>
        </p>
        <p>En bokningsbekräftelse har skickats till din E-post</p>
      </div>
    </ConfirmationPageWrapper>
  );
};

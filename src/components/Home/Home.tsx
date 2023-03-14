import { Link } from "react-router-dom";
import styled from "styled-components";
import { AdminBookingButton } from "../styled/Admin";
import { H1, H4 } from "../styled/Booking";

export const Home = () => {
  const RestaurantSlogan = styled.h2`
    width: 80%;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 4px black;
  `;

  const HomeBookingButton = styled(AdminBookingButton)`
    width: 150px;
    height: 45px;
    font-size: 18px;
    &:hover {
      opacity: 0.85;
    }
  `;

  return (
    <>
      <H1>Last Dance</H1>
      <H4>restaurang</H4>
      <RestaurantSlogan>
        Njut av traditionell husmanskost tillagad med kärlek och omsorg. En
        smakupplevelse som tar dig tillbaka till gamla goda tider!
      </RestaurantSlogan>
      <Link to="/booking">
        <HomeBookingButton>Boka</HomeBookingButton>
      </Link>
    </>
  );
};

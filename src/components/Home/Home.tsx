import { Link } from "react-router-dom";
import { H1, H4 } from "../styled/Booking";
import { HomeBookingButton, RestaurantSlogan } from "../styled/StartPage";

export const Home = () => {
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

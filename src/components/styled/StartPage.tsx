import styled from "styled-components";
import { AdminBookingButton } from "./Admin";

export const RestaurantSlogan = styled.h2`
width: 80%;
text-align: center;
color: white;
text-shadow: 2px 2px 4px black;
`;

export const HomeBookingButton = styled(AdminBookingButton)`
width: 150px;
height: 45px;
font-size: 18px;
&:hover {
  opacity: 0.85;
}
`;
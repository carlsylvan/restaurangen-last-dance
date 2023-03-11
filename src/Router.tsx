import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Admin } from "./components/Admin/Admin";
import { Booking } from "./components/Booking/Booking";
import { Contact } from "./components/Contact/Contact";
import { Home } from "./components/Home/Home";
import { Menu } from "./components/Menu/Menu";
import { StartPageWrapper } from "./components/styled/Wrappers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: (
          <StartPageWrapper>
            <Home />
          </StartPageWrapper>
        ),
        index: true,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/booking",
        element: <Booking></Booking>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/admin",
        element: <Admin></Admin>,
      },
      // {
      //     path: "/admin/:id",
      //     element: <AdminBookingDetails></AdminBookingDetails>,
      // },
    ],
  },
]);

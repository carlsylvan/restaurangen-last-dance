import  { useEffect, useState } from "react";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { HamburgerLogo } from "./components/HamburgerLogo/HamburgerLogo";
import {
  FooterWrapper,
  HamburgerWrapper,
  HeaderWrapper,
  NavWrapper,
  PageWrapper,
} from "./components/styled/Wrappers";


import { getBookings } from "./services/bookingService";
import { IBookingsAdmin } from "./models/IBookingsAdmin";

export interface IRestaurantContext {
  bookings: IBookingsAdmin[];
  changeLoadedFromApi(): void;
}

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [bookings, setBookings] = useState<IBookingsAdmin[]>([]);
  const [loadedFromApi, setLoadedFromApi] = useState<boolean>(false);


  useEffect(() => {
    const getBookingData = async () => {
      let bookings = await getBookings();
      setBookings(bookings);
    };
    if (loadedFromApi) {
      return;
    }
    getBookingData();
    setLoadedFromApi(true);
  });
  const handleOpenMenu = (status: boolean) => {
    setOpen(status);
  };
  const changeLoadedFromApi = () => {
    setLoadedFromApi(false);
  };

  const handleClick = () => {
    setOpen(false);
  }
  return (
    <div className="App">
      <HeaderWrapper>
        <NavWrapper open={open}>
          <Nav handleOpenMenu={handleOpenMenu} open={open}></Nav>
        </NavWrapper>
        <HamburgerWrapper>
          <HamburgerLogo handleOpenMenu={handleOpenMenu} open={open} />
        </HamburgerWrapper>
      </HeaderWrapper>
      <PageWrapper onClick={handleClick}>
        <Outlet context={{ bookings, changeLoadedFromApi }}></Outlet>
      </PageWrapper>
      <FooterWrapper>
        <Footer></Footer>
      </FooterWrapper>
    </div>
  );
}

export default App;

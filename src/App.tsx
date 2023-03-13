import React, { useEffect, useState } from "react";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { HamburgerLogo } from "./components/HamburgerLogo/HamburgerLogo";
import { FooterWrapper, HamburgerWrapper, HeaderWrapper, NavWrapper, PageDownIconWrapper, PageWrapper } from "./components/styled/Wrappers";
import {IoIosArrowDown} from "react-icons/io";

import { getBookings } from "./services/bookingService";
import { IBooking } from "./models/IBooking";
import { H1, H4 } from "./components/styled/Booking";

export interface IRestaurantContext {
  bookings: IBooking[];
  changeLoadedFromApi(): void
}

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [loadedFromApi, setLoadedFromApi] = useState<boolean>(false);
  useEffect(() => {
    const getBookingData = async () => {
      let bookings = await getBookings();
      setBookings(bookings)
    };
    if(loadedFromApi){
      return
    }
    getBookingData();
    setLoadedFromApi(true);
  });
  const handleOpenMenu = (status:boolean) =>{
    setOpen(status);
  }
  const changeLoadedFromApi = () => {
    setLoadedFromApi(false);
  }
  const handleMoveDown = () => {
    // console.log("move down");
  }
  console.log(bookings);
  return (
    <div className="App">
      <HeaderWrapper  >
          <H1>Last Dance</H1>
          <H4>restaurang</H4>
          <NavWrapper open={open}>
            <Nav></Nav>
          </NavWrapper>
          <HamburgerWrapper>
            <HamburgerLogo handleOpenMenu = {handleOpenMenu} open = {open}/>
          </HamburgerWrapper>
      </HeaderWrapper>
      <PageWrapper>
        <Outlet context={{bookings, changeLoadedFromApi}}></Outlet>
        <PageDownIconWrapper onClick={handleMoveDown}>
          <IoIosArrowDown />
        </PageDownIconWrapper>
      </PageWrapper>
      <FooterWrapper>
        <Footer></Footer>
      </FooterWrapper>
    </div>
  );
}

export default App;

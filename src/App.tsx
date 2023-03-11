import React, { useState } from "react";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { HamburgerLogo } from "./components/HamburgerLogo/HamburgerLogo";
import {
  FooterWrapper,
  HamburgerWrapper,
  HeaderWrapper,
  PageWrapper,
} from "./components/styled/Wrappers";
import { IoIosArrowDown } from "react-icons/io";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenMenu = (status: boolean) => {
    setOpen(status);
  };

  const handleMoveDown = () => {
    console.log("move down");
  };
  console.log(open);
  return (
    <div className="App">
      <HeaderWrapper open={open}>
        <Nav></Nav>
        <HamburgerWrapper>
          <HamburgerLogo handleOpenMenu={handleOpenMenu} open={open} />
        </HamburgerWrapper>
      </HeaderWrapper>
      <PageWrapper>
        <Outlet></Outlet>
        {/* <IoIosArrowDown /> */}
      </PageWrapper>
      <FooterWrapper>
        <Footer></Footer>
      </FooterWrapper>
    </div>
  );
}

export default App;

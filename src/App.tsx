import React, { useState } from "react";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { HamburgerLogo } from "./components/HamburgerLogo/HamburgerLogo";
import { FooterWrapper, HamburgerWrapper, NavWrapper, PageWrapper } from "./components/styled/Wrappers";


function App() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenMenu = (status:boolean) =>{
    setOpen(status);
  }
  console.log(open)
  return (
    <div className="App">
      <header>
        <NavWrapper open={open} >
          <Nav></Nav>
        </NavWrapper>
        <HamburgerWrapper>
          <HamburgerLogo handleOpenMenu = {handleOpenMenu} open = {open}/>
        </HamburgerWrapper>
      </header>
      <PageWrapper>
        <Outlet></Outlet>
      </PageWrapper>
      <FooterWrapper>
        <Footer></Footer>
      </FooterWrapper>
    </div>
  );
}

export default App;

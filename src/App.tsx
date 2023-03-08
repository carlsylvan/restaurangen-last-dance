import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav/Nav';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;

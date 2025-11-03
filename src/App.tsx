 import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home'
import AboutUs from './views/AboutUs'
import Service from './views/Service'
import Contact from './views/Contact';
import Booking from './views/Booking';

import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {
  return (
    <BrowserRouter>
     <Header></Header>
    <main>
     <Routes>
      <Route path= "/home" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path ="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/booking" element={<Booking />} />
      
     </Routes>
     </main> 
     <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

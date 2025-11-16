 import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home'
import AboutUs from './views/AboutUs'
import Service from './views/Service'
import Contact from './views/Contact';
import Booking from './views/Booking';
import NotFound from "./views/NotFound";
import BookingFormular from "./components/BookingFormular";
import ScrollToTop from "./components/ScrollToTop";


import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
     <Header></Header>
    <main>
     <Routes>
      <Route path= "/home" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path ="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/booking" element={<BookingFormular />} />
      <Route path="/" element={<Home/>} />
      
     </Routes>
     </main> 
     <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

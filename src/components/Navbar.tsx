 import React from "react";
import logo from "../assets/Logo-storaid.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Link className="logo" to="/">
          <img src={logo} />
        </Link>

        <nav>
          <NavLink className="nav-link" to="/aboutus">AboutUs</NavLink>
            
          <NavLink className="nav-link" to="/service">Service</NavLink>
            
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
            
          
        </nav>
        <div className="search">
          <i className="fa-regular fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

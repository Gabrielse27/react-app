import React from "react";
import "./header.css";
import logo from "../assets/storaid-logo.svg";
import { Link, NavLink } from "react-router-dom";



/* Top Bar + Nav Bar */

const Header = () => {
  return (
    <header>

<div className="topbar-bg text-white py-2" role="contentinfo" aria-label="Kontaktinformation och sociala länkar">
        <div className="container d-flex justify-content-between align-items-center small">
          <div>
            
            <a href="tel:+46 8 123 122 44" className="phone-link">
            <i className="bi bi-telephone-fill me-2"></i> +46 8 123 122 44 
            </a>

            <span className="mx-3">|</span>

            <a href="mailto:contact@domain.com" className="email-link">
            <i className="bi bi-envelope-fill me-2"></i> contact@domain.com
            </a>

          </div>
          <div className="d-flex gap-4 social-icons">

            <a
  href="https://www.facebook.com/StorAid"
  target="_blank"
  rel="noopener noreferrer"
  className="social-icon-link"
  aria-label="Besök StorAid på Facebook"
>
  <i className="bi bi-facebook" aria-hidden="true"></i>
</a>

  

            <a href="https://www.twitter.com/StorAid" target="_blank"rel="noopener noreferrer"
            className="social-icon-link" aria-label="Följ StorAid på Twitter"><i className="bi bi-twitter" aria-hidden="true"></i>
            </a>


            <a href="https://www.instagram.com/StorAid" target="_blank"rel="noopener noreferrer"
             className="social-icon-link" aria-label="Följ StorAid på Instagram"><i className="bi bi-instagram" aria-hidden="true"></i></a>


            <a href="https://www.youtube.com/StorAid" target="_blank"rel="noopener noreferrer"
             className="social-icon-link" aria-label="Följ StorAid på YouTube"><i className="bi bi-youtube" aria-hidden="true"></i></a>

            
                
              
          </div>
        </div>
      </div>




      <nav className="navbar navbar-expand-lg bg-white shadow-sm" role="navigation" aria-label="Huvudnavigering">

        <div className="container">
          <Link className="navbar-brand" to="/home">
  <img src={logo} alt="StorAid Logo" height="50" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto d-flex flex-row gap-5">

              <li className="nav-item">

                <NavLink
  to="/home"
  className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
                >
                Home
                </NavLink>
              </li>


              <li className="nav-item">
                <NavLink 
to="/aboutus"
  className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}     
                >
               About Us
               </NavLink>
              </li>  

              <li className="nav-item">
                <NavLink
to="/service"
  className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
                 >
                Service
                </NavLink>
              </li>


              <li className="nav-item">
                <NavLink 
to="/contact"
  className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
                
                >
                Contact Us
                </NavLink>

              </li>
              
            </ul>
            <NavLink  className="btn btn-warning btn-top" to="/booking">Book Now</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

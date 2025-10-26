import React from "react";
import logo from "../assets/Logo-storaid.svg";




/* Top Bar + Nav Bar */

const Header = () => {
  return (
    <header>

<div className="topbar-bg text-white py-2">
        <div className="container d-flex justify-content-between align-items-center small">
          <div>
            <i className="bi bi-telephone-fill me-2"></i> +46 8 123 122 
            <span className="mx-3">|</span>
            <i className="bi bi-envelope-fill me-2"></i> contact@domain.com
          </div>
          <div className="d-flex gap-4 social-icons">

            <a
  href="https://www.facebook.com/StorAid"
  target="_blank"
  rel="noopener noreferrer"
  className="social-icon-link"
>
  <i className="bi bi-facebook"></i>
</a>

  

            <a href="#" className="text-warning"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-warning"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-warning"><i className="bi bi-youtube"></i></a>

            
                
              
          </div>
        </div>
      </div>




      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
  <img src={logo} alt="StorAid Logo" height="40" />
          </a>
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
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              
            </ul>
            <button className="btn btn-warning btn-top">Book Now</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

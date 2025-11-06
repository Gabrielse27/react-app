import React from 'react';
import { useNavigate } from "react-router-dom";
import './cta-section.css';

const  CtaSection= () => {
const navigate = useNavigate();

const handleBookingClick = () => {
  navigate("/booking");
};




  return (
    
     <section className = "cta-section">
        <h3 className="cta-title">Looking for Secure and Flexible Storage? Find<br>
        </br> Your Perfect Fit With Us.</h3>
        <p className="cta-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
        <button className="cta-button" onClick={handleBookingClick}>Book Now</button>







     </section>
  )
}

export default CtaSection
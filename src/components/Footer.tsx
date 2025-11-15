 import React from "react";
 import { FaChevronCircleRight } from "react-icons/fa";
import "./footer.css"; 

const Footer = () => {
  return (
    <div className="footer-section" role="contentinfo"
      aria-label="Webbplatsens sidfot med upphovsrätt och länkar till villkor">

        <div className="footer-rights">© 2025 StorAid,All rights reserved.</div>

        <ul className="footer-terms">

            <li><FaChevronCircleRight aria-hidden="true"/> 
            <a href="/true" aria-label="Read our Terms and Conditions">
            Terms & Conditions</a>
            </li>


            <li><FaChevronCircleRight aria-hidden="true"/> 
            <a href="/policy" aria-label="Read Privacy Policy Conditions">
            Privacy Policy</a>
            </li>
        </ul>
        




    </div>







  )
}

export default Footer;
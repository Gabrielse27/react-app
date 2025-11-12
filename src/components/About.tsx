 import React from 'react';
 import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {

const navigate = useNavigate();

const handleDiscoverClick = () => {
  navigate("/does-not-exist");
};


  return (
    <section className="about-section" aria-label="Om StorAid, information om företaget">
      <div className="container about-content">
        {/* Vänster bild + statistik */}
        <div className="about-image">
          <img src="src/assets/about-img.svg" alt="Storage Illustration" />
          <div className="stats-overlay">

            <div className="stats-align">
            <div><h3>12+</h3><p>Years of Experience</p></div>
            <div><h3>150K+</h3><p>Satisfied Clients</p></div>
            <div><h3>35+</h3><p>Warehouse</p></div>
            </div>

          </div>
        </div>

        {/* Textinnehåll */}
        <div className="about-text">
          <p className="section-tag" >About Us</p>
          <h2 className="about-title">Providing a Safe Space for <br> 
          </br>Your Treasured Items</h2>
           
          <p className="about-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.
          </p>

          <div className="info-boxes">
            <div className="info-box">
              <h4>Vision</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            </div>
            <div className="info-box right">
              <h4>Mission</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            </div>
          </div>


           



          <div className="about-footer">
            <button className="btn-discover-more" onClick={
              handleDiscoverClick
            } aria-label="Läs mer om StorAids tjänster och erbjudanden">Discover More</button>

            <div className="contact-info">


           <div className="phone-icon">
              <i className="bi bi-telephone-fill" aria-hidden="true"></i>
            </div>


              <div className="contact-text">
   <a href="tel:+46812312244" className="contact-text" aria-label="Ring oss på telefonnummer 08 123 122 44">
                <p>More Information</p>
                <strong>+46 8 123 122 44</strong>
   </a>
            </div>
           </div> {/* contact-info */}

          
              
            </div> {/* about-footer */}

          </div>{/* about-text */}

        </div>  {/* container-about-content*/}
      
    </section>
  );
};

export default About;
 import React from "react";
import "./Services.css"; // vi skapar denna strax
import serviceImage from "../assets/services.svg"


const Services = () => {
  return (
    <section className="services-section" aria-labelledby="services-heading">
      <div className="services-text">
        <div className="services-left">

        <p className="section-tag-services">Our Services</p>
        <h2 id="services-heading">Specialized Storage for<br>
        </br> Every Special Item</h2>
</div>

        <p className="services-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida.
          Nulla quis nulla leo. Mauris ac blandit nisl, non sodales augue. Phasellus eget elit gravida.
        </p>
      </div>



      <div className="services-content" role="list">
        <div className="left-boxes">
          <div className="service-card highlighted" role="listitem" aria-label="Diverse Unit Sizes">
            <h4>Diverse Unit Sizes</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          <div className="service-card" role="listitem" aria-label="Moving Assistance">
            <h4>Moving Assistance</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>

        <div className="service-image">
          <img src={serviceImage} alt="Illustration av förrådsservice och flyttstöd" />
        </div>

        <div className="right-boxes">
          <div className="service-card" role="listitem" aria-label="Vehicle Storage">

            <h4>Vehicle Storage</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          <div className="service-card" role="listitem" aria-label="Top-Notch Security">
            <h4>Top-Notch Security</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

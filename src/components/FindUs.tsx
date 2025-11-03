 import React from 'react'
 import '@fortawesome/fontawesome-free/css/all.min.css';
 import './findus.css'
 
  const FindUs = () => {
   return (

              <section className="findus-section">
     
        <div className="findus-area">

       <div className="findus-photo">
        <img src="src/assets/findusphoto.svg" alt="Find us image"/>
        </div>    
        



        <div className="findus-content">

           <h2 className="findus-text">Find Us On :</h2>

              <p className="findus-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br>
              </br> luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            

        {/* === Kontaktinformation med ikoner === */}
          <div className="contact-info">
        
           <div className="phone-area">
            <div className="info-item">
              <i className="fa-solid fa-phone"></i>
              <div>
                <h4>Call Center</h4>
                <p>+46 8 123 122 44</p>
              </div> 
            </div>
            </div>


         <div className="email-area">
            <div className="info-item">
              <i className="fa-solid fa-envelope"></i>
              <div>
                <h4>Email Address</h4>
                <p>contact@domain.com</p>
              </div>
            </div>
        </div>



         <div className="location-area">
            <div className="info-item">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h4>Location</h4>
                <p>Klarabergsviadukten 90, Stockholm</p>
              </div>
            </div>
          </div>
      </div>



          {/* === Sociala medier-sektion === */}
          <div className="social-section">
            <h4>Our Social Media</h4>
            <div className="social-line"></div>
            <div className="social-icons-findus">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>


        </div>


      </div>
        
     
     </section>

   )
 }
 
 export default FindUs
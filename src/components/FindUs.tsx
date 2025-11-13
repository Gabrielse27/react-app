 import React from 'react'
 import '@fortawesome/fontawesome-free/css/all.min.css';

 import './findus.css'
 
  const FindUs = () => {
   return (

              <section className="findus-section">
     
        <div className="findus-area">

       <div className="findus-photo">
        <img src="src/assets/findusphoto.svg" alt="Karta som visar var du kan hitta oss"/>
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
                <p><a href="tel:+46812312244" className="contact-link">+46 8 123 122 44</a></p>
              </div> 
            </div>
            </div>


         <div className="email-area">
            <div className="info-item">
              <i className="fa-solid fa-envelope"></i>
              <div>
                <h4>Email Address</h4>
                <p><a href="mailto:contact@domain.com" className="contact-link">contact@domain.com</a></p>
              </div>
            </div>
        </div>



         <div className="location-area">
            <div className="info-item">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h4>Location</h4>
                <p><a
    href="https://www.google.com/maps?q=Klarabergsviadukten+90,+Stockholm"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Öppna adressen Klarabergsviadukten 90, Stockholm i Google Maps"
    className="location-link">
                    Klarabergsviadukten 90, Stockholm
                    </a></p>
              </div>
            </div>
          </div>
      </div>



          {/* === Sociala medier-sektion === */}
          <div className="social-section">
            <h4>Our Social Media</h4>
            <div className="social-line"></div>
            <div className="social-icons-findus">

                <a
  href="https://www.facebook.com/StorAid"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Besök oss på Facebook"
  className="social-link"
>
  <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
</a>


              


              <i className="fa-brands fa-x-twitter"></i>

              <a href="https://www.instagram.com/StorAid" target="_blank" rel="noopener noreferrer"
               aria-label="Besök oss på Instagram" className="social-link">
              <i className="fa-brands fa-instagram"></i>
              </a>



              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>


        </div>


      </div>
        
     
     </section>

   )
 }
 
 export default FindUs
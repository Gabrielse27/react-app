 import React from 'react';
 import securityIcon from "../assets/security-icon.svg";
import './why-choose-us.css';

const WhyChooseUs = () => {
  return (

 
 <section className="why-choose-us py-5" aria-labelledby="why-choose-heading">
  <div className="container">
    <div className="row align-items-start ml-5">

      {/* Vänsterkolumn: Titel + Ikoner */}
      <div className="col-lg-6">
        <p className="subtitle text-warning fw-bold">Why Choose Us</p>
        <h2 id="why-choose-heading" className="section-title fw-bold mb-4">
          Choose Us for Exceptional<br />
          Storage Solutions
        </h2>

        <div className="feature-list">
          {/* Ikonlista här */}

        <div className="feature d-flex align-items-start mb-4">
              <div className="security-icon me-4">
              <img  src ={securityIcon}  alt="security icon" width={45}/>
                </div>
              <div>
                <h5 className="mb-1 security" >Security and Safety</h5>
                <p className="small" style={{ color: "#12372A"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>


            <div className="feature d-flex align-items-start mb-4">
              <div className="flexible-icon me-3">
                <img src="src/assets/flexible-icon.svg" alt="flexible icon" width={45}/>
              </div>
              <div>

                <div className="ms-3">
                <h5 className="mb-1 flexible">Flexible and Affordable</h5>
                <p className="small" style={{ color: "#12372A"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>

            <div className="feature d-flex align-items-start mb-4">
              <div className="clean-icon">
                <img src="src/assets/clean-icon.svg" alt="clean icon" width={45}/>
              </div>
              <div>
      <div className="ms-4">
                <h5 className="mb-1 clean">Clean and Well-Maintained Facilities</h5>
                <p className="small" style={{ color: "#12372A"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

              </div>
            </div>


            <div className="feature d-flex align-items-start">
              <div className="access-icon">
                <img src="src/assets/access-icon.svg" alt="access icon" width={45}/>
              </div>
              <div>

                <div className="ms-4">
                <h5 className="mb-1 access">24/7 and Convenient Access</h5>
                <p className="small" style={{ color: "#12372A"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </div>
              </div>
            </div>
          </div>

        
      </div>

      {/* Högerkolumn: TEXT över bilden */}
      <div className="col-lg-6">
        {}
        <p className="mb-4 mt-5" style={{ color: "#12372A"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. 
          Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue.
        </p>

        {/* Bild */}
        <div className="image">
        <img src="src/assets/whychoose.svg" alt="Storage" className="img-fluid rounded shadow" />
      </div>
    </div>
    </div>
  </div>
</section>
  )
}
  

export default WhyChooseUs;
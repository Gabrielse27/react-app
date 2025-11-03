import React from 'react'
import './bookingformular.css';
 
  const BookingFormular = () => {
   return (

    <div className="get-in-touch-container">

        

        <div className="get-in-touch-content">

            <div className="left-content">
      <h4 className="first-title">Get in Touch</h4>
      <h2 className="second-text">Get Personalized Assistance<br />
       -Contact Us</h2>
      
      <p className="intro-text">If you have any questions or would like to learn more about our services, please don't hesitate to reach out. We're here to help!</p>
</div>
     


     <div className="right-content">
      <div className="image">
        <img src="src/assets/whychoose.svg" alt="Storage" className="img-fluid rounded shadow" />
        </div>
      </div>
     </div>
      

      <form className="get-in-touch-form">

  { /* <div className="form-group">

        <label>
            Your Name<span className="required">*</span>
        </label>
        <input type="text" placeholder="Your Name" required />
     </div>  */}


       <div className="form-group">
        
     <div className="small-inputs">
        <div className="input-field">
        <label>
            Email<span className="required">*</span>
        </label>
        <input type="email" placeholder="Email" required />
     </div>


     <div className="input-field">
        <label>
            Telephone<span className=""></span>
        </label>
        <input type="tel" placeholder="Telephone" required />
    </div>
         </div>
        </div>


     <div className="input-field">
        <label>
            Subject<span className="required">*</span>
        </label>
        <input type="text" placeholder="How can we help you!" required />
        </div>


      <div className="input-field">
        <label>
            Comments / Questions <span className="required">*</span>
        </label>
        <textarea placeholder="Comments" required></textarea>
      </div>


        <button type="submit">Submit</button>

        
      </form>
</div>
        
    
      
  )
}

 
  export default BookingFormular
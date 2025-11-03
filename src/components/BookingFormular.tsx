import React from 'react'
import './bookingformular.css';
 
  const BookingFormular = () => {
   return (

    <div className="booking-container">

        

        <div className="booking-content">

            <div className="left-content">
      <h4 className="first-title">Booking Unit</h4>
      <h2 className="second-text">Booking Your Storage Unit Now<br />
       & Simplify Your Life!</h2>

<div className="image">
        <img src="src/assets/whychoose.svg" alt="Storage" className="img-fluid rounded shadow" />
        </div>


      
      
</div>
     </div>


     <div className="right-content">


<p className="intro-text">If you have any questions or would like to learn more about our services, please don't hesitate to reach out. We're here to help!</p>

      
      
     </div>
      

    

      <form className="booking-form">

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
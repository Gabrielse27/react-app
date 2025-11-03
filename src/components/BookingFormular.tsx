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

      <div className='formular-text'>
<p className="intro-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, nostrum dolorem, veritatis neque quaerat ab minima eveniet non incidunt reiciendis libero magni! Doloremque culpa eligendi ullam facere ea doloribus iure.</p>

</div>  {/*  div formular-text*/}
      
      
    
      

    

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


        <button type="submit">Book Unit</button>

        
      </form>








</div> {/*   div right content*/}

</div>
        
    
      
  )
}

 
  export default BookingFormular
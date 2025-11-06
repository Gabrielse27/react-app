 import React from "react";
 import "./notfound-page.css"
 
 export default function NotFound() {
   return (
     <div className="notfound-container">
       <div className="notfound-content">
         <h3>Oops!</h3>
         <h1>Page Not Found</h1>
         <p>
           Sorry, the page you are looking for does not exist. It may have been
           moved, removed altogether, or is temporarily unavailable.
         </p>
         <a href="/" className="back-home-btn">
           Back To Home
         </a>
       </div>
     </div>
   );
 }
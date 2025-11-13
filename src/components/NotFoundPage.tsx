 import React from "react";
 import { useNavigate } from "react-router-dom"
 import "./notfound-page.css"
 
 export default function NotFound() {

    const navigate = useNavigate();
    
    const handleDiscoverClick = () => {
      navigate("/home");
    };



   return (
     <main className="notfound-container" role="main" aria-labelledby="notfound-title">
       <div className="notfound-content">
         <h3>Oops!</h3>
         <h1 id="notfound-title">Page Not Found</h1>
         <p>
           Sorry, the page you are looking for does not exist. It may have been
           moved, removed altogether, or is temporarily unavailable.
         </p>
         <button className="back-home-btn" onClick={ handleDiscoverClick } aria-label="Go back to the home page">
           Back To Home
         </button>
       </div>
     </main>
   );
 }
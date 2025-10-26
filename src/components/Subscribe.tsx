 import React, { useState } from "react";
import "./subscribe.css";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Enkel validering
    if (!email.includes("@")) {
      setMessage("❌ Please enter a valid email address");
      return;
    }

    setMessage("✅ Thank you for subscribing! 🎉");
    setEmail(""); // töm fältet efter submit

    setTimeout(() => {
  setMessage("");
     }, 3000);
  };

  return (
    <section className="subscribe">
      <div className="container subscribe-content">
        <div className="text-block">
          <h2>Subscribe Our Newsletter</h2>
          <p>
            Subscribe to our newsletter to receive early discount offers, updates
            and info
          </p>
        </div>

        <form className="subscribe-form" onSubmit={handleSubmit}>
  <div className="input-wrapper">
    
    <input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <span className={`required-star ${/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "hide" : ""}`}>
    *
  </span>

  </div>
  
  <button type="submit">Submit</button>
</form>


      </div>

      {message && <p className="message">{message}</p>}
    </section>
  );
}


 
  




   
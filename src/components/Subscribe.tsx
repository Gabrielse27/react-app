import React, { useState } from "react";
import "./subscribe.css";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submittedEmail, setSubmittedEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Enkel validering
    if (!email.includes("@")) {
      setMessage("❌ Please enter a valid email address!!!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      console.log("Skickar till API:", email);

      const response = await fetch(
        "https://win25-jsf-assignment.azurewebsites.net/api/subscribe",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setMessage(`✅ ${data.message}`);
        setSubmittedEmail(email);
        setEmail(""); // töm inputfältet
      } else {
        setMessage("⚠️ Could not subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("⚠️ Server error. Please try again later.");
    }

    setLoading(false);

    setMessage("✅ Thank you for subscribing!");
    setEmail(""); // töm fältet efter submit

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <section className="subscribe" aria-labelledby="subscribe-heading">
      <div className="container subscribe-content">
        <div className="text-block">
          <h2 id="subscribe-heading">Subscribe Our Newsletter</h2>
          <p>
            Subscribe to our newsletter to receive early discount offers,
            updates and info
          </p>
        </div>

        <form className="subscribe-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="email-help"
              aria-required="true"
            />
            <span
              className={`required-star ${
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "hide" : ""
              }`}
            >
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

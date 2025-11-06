import React, { useState } from "react";
import axios from "axios";
import "./getintouch.css";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

const [errors, setErrors] = useState<{ [key: string]: string }>({});


  // 🔹 State för feedback till användaren
  const [status, setStatus] = useState("");

  // 🔹 Uppdatera fält
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const validateForm = () => {
  const newErrors: { [key: string]: string } = {};

  if (!formData.name.trim()) {
    newErrors.name = "Please enter your name.";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Please enter your email.";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Please enter a valid email address.";
  }

  if (!formData.subject.trim()) {
    newErrors.subject = "Please enter a subject.";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Please enter a message.";
  }

  if (!formData.subject.trim()) {
    newErrors.phone = "Please enter a phone.";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};






  // 🔹 Skicka data med Axios
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

if (!validateForm()) {
    console.log("❌ Formuläret har fel, skickas inte!");
    return;
  }

  setStatus("sending");
  console.log("Formuläret skickades!");

  console.log(" Data som skickas till API:", formData);

    try {
      const response = await axios.post(
        "https://win25-jsf-assignment.azurewebsites.net/api/booking",
        /*formData*/
        {
          name: formData.name,
          email: formData.email,
          selectedUnit: formData.subject, // "Subject" mappas till selectedUnit
          purpose: formData.message, // "Message" mappas till purpose
        }
      );

      console.log("Svar från servern:", response.data);

      alert("Tack! Ditt meddelande har skickats.");

      // Nollställ formuläret
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setStatus("success");
    } catch (error) {
      console.error("Fel vid skickning:", error);

      alert("Något gick fel. Försök igen senare!");

      setStatus("error");
    }
  };

  return (
    <div className="get-in-touch-container">
      <div className="get-in-touch-content">
        <div className="left-content">
          <h4 className="first-title">Get in Touch</h4>
          <h2 className="second-text">
            Get Personalized Assistance
            <br />
            -Contact Us
          </h2>

          <p className="intro-text">
            If you have any questions or would like to learn more about our
            services, please don't hesitate to reach out. We're here to help!
          </p>
        </div>

        <div className="right-content">
          <div className="image">
            <img
              src="src/assets/whychoose.svg"
              alt="Storage"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      <form className="get-in-touch-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Your Name<span className="required">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>


        <div className="form-group">
          <div className="small-inputs">
            <div className="input-field">
              <label>
                Email<span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="input-field">
              <label>
                Telephone<span className="regired"></span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Telephone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
          </div>
        </div>




        <div className="input-field">
          <label>
            Subject<span className="required">*</span>
          </label>
          <input
            type="text"
            name="subject"
            placeholder="How can we help you!"
            value={formData.subject}
            onChange={handleChange}
            
          />
          {errors.subject && <p className="error">{errors.subject}</p>}
        </div>

        <div className="input-field">
          <label>
            Comments / Questions <span className="required">*</span>
          </label>
          <textarea
            name="message"
            placeholder="Comments"
            value={formData.message}
            onChange={handleChange}
            
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GetInTouch;

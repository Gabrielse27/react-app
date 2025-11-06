import React, { useState } from "react";
import "./bookingformular.css";

const BookingFormular = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    unit: "",
    purpose: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // tar bort felmeddelandet vid ny inmatning
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) newErrors.email = "Please enter your email.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.unit.trim()) newErrors.unit = "Please enter a unit name.";
    if (!formData.purpose.trim())
      newErrors.purpose = "Please describe your storage purpose.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("✅ Booking data sent:", formData);
   /* alert("Booking submitted successfully Sent!");*/
    setFormData({ name: "", email: "", unit: "", purpose: "" });
  };

  return (
    <div className="booking-container">
      <div className="booking-content">
        <div className="left-content">
          <div className="text-title-left">
            <h4 className="first-title">Booking Unit</h4>
            <h2 className="second-text">
              Booking Your Storage Unit Now
              <br /> & Simplify Your Life!
            </h2>
          </div>

          <div className="image">
            <img
              src="src/assets/whychoose.svg"
              alt="Storage"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      <div className="right-content">
        <div className="formular-text">
          <p className="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
            nostrum dolorem, veritatis neque quaerat ab minima eveniet non incidunt
            reiciendis libero magni! Doloremque culpa eligendi ullam facere ea doloribus iure.
          </p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="small-inputs">
              <div className="input-field">
                <label>
                  Your Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>

              <div className="input-field">
                <label>
                  Email <span className="required">*</span>
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
            </div>
          </div>

          <div className="input-field">
            <label>
              Choose Unit <span className="required">*</span>
            </label>
            <input
              type="text"
              name="unit"
              placeholder="Choose Unit"
              value={formData.unit}
              onChange={handleChange}
            />
            {errors.unit && <p className="error">{errors.unit}</p>}
          </div>

          <div className="input-field">
            <label>
              Storage Purpose <span className="required">*</span>
            </label>
            <textarea
              name="purpose"
              placeholder="Describe your Storage purpose"
              value={formData.purpose}
              onChange={handleChange}
            ></textarea>
            {errors.purpose && <p className="error">{errors.purpose}</p>}
          </div>

          <button type="submit">Book Unit</button>
        </form>
      </div>
    </div>
  );
};

export default BookingFormular;

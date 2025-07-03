import React, { useState } from "react";
import "../styles/global.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "quote-request-form", ...formData }),
    })
      .then(() => setSubmitted(true))
      .catch((error) => console.log("Error", error));

    e.preventDefault();
  };

  return (
    <div className="quote-page">
      <h2>Get a Free Quote</h2>
      <p>
        Fill out the form below and we'll get back to you with a customized
        estimate.
      </p>

      {submitted ? (
        <div className="success-message">
          <h3>Thank you for your quote request!</h3>
          <p>We'll contact you shortly with your estimate.</p>
        </div>
      ) : (
        <form
          name="quote-request-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="quote-form"
          action="/success"
        >
          {/* Netlify form recognition */}
          <input type="hidden" name="form-name" value="quote-request-form" />

          {/* Honeypot field for spam protection */}
          <div hidden>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Project Details</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us about your fence project (type, dimensions, special requirements)..."
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Request Quote
          </button>
        </form>
      )}
    </div>
  );
};

export default Quote;

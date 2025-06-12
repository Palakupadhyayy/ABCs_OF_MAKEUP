import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './CssComponents/Contact.css';

const Contact = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      alert("Server error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      <div className="social-media">
        <h3>Social Media Handles</h3>
        <div className="social-icons">
          <a id="fb" href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a id="insta" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a id="twi" href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a id="lin" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a id="yt" href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>

      <div className="forms">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>{props.title || 'Get In Touch'}</h3>

          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your complete name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? 'error' : ''}
            required
          />
          {errors.name && <div className="error-message">{errors.name}</div>}

          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter a valid email address"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'error' : ''}
            required
          />
          {errors.email && <div className="error-message">{errors.email}</div>}

          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message here"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            className={errors.message ? 'error' : ''}
            required
          />
          {errors.message && <div className="error-message">{errors.message}</div>}

          <div className="form-buttons">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

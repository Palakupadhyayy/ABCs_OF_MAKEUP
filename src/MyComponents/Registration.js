import { useState } from 'react';
import './CssComponents/Registration.css';

export default function RegistrationForm(props) {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', age: '', email: '',
    heightFeet: '', heightCm: '',
    skintype: '', gender: '', about: '', image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '', lastName: '', age: '', email: '',
      heightFeet: '', heightCm: '',
      skintype: '', gender: '', about: '', image: null,
    });
  };

  const isValidEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.firstName.trim()) return alert("First Name is required");
    if (!formData.lastName.trim()) return alert("Last Name is required");

    if (!formData.age || parseInt(formData.age) < 16)
      return alert("Age must be 16 years or older");

    if (!formData.email.trim() || !isValidEmail(formData.email))
      return alert("Please enter a valid email address");

    if (
      (!formData.heightFeet && !formData.heightCm) ||
      (formData.heightFeet && parseFloat(formData.heightFeet) < 0) ||
      (formData.heightCm && parseFloat(formData.heightCm) < 0)
    ) {
      return alert("Please enter a valid positive height in either feet or centimeters");
    }

    if (!formData.skintype) return alert("Please select a skin type");
    if (!formData.gender) return alert("Please select a gender");
    if (!formData.about.trim()) return alert("Please fill the About section");
    if (!formData.image) return alert("Please upload an image");

    try {
      const payload = new FormData();
      payload.append('firstName', formData.firstName);
      payload.append('lastName', formData.lastName);
      payload.append('age', formData.age);
      payload.append('email', formData.email);
      payload.append('height', formData.heightFeet ? `${formData.heightFeet} ft` : `${formData.heightCm} cm`);
      payload.append('skintype', formData.skintype);
      payload.append('gender', formData.gender);
      payload.append('about', formData.about);
      payload.append('image', formData.image);

      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        body: payload
      });

      if (response.ok) {
        alert("Registration successful!");
        handleReset();
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      alert("Server error: " + error.message);
    }
  };

  return (
    <div className="heading">
      <h2>Fill up the Registration Form</h2>
      <div className="registration">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h3>{props.title}</h3>

          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age (16+)"
            value={formData.age}
            onChange={handleChange}
            required
            min="16"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Height</label>
<div style={{ display: 'flex', gap: '10px' }}>
  <input
    type="number"
    name="heightFeet"
    placeholder="Height in feet"
    value={formData.heightFeet}
    onChange={handleChange}
    min="0"
    step="0.01" // 👈 Allows decimal feet
  />
  <input
    type="number"
    name="heightCm"
    placeholder="Height in cm"
    value={formData.heightCm}
    onChange={handleChange}
    min="0"
    step="0.01" // 👈 Allows decimal cm
  />
</div>


          <label htmlFor="skintype">Skin Type</label>
          <select
            name="skintype"
            id="skintype"
            value={formData.skintype}
            onChange={handleChange}
            required
          >
            <option value="">Select your skin type</option>
            <option value="dry">Dry Skin</option>
            <option value="oily">Oily Skin</option>
            <option value="combination">Combination Skin</option>
            <option value="normal">Normal Skin</option>
            <option value="sensitive">Sensitive Skin</option>
          </select>

          <label>Gender</label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="others"
                checked={formData.gender === 'others'}
                onChange={handleChange}
              />
              Others
            </label>
          </div>

       <label htmlFor="about">About</label>
          <textarea id="about" name="about" value={formData.about} onChange={handleChange} placeholder="Enter your description" rows="4"></textarea>

        <label htmlFor="image" className="custom-file-upload">Image</label>
        <label htmlFor="image" className="custom-file-upload-box">
        <div className="upload-icon">
        <i className="fas fa-file-image"></i>
        <p>Click to upload your image</p>
        </div>
        </label>
        <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={handleChange}
        style={{ display: 'none' }}
        />
        {formData.image && <p className="file-name-preview">{formData.image.name}</p>}

          <div className="form-buttons">
            <button type="reset" onClick={handleReset}>Reset</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

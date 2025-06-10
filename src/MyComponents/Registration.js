import { useState } from 'react';
import './CssComponents/Registration.css';

export default function RegistrationForm(props) {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', age: '', email: '', height: '',
    skintype: '', imageUrl: '', gender: '', about: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'radio' ? value : value }));
  };

  const handleReset = () => {
    setFormData({
      firstName: '', lastName: '', age: '', email: '', height: '',
      skintype: '', imageUrl: '', gender: '', about: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.gender) {
      alert('Please fill in all required fields.');
      return;
    }
    console.log('Form submitted ✅:', formData);
    alert('Registration successful!');
    handleReset();
  };

  return (
    <div className="heading">
      <h2>Fill up the Registration Form</h2>
      <div className="registration">
        <form onSubmit={handleSubmit}>
          <h3>{props.title}</h3>

          <label htmlFor="firstName">First Name</label><input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your First Name" required />

          <label htmlFor="lastName">Last Name</label><input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your Last Name" required />

          <label htmlFor="age">Age</label><input type="number" id="age" name="age" value={formData.age} onChange={handleChange} placeholder="Enter your age" min="0" max="110" step="1" />

          <label htmlFor="email">Email</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter a valid email address" required />

          <label htmlFor="height">Height</label><input type="number" id="height" name="height" value={formData.height} onChange={handleChange} placeholder="Enter your height" step="0.01" />

          <label htmlFor="skintype">Skin Type</label>
          <select name="skintype" id="skintype" value={formData.skintype} onChange={handleChange}>
            <option value="">Select</option>
            <option value="dry">Dry Skin</option>
            <option value="oily">Oily Skin</option>
            <option value="combination">Combination Skin</option>
            <option value="normal">Normal Skin</option>
            <option value="sensitive">Sensitive Skin</option>
          </select>

          <label htmlFor="imageUrl">Image URL</label><input type="url" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Enter your image URL" />

          <label>Gender</label>
          <div className="gender-options">
            <label><input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} /> Male</label>
            <label><input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} /> Female</label>
            <label><input type="radio" name="gender" value="others" checked={formData.gender === 'others'} onChange={handleChange} /> Others</label>
          </div>

          <label htmlFor="about">About</label>
          <textarea id="about" name="about" value={formData.about} onChange={handleChange} placeholder="Enter your description" rows="4"></textarea>

          <div className="form-buttons">
            <button type="button" onClick={handleReset}>Reset</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

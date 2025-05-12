import React from 'react'
import './CssComponents/Registration.css'

export default function RegistrationForm(props) {
  return (
    <div className="heading"> 
      <h2>Fill up the Registration Form</h2>
    <div className="registration">
      
    <form>
    <h3>{props.title}</h3>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" placeholder="Enter your First Name" />
  
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" placeholder="Enter your Last Name" />
  
      <label htmlFor="age">Age</label>
      <input type="number" id="age" name="age" placeholder="Enter your age" min="0" max="110" step="1" />
  
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Enter a valid email address" />
  
      <label htmlFor="height">Height</label>
      <input type="number" id="height" name="height" placeholder="Enter your height" step="0.01" />
  
      <label htmlFor="skintype">Skin Type</label>
      <select name="skintype" id="skintype">
        <option value="">Select</option>
        <option value="dry">Dry Skin</option>
        <option value="oily">Oily Skin</option>
        <option value="combination">Combination Skin</option>
        <option value="normal">Normal Skin</option>
        <option value="sensitive">Sensitive Skin</option>
      </select>
  
      <label htmlFor="imageUrl">Image URL</label>
      <input type="url" id="imageUrl" name="imageUrl" placeholder="Enter your image URL" />
  
      <label>Gender</label>
    <div className="gender-options">
        <label><input type="radio" name="gender" value="male" /> Male</label>
        <label><input type="radio" name="gender" value="female" /> Female</label>
        <label><input type="radio" name="gender" value="others" /> Others</label>
    </div>
  
      <label htmlFor="about">About</label>
      <textarea id="about" name="about" placeholder="Enter your description" rows="4"></textarea>
  
      <div className="form-buttons">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>  
  </div>
  )
}

/* Have to apply javascript coding for the registration form */ 
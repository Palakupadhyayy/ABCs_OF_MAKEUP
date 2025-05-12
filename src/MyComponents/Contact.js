import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter} from '@fortawesome/free-brands-svg-icons'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import './CssComponents/Contact.css'


const Contact = (props) => {
  return (
    <div className="contact">
    <div className="social-media">   
      <h3>Social Media Handles</h3>  
      <div className="social-icons">
          <a id="fb" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a id="insta" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          <a id="twi" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
          <a id="lin" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a id="yt" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
      </div>
    </div>
      <div className="forms">    
        <form className = "contact-form">
        <h3>{props.title}</h3>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your Complete Name" />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter a valid email address" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter your message here" rows="4"></textarea>

          <div className="form-buttons">
          <button type="send">Send</button>  
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Contact

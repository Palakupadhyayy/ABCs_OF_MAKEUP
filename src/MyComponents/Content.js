import React from 'react'
import './CssComponents/Content.css'

export default function Content(props) {
  return (
    <div className="content">
        <div className="about">
          <h2>{props.title}</h2>
          <p>Welcome to ABC’s of Makeup — your ultimate glam guide! Whether you're a newbie or a beauty boss, we’ve got everything you need to slay every look. From flawless basics to bold party vibes, we make makeup fun, easy, and totally YOU.</p>
          <ul>
            <li>💄 Learn step-by-step tutorials</li>
            <li>🎨 Discover the best products for your skin and style</li>
            <li>🧠 Take fun quizzes + get personalized tips</li>
          </ul>
        </div>
          <div className="about-image">
            <img src="./images/about/About.jpg" alt="aboutimage" />
          </div>
    </div>
  )
}

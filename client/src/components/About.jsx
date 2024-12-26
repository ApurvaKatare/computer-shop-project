

import React from 'react'
import Footer from "./Footer"
import "./about.css";
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>
      <div class="wrapper" style={{height:"97vh"}}>
    <div class="background-color">
      <div class="about-container">
        <div class="image-container">
          <img
            src="./images/crousal1.jpg"
            alt=""
          />
        </div>

        <div class="text-container">
          <h1>About us</h1>
          <p style={{color:"white",fontSize:"1.2rem"}}>
          At MTK Computers, we understand the vital role that technology plays in your personal and professional life. Our dedicated team of skilled technicians is here to solve your tech troubles and keep your devices running smoothly.
          </p>
          <p style={{color:"white",fontSize:"1.2rem"}}>
          Our mission is to provide top-quality computer repair services that empower our customers to make the most of their technology.
          Our team is dedicated to restoring your devices to peak performance, so you can continue working, learning, and connecting without interruption.
          </p>
          <Link to="/contact" style={{backgroundColor:"red",border:"none"}}>Contact</Link>
        </div>
      </div>
    </div>
  </div>

      <Footer />
    </>
  )
}

export default About
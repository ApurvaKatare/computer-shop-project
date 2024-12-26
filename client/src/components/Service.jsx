import React from 'react'
import {Link} from "react-router-dom";
import "./service.css";
const Service = () => {
  return (
    <>
    <section  className='service-page' >
        <div  class="wrapper services">
          <h2 className='service-desc' style={{color:"white",marginBottom:"3rem"}}>Our Services</h2>
          <div style={{display:"flex",width:"99vw"}}>
          <div style={{height:"400px"}}  class="single-service">
            <div class="social"><i class="fa-solid fa-cogs"></i></div>
            <span></span>
            <h3>Repair</h3>
            <p style={{marginBottom:"2rem"}}>At MTK Computers, we understand the frustration that comes with a malfunctioning computer. We are here to provide top-notch computer repair services. Whether you're dealing with hardware issues, software glitches, or any other problems, we've got you covered.</p>
            <Link to="/repire">Read more</Link>
          </div>
          <div style={{height:"400px"}}  class="single-service">
            <div class="social"><i class="fa-brands fa-usb"></i></div>
            <span></span>
            <h3>Data Recovery</h3>
            <p style={{marginBottom:"2rem"}}>Accidentally deleted important files or experiencing data loss due to a hard drive failure? Our data recovery specialists can help retrieve your valuable data and restore it to the best of our abilities.</p>
            <Link to="/repire">Read more</Link>
          </div>
          <div style={{height:"400px"}} class="single-service">
            <div class="social"><i class="fa-solid fa-screwdriver-wrench"></i></div>
            <span></span>
            <h3>Upgrade</h3>
            <p style={{marginBottom:"2rem"}}>Looking to boost your computer's performance? We offer hardware upgrades such as RAM, storage, and graphics card installations. If you're interested in customizing your PC for specific tasks or gaming.</p>
            <Link to="/repire">Read more</Link>
          </div>
          <div style={{height:"400px"}} class="single-service">
            <div class="social"><i class="fa-solid fa-laptop"></i></div>
            <span></span>
            <h3>Sales</h3>
            <p style={{marginBottom:"2rem"}}>We provide all kinds of used computers and laptops. We also sell desktop parts, laptop parts accessories, and cables. Just visit our store and have a look at our wide range of computer products. For any query/enquiry drop us a message or Call US!</p>
            <Link style={{marginBottom:"2rem"}} to="/products">Read more</Link>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service
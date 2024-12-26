import React,{useRef} from 'react'
import NavBar from "./NavBar"
import "./contact.css";
import Footer from './Footer';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ylzpi3f', 'template_gejij4c', form.current, 'Q52wvZHuesjbyb8d6')
      .then((result) => {
          toast.success("Send Successfull")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })};

  return (
    <>
      <section id="contact-section">
        <div class="container">
          <div class="contact-form">
            <div style={{marginTop:"2rem",width:"40vw"}}>
              <i class="fa fa-map-marker"style={{color:"white !important"}}></i>
              <span class="form-info"style={{marginLeft:"1rem"}}>
                Ramdas Swami Marg
                opp.Dream Citi,<br />
                <p style={{marginLeft:"10px",color:"white",fontSize:"16px"}}> Shivaji Nagar, Nashik</p> <p style={{marginLeft:"10px",color:"white",fontSize:"16px"}}> Maharashtra 422006
                India</p>
              </span><br /><i class="fa fa-phone"></i><span class="form-info"style={{marginLeft:"1rem"}}>080078 79680</span><br/><br />
                  <i class="fa fa-envelope"></i><span class="form-info"style={{marginLeft:"1rem"}}>abc@gmail.com</span>
                </div>
                <div class="form">
                  <form action="" ref={form} onSubmit={sendEmail} style={{marginTop:"2rem"}}>
                    <input type="text" name="from_name" placeholder="First Name" required />
                    <input type="text" name="last_name" placeholder="Last Name" required />
                    <input type="text" name="from_email" placeholder="Email" required />
                    <input type="text" name="subject" placeholder="Subject of message" required />
                    <textarea name="message" placeholder="Message" rows="5" id="" required></textarea>
                    <button class="submit"style={{background:"red",color:"black",border:"none",borderRadius:"1rem"}}>Send Message</button>
                  </form>
                </div>
            </div>
          </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contact
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const ContactUs = ({product}) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ylzpi3f', 'template_d2z6906', form.current, 'Q52wvZHuesjbyb8d6')
      .then((result) => {
          toast.success("Send Successfull")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <form className='details-form' ref={form} onSubmit={sendEmail} style={{backgroundColor:"rgba(90, 90, 90, 0.4)",color:"white"}}>
      <div style={{display:"flex",flexDirection:"column",width:"100%",marginLeft:"2rem"}}>
      <label>Product: {product}</label>
      <input type="text" value={product} name="user_product" placeholder={product} readOnly style={{display:"none"}}/>
      <label>Name *</label>
      <input type="text" name="user_name" required placeholder='Please enter your name' />
      <label>Email *</label>
      <input type="email" name="user_email" required placeholder='Please enter your email'/>
      <label>Message</label>
      <textarea name="message" placeholder='Enter your massage here'/>
      <input className='submit-btn contact-btn' type="submit" value="Send Query" />
      </div>
    </form>
  );
};
export default ContactUs;
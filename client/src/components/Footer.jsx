import "./footer.css";

const Footer = () => {
    return (
        <div id="footer">
            <div class="foot" id="contact">
                <h3 style={{color:"white"}}>Contact</h3>
                <p style={{fontSize:"1.1rem"}} id="foot-number">080078 79680</p>
                <a className="foot-email" href="#">abc@gmail.com</a>

            </div>
            <div class="foot" id="address">
                <h3 style={{color:"white"}}>Address</h3>
                <p style={{color:"#7e7e7e"}}>
                    Ramdas Swami Marg
                    opp. Dream Citi
                    Shivaji Nagar
                    Nashik, Maharashtra 422006
                    India
                </p>
            </div>
            <div class="foot" id="working_hours">
                <h3 style={{color:"white"}}>Opening Hours</h3>
                <p style={{color:"#7e7e7e"}}>Mon:	8:00 am – 8:00 pm <br /> 
                    Tue:	8:00 am – 8:00 pm<br /> 
                    Wed:	8:00 am – 8:00 pm<br /> 
                    Thu:	8:00 am – 8:00 pm<br /> 
                    Fri:	8:00 am – 8:00 pm<br /> 
                    Sat:	8:00 am – 8:00 pm<br /> 
                    Sun:	8:00 am – 4:00 pm<br /> 
                </p>

            </div>
        </div>
    )
}

export default Footer
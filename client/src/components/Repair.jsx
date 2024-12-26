import React from "react";
import Footer from "./Footer"
import "./repair.css";
const Repair = () => {
  return (
    <>
      <div>
        <div className="repair-section" style={{paddingBottom:"2rem",backgroundImage:"url(./images/back1.jpg)"}}>
          <div className="repair-heading">
            <h1>Repairs</h1>
          </div>
          <div
            style={{
              width: "100vw",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="repire-icon">
              <div className="repire-desc">
                <i class="fa-solid fa-battery-full"></i>
                <h3>Battery Replacement</h3>
              </div>
              <div className="repire-desc">
                <i class="fa-solid fa-laptop"></i>
                <h3>Display Replacement</h3>
              </div>
              <div className="repire-desc">
                <i class="fa-solid fa-droplet"></i>
                <h3>Water Damage</h3>
              </div>
              <div className="repire-desc">
              <i class="fa-solid fa-triangle-exclamation"></i>
                <h3>Virus</h3>
              </div>
              <div className="repire-desc">
              <i class="fa-solid fa-temperature-three-quarters"></i>
                <h3>OverHeating</h3>
              </div>
              <div className="repire-desc">
                <i class="fa-solid fa-power-off"></i>
                <h3>Booting Issue</h3>
              </div>
              <div className="repire-desc">
              <i class="fa-solid fa-arrow-rotate-left"></i>
                <h3>Data Recovery</h3>
              </div>
              <div className="repire-desc">
                <i class="fa-solid fa-hard-drive"></i>
                <h3>Hard Drive</h3>
              </div>
            </div>
          </div>
        </div>
        <hr style={{padding:"0px",margin:"0px"}}/>
        <div className="upgrade-section" style={{backgroundImage:"url(./images/back1.jpg)",zIndex:1000}}>
          <div className="upgrade-heading">
            <h1>Upgrades</h1>  
          </div>
          <div
            style={{
              width: "100vw",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="repire-icon">
              <div className="repire-desc">
              <i class="bi bi-device-ssd-fill" style={{margin:"0px !important",fontSize:"6rem",lineHeight:"0px"}}></i>
                <h3>SSD Upgrade</h3>
              </div>
              <div className="repire-desc">
              <i class="fa-solid fa-memory"></i>
                <h3>RAM Upgrade</h3>
              </div>
              <div className="repire-desc">
              <i class="fa-solid fa-database"></i>
                <h3>Storage Upgrade</h3>
              </div>
              <div className="repire-desc">
              <i class="fa-solid fa-eye"></i>
                <h3>GPU Upgrade</h3>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Repair;

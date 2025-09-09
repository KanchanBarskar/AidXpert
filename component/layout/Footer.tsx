import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">

    <div className="footer-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
  
            <div className="footer-widget footer-about">
              <div className="footer-logo">
                <Image src="/img/logo-whte.png" alt="aidxpert"/>
              </div>
              <div className="footer-about-content">
                <p>A healthcare product is the result of the interaction of capital, labour and entrepreneurship in the
                  production process, which primarily aims to improve, maintain or prevent the deterioration of the health
                  status of persons or reduce the consequences of ill health.</p>
                <div className="social-icon">
                  <ul>
                    <li>
                      <a href="#" target="_blank"><i className="fab fa-facebook-f"></i> </a>
                    </li>
  
                    <li>
                      <a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    </li>
  
                  </ul>
                </div>
              </div>
            </div>
  
          </div>
          <div className="col-lg-3 col-md-6">
  
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">For Patients</h2>
              <ul>
                <li><a href="#">Search for Doctors</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Training Videos</a></li>
                <li><a href="#">Booking</a></li>
                <li><a href="#">Patient Dashboard</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="consultants-panel.html">Consultants Panel</a></li>
              </ul>
            </div>
  
          </div>
          <div className="col-lg-3 col-md-6">
  
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">For Doctors</h2>
              <ul>
                <li><a href="#">Appointments</a></li>
                <li><a href="#">Chat</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Doctor Dashboard</a></li>
              </ul>
            </div>
  
          </div>
          <div className="col-lg-3 col-md-6">
  
            <div className="footer-widget footer-contact">
              <h2 className="footer-title">Contact Us</h2>
              <div className="footer-contact-info">
                <div className="footer-address">
                  <span><i className="fas fa-map-marker-alt"></i></span>
                  <p>Pinnacle Prestige, Office No-405 <br />Tilak Road,Sadashiv Peth,Pune</p>
                </div>
                <p>
                  <i className="fas fa-phone-alt"></i>
                  +91-858 505 6006
                </p>
                <p className="mb-0 cf_email">
                  <i className="fas fa-envelope"></i>
                  <a href="#" style={{color:"color:#fff;"}}>info@aidxpert.com</a>
                </p>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </div>
    <div className="sidenav">
      <a href="consult.html"><Image src="/img/footer-banner.jpg" alt="banner image"/></a>
    </div>
  
    <div className="sidenav">
      <a href="consult.html"><Image src="/img/footer-banner.jpg" alt = "footer banner"/></a>
    </div>
  
    <div className="footer-bottom">
      <div className="container-fluid">
  
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="copyright-text">
                <p className="mb-0">&copy; 2023 AidXpert. All rights reserved. Powered by <a
                    href="https://fossgentechnologies.com" target="_blank" style={{color:"color:#fff"}}>FossGen Technologies Pvt.
                    Ltd.</a></p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
  
              <div className="copyright-menu">
                <ul className="policy-menu">
                  <li><a href="terms-conditions.html">Terms and Conditions</a></li>
                  <li><a href="privacy-policy.html">Privacy Policy</a></li>
                </ul>
              </div>
  
            </div>
          </div>
        </div>
  
      </div>
    </div>
  
  </footer>
  );
};

export default Footer;
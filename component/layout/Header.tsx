import React from "react";
import Image from "next/image";

const Header = () =>{
    return(
        <div className="main-wrapper">
  <header className="header">
    <nav className="navbar navbar-expand-lg header-nav">
      <div className="navbar-header">
        <a id="mobile_btn" href="javascript:void(0);">
          <span className="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>
        <a href="/" className="navbar-brand logo">
          <Image src="/img/logo.png" className="img-fluid" alt="Logo"/>
        </a>
      </div>
      <div className="main-menu-wrapper">
        <div className="menu-header">
          <a href="/" className="menu-logo">
            <Image src="/img/logo.png" className="img-fluid" alt="Logo"/>
          </a>
          <a id="menu_close" className="menu-close" href="javascript:void(0);">
            <i className="fas fa-times"></i>
          </a>
        </div>
        <ul className="main-nav">
          <li className="active"><a href="/">Find Doctors</a></li>
          <li><a href="/consult">Consultation</a></li>
          <li><a href="/order-medicines">Medicine Order</a></li>
          <li><a href="/lab-test">Lab Test</a></li>
          <li><a href="/surgeries">Find Surgeons</a></li>
          <li><a href="/book-ambulance">Book Ambulance</a></li>
          <li className="has-submenu">
            <a href="javascript:void(0);">Services <i className="fas fa-chevron-down"></i></a>
            <ul className="submenu">
              <li><a href="/book-ambulance">Ambulance Service</a></li>
              <li><a href="staffing-services.html">Healthcare Staffing Services</a></li>
            </ul>
          </li>
          <li className="has-submenu">
            <a href="javascript:void(0);">Help <i className="fas fa-chevron-down"></i></a>
            <ul className="submenu">
              <li><a href="#">Health Tips</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="/consult">Consultants Panel</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <ul className="nav header-navbar-rht">
      
        <li className="nav-item">
          <a className="nav-link header-login" href="/login">Login / Signup </a>
        </li>
      </ul>
    </nav>
  </header>
</div>
    );
};

export default Header;
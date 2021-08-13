import React from "react";
// import { Link } from "react-router-dom";
import MobileMenuService from "./MobileMenuService";


const MobileMenu = () => {
  return (
    <div className="mobile-menu d-lg-none">
      <div className="mobile-menu-card">
        <span className=" ">
          24/7 Emergency Toll-Free Number <br />
          1-833-7GOT-FlOOD（1-833-746-8356)
        </span>
        <hr className="solid-divider" />
        <h4>Service</h4>
        <MobileMenuService />
        <hr className="solid-divider" />
        <span className="mobile-menu-title">Who We Served</span>
        <hr className="solid-divider" />
        <span className="mobile-menu-title">Where We Served</span>
        <hr className="solid-divider" />
        <span className="mobile-menu-title">About Us</span>
        <hr className="solid-divider" />
        <span className="mobile-menu-title">Home</span>
        
      </div>
    </div>
  );
};

export default MobileMenu;
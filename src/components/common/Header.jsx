import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
          <img src="https://imroz.rainbowit.net/assets/images/logo/logo.png" alt="" />
      </div>
      <nav className="navbar-list">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/service">Service</NavLink></li>
          <li><NavLink to="/">About</NavLink></li>
          <li><NavLink to="/blo">Pages</NavLink></li>
          <li><NavLink to="/black">Blocks</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        
        </ul>
        <div className="buynow">
            <NavLink>BUY NOW</NavLink>
          </div> 
      </nav>
    
    </div>
  );
}

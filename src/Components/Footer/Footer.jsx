import React from "react";
import "./Footer.css";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import logo from "../Assets/logo.png";

export default function Footer() {
  return (
    <div className="main_footer">
      <div className="container">
        <div className="footer_content d-flex gap-3">
          <div className=" d-flex gap-2 align-items-center">
            <img src={logo} className="footer_logo" alt="" />
            Doggy Market
          </div>
          <div className="d-flex ms-4 gap-3 ">

          <div className="  social_icons d-flex gap-2 align-items-center">
     
            <FaTwitter />
            Twitter
          </div>
          <div className="  social_icons d-flex gap-2 align-items-center">
     
            <FaTelegramPlane />
            Telegram
          </div>




          </div>
        
        
        </div>
      </div>
    </div>
  );
}

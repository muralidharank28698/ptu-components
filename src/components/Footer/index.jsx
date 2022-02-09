import React from "react";
import "./Footer.css";
// import image from "../assets/logo.png";
import image from "../assets/PTU_Logo_black_white.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <img
            src={image}
            style={{
              width: "90%",
              height: "90%",
              border: "none",
              padding: "0px 10px",
              margin: "16px -20px auto",
            }}
          />
        </div>

        <div className="footer-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.4524616814515!2d79.85504551412637!3d12.012340438450485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536446022cfb0b%3A0x5c0d300c8187a76b!2sPuducherry%20Technological%20University!5e0!3m2!1sen!2sin!4v1644327742512!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the PTU</span>
            Address: East coast Road, Pillaichavady, Puducherry, 605 041 <br />
          </p>
          <p className="footer-company-about">Phone No: 0413 265 5281</p>
          <br />
          <p className="footer-company-about">Follow us on</p>

          <div className="footer-icons">
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
      <div className="last">Developed by PTU's Web Team.</div>
    </div>
  );
};

export default Footer;

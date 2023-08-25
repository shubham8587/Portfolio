import "./FooterStyle.css";
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaGit, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>
                            Mohan Nagar, Pankha road,New Delhi
                        </p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        +91-7982044451
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        sk716510@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>Copyright&copy;2023</h4>
                <div className="social">
                <FaGit size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                </div>

            </div>
        </div>
    </div>
       
  );
};

export default Footer
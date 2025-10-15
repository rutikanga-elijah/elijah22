import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa' // <-- Add this import

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="logo">
              RUTIKANGA <span>Elie</span>
            </div>
            <p>Creating digital experiences that matter</p>
          </div>
          
          <div className="social-links">
            <a href="#" aria-label="GitHub"><FaGithub /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Rutikanga Elie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
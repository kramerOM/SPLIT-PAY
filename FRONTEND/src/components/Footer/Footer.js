import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-section">
          <div className="container">
              <div className="footer-wrapper">
                  <div className="">
                      <h3 className="footer-heading">Links</h3>
                      <ul className="footer-items">
                          <li>About Us</li>
                          <li>Services</li>
                          <li>Projects</li>
                          <li>Contact Us</li>
                      </ul>
                  </div>

                  <div className="Project-name">
                      <p>Share Wallet</p>
                  </div>

                  <div className="contacts">
                      <div>
                          <h3 className="footer-heading">Contacts</h3>
                      </div>
                      <div>
                          <ul className="footer-items">
                              <li>email@gmail.com</li>
                              <li>+25476535534</li>
                          </ul>
                      </div> 
                  </div>
              </div>

          </div>
      </footer>
  )
}

export default Footer
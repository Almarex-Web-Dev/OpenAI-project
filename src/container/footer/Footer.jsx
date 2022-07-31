import React from 'react'
import logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="text__gradient">
          Do you want to step into the future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="logo" />
          <p>Las Vegas k12 182 DK United State</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Contacts</p>
          <p>Counters</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>Contacts</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Cretcterwoord k12 182 DK alknjkcb</p>
          <p>085-1324564</p>
          <p>Contacts</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>&copy; 2021 GPT-3, All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer

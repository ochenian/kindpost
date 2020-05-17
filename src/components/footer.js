import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <React.Fragment>
    <div className="siteInfoContainer">
      <div className="supportContainer">
        <p>Info.</p>

        <Link to="/about">About us</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact us</Link>
      </div>
      <div className="subscribeContainer">
        <p>Subscribe.</p>
        <div className="emailInput">
          <input />
          <button>Sign Up</button>
        </div>

        <p className="privacyText">YOUR EMAIL ADDRESS WILL BE USED IN ACCORDANCE WITH OUR PRIVACY POLICY</p>
      </div>
      <div className="followContainer">
        <p>Follow.</p>
        <div>Facebook</div>
        <div>Instagram</div>
      </div>
    </div>
    <div className="legal-footer">
      <div>&copy; 2020 kindpost.</div>
      <div>terms & conditions</div>
      <div>privacy policy</div>
    </div>
  </React.Fragment>

)

export default Footer


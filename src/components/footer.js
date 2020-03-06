import React from 'react'

const Footer = () => (
  <div className="siteInfoContainer">
    <div className="supportContainer">
      <p>Info.</p>

      <div>About us</div>
      <div>FAQ</div>
      <div>Contact us</div>
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
)

export default Footer


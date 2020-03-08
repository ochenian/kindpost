import React from 'react'
import Link from 'gatsby-link'
import Logo from '../assets/svg/KP_Logo.svg';

const Header = (props) => (
  <div className="Header">
    <div className="Wrap" >
      <div className="Header__body">
        {/* <h1 className="Header__title"> */}
          {/* <Link data-text={props.siteName} to="/"> */}
            {/* {props.siteName}<span className="Header__icon">&#10084;</span> */}
            <Logo className="logo" />
          {/* </Link> */}
        {/* </h1> */}
        <div className="Header__nav">
          <div >send a postcard</div>
          <div>how it works</div>
          {/* <div>about us</div> */}
        </div>

        <div className="Header__actions">
            <button className="Header__btn snipcart-customer-signin">
              <svg viewBox="0 0 24 25" version="1.1">
                  <g id="Shop" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                      <g id="Product" transform="translate(-1518.000000, -76.000000)" stroke="#fff">
                          <g id="Menu" transform="translate(0.000000, 31.000000)">
                              <g id="Right-nav" transform="translate(1473.000000, 39.000000)">
                                  <g id="single-03" transform="translate(46.000000, 6.500000)">
                                      <path d="M0.387096774,23.6129032 L0.387096774,23.6129032 C0.387096774,17.6268387 5.23974194,12.7741935 11.2258065,12.7741935 L11.2258065,12.7741935 C17.211871,12.7741935 22.0645161,17.6268387 22.0645161,23.6129032 L22.0645161,23.6129032" id="Path"/>
                                      <circle id="Oval" cx="11.2258065" cy="6.58064516" r="6.19354839"/>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </g>
              </svg>
            </button>
            <button className="Header__btn snipcart-checkout">
              <svg viewBox="0 0 21 25" version="1.1">
                  <g id="Shop" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                      <g id="Product" transform="translate(-1603.000000, -76.000000)" stroke="#fff">
                          <g id="Menu" transform="translate(0.000000, 31.000000)">
                              <g id="Right-nav" transform="translate(1473.000000, 39.000000)">
                                  <g id="bag-20" transform="translate(131.000000, 0.500000)">
                                      <g id="Group-10" transform="translate(0.387097, 6.387097)">
                                          <polygon id="Path" points="18.5806452 23.2258065 -2.62900812e-13 23.2258065 1.5483871 4.64516129 17.0322581 4.64516129"/>
                                          <path d="M5.41935484,6.96774194 L5.41935484,3.87096774 C5.41935484,1.73341935 7.15277419,1.50990331e-14 9.29032258,1.50990331e-14 C11.427871,1.50990331e-14 13.1612903,1.73341935 13.1612903,3.87096774 L13.1612903,6.96774194" id="Path"/>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </g>
              </svg>
            </button>
          </div>
      </div>
    </div>
  </div>
)

export default Header

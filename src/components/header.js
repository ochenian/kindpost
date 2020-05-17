import React, {useState, useRef, useEffect } from 'react'
import Link from 'gatsby-link'
import Logo from '../assets/svg/KP_Logo.svg';
import { AnchorLink } from "gatsby-plugin-anchor-links";
// import Account from '../assets/svg/account.svg'
import Bag from '../assets/svg/bag.svg'
import {useSpring, animated} from 'react-spring'
import ButtonLink from '../components/ButtonLink'

const Header = (props) => {

  return (
  <div className={props.headerClass}>
    <div className="Wrap" >
      <div className="Header__body">
        <Link to="/"><Logo className="logo" /></Link>
        <div className="Header__nav">
          <ButtonLink>
            <Link to="/product"><div>send a postcard</div></Link>
          </ButtonLink>

          <ButtonLink>
            <AnchorLink to="/#howTo"><div>how it works</div></AnchorLink>
          </ButtonLink>
          <button className="Header__btn snipcart-checkout">
            <Bag />
          </button>
        </div>
      </div>
    </div>
  </div>
)}

export default Header

import React, {useState, useRef, useEffect, useContext } from 'react'
import Link from 'gatsby-link'
import Logo from '../assets/svg/KP_Logo.svg';
import { AnchorLink } from "gatsby-plugin-anchor-links";
// import Account from '../assets/svg/account.svg'
import Bag from '../assets/svg/bag.svg'
import {useSpring, animated} from 'react-spring'
import ButtonLink from '../components/ButtonLink'
import {SnipcartContext} from 'gatsby-plugin-snipcart-advanced/context';

const Header = (props) => {
  const {state} = useContext(SnipcartContext)
  const {userStatus, cartQuantity} = state;

  const navSpring = useSpring({
    opacity: 1,
    height: 50,
    from: { opacity: 0, height: 0 },
    config: { duration: 1000}
  })

  return (
  <div className={props.headerClass}>
    <div className="Wrap" >
      <animated.div className="Header__body" style={{ ...navSpring }}>
        <Link to="/"><Logo className="logo" /></Link>
        <div className="Header__nav">
          <ButtonLink>
            <Link to="/product"><div>send a postcard</div></Link>
          </ButtonLink>

          <ButtonLink>
            <Link to="/#howTo"><div>how it works</div></Link>
          </ButtonLink>
          <button className="Header__btn snipcart-checkout">
            <Bag />
            <span className="cart-quantity">{cartQuantity}</span>
          </button>
        </div>
      </animated.div>
    </div>
  </div>
)}

export default Header

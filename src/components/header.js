import React, {useState, useRef, useEffect, useContext } from 'react'
import Link from 'gatsby-link'
import Logo from '../assets/svg/KP_Logo.svg';
import { AnchorLink } from "gatsby-plugin-anchor-links";
// import Account from '../assets/svg/account.svg'
import Bag from '../assets/svg/bag.svg'
import {useSpring, animated, config} from 'react-spring'
import ButtonLink from '../components/ButtonLink'
import { useCartCount } from 'gatsby-theme-shopify-manager';

// import {SnipcartContext} from 'gatsby-plugin-snipcart-advanced/context';

const Header = ({ headerClass, toggle }) => {
  // const {state} = useContext(SnipcartContext)
  // const {userStatus, cartQuantity} = state;
  const itemsInCart = useCartCount()

  const navSpring = useSpring({
    opacity: 1,
    height: 50,
    from: { opacity: 0, height: 0 },
    config: config.wobbly
    // config: { duration: 1000}
  })

  return (
  <div className={headerClass}>
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
            <Bag onClick={() => toggle()} />
            {
              itemsInCart > 0 ? <span className="cart-quantity">{itemsInCart}</span> : <span></span>
            }
          </button>
        </div>
      </animated.div>
    </div>
  </div>
)}

export default Header

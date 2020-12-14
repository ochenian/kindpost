import React, { useState, useRef, useEffect, useContext } from 'react';
import Link from 'gatsby-link';
import Logo from '../assets/svg/KP_Logo.svg';
import LogoThumbnail from '../assets/svg/KP_Thumbnail.svg';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Bag from '../assets/svg/bag.svg';
import { useSpring, animated, config } from 'react-spring';
import ButtonLink from '../components/ButtonLink';
import { useCartCount } from 'gatsby-theme-shopify-manager';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { CartContext } from './Cart/CartContext';

const StyledLogoThumbnail = styled(LogoThumbnail)`
  width: auto;
  max-width: 60px;
  height: 100%;
  fill: #fff;
`;

const Header = ({ headerClass }) => {
  const { toggleCart } = useContext(CartContext);
  const itemsInCart = useCartCount();

  const mobile = useMediaQuery({
    query: '(max-width: 700px)',
  });

  const navSpring = useSpring({
    opacity: 1,
    height: 50,
    from: { opacity: 0, height: 0 },
    config: config.wobbly,
  });

  return (
    <div className={headerClass}>
      <div className="Wrap">
        <animated.div className="Header__body" style={{ ...navSpring }}>
          <Link to="/">
            {!mobile && <Logo className="logo" />}
            {mobile && <StyledLogoThumbnail />}
          </Link>
          <div className="Header__nav">
            {!mobile && (
              <ButtonLink>
                <Link to="/product">
                  <div>send a postcard</div>
                </Link>
              </ButtonLink>
            )}

            {!mobile && (
              <ButtonLink>
                <Link to="/#howTo">
                  <div>how it works</div>
                </Link>
              </ButtonLink>
            )}
            <button className="Header__btn snipcart-checkout">
              <Bag onClick={() => toggleCart()} />
              {itemsInCart > 0 ? (
                <span className="cart-quantity">{itemsInCart}</span>
              ) : (
                <span></span>
              )}
            </button>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default Header;

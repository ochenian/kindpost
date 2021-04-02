import { findLastIndex } from 'lodash-es';
import React, { useEffect, useRef, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Burger from './Burger';

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    left: '4em',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#fff',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
    width: '4px',
    height: '13px',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    // background: '#282828',
    background: 'linear-gradient(100deg, #f80759, #bc4e9c)',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    display: 'flex',
    flexDirection: 'column',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

const MenuItem = styled.a`
  color: rgb(242, 235, 229);
  width: fit-content;
  font-size: 2rem;
  margin-bottom: 24px;
  transition: all 0.5s;
`;

const BurgerMenu = () => {
  const targetElement = document.querySelector('.bm-overlay');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (targetElement) {
      if (menuOpen) {
        disableBodyScroll(targetElement);
      } else {
        enableBodyScroll(targetElement);
      }
    }
  }, [menuOpen, targetElement]);

  const onMenuOpen = state => {
    setMenuOpen(state.isOpen);
    return state.isOpen;
  };

  return (
    <Menu
      onStateChange={onMenuOpen}
      customBurgerIcon={<Burger />}
      width="100%"
      styles={styles}
    >
      <MenuItem id="home" className="menu-item" href="/">
        Home
      </MenuItem>
      <MenuItem id="send" className="menu-item" href="/product">
        Send a Kindpost
      </MenuItem>
      <MenuItem id="faq" className="menu-item" href="/faq">
        FAQ
      </MenuItem>
      <MenuItem id="about" className="menu-item" href="/about">
        About
      </MenuItem>
      <MenuItem id="contact" className="menu-item" href="/contact">
        Contact
      </MenuItem>
    </Menu>
  );
};

export default BurgerMenu;

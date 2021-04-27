import React, { useEffect, useRef, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Burger from '@animated-burgers/burger-squeeze';
import '@animated-burgers/burger-squeeze/dist/styles.css';

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    left: '24px',
    top: '32px',
    width: '36px',
    height: '36px',
    zIndex: '10000',
    cursor: 'pointer',
  },
  bmBurgerBars: {
    background: '#000',
  },
  bmCrossButton: {
    display: 'none',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: 'linear-gradient(100deg, #f80759, #bc4e9c)',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em 2.5em',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '3em',
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
  text-decoration: none;
  letter-spacing: 4px;
`;

const BurgerMenu = ({ theme }) => {
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

  const burgerClass = theme.includes('light') ? 'light' : '';

  return (
    <Menu
      onStateChange={onMenuOpen}
      customBurgerIcon={<Burger className={burgerClass} isOpen={menuOpen} />}
      width="100%"
      styles={styles}
    >
      <MenuItem id="home" className="menu-item" href="/">
        Home
      </MenuItem>
      <MenuItem id="send" className="menu-item" href="/shop">
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

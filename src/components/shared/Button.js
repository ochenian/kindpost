import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import { colors, fonts, radius } from '../../utils/styles';

const CtaButton = styled.button`
  align-items: center;
  background: none;
  /* background: ${props =>
    props.inverse ? colors.brandDark : colors.lightest}; */
  /* border: 1px solid
    ${props => (props.inverse ? colors.brandLight : colors.brand)}; */
  border: 1px solid #fff;

  border-radius: ${radius.default}px;
  color: #fff;
  /* color: ${props => (props.inverse ? colors.brandLight : colors.brand)}; */
  cursor: pointer;
  display: inline-flex;
  font-family: ${fonts.heading};
  font-size: 1.1rem;
  justify-content: center;
  padding: 1em 3em;
  transition: 0.5s;
  text-transform: uppercase;
  letter-spacing: 6px;
  text-indent: 6px;
  // font-family: 'Montserrat';
    text-transform: uppercase;
    // border-radius: 8px;

  :focus {
    box-shadow: 0 0 0 3px ${colors.accent};
    outline: 0;
    transition: box-shadow 0.15s ease-in-out;
  }

  svg {
    height: 1.1em;
    margin-left: ${props => (props.iconOnLeft ? 0 : '0.5em')};
    margin-right: ${props => (props.iconOnLeft ? '0.5em' : 0)};
    width: 1.1em;
  }

  @media (hover: hover) {
    &&&:hover:enabled {
      box-shadow: 0 0 1px 2px rgba(0,0,0,0.08),
      0 0 2px 4px rgba(0,0,0,0.08);
      /* background: #fff; */
      /* color: #000; */
      // background: ${colors.brand};
      background: linear-gradient(
100deg
, rgb(248, 7, 89), rgb(188, 78, 156));
      color: #fff;
      // border: 1px solid ${colors.brand};
      border: 1px solid transparent;
    }
  }
`;

export default CtaButton;

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { AnimatePresence } from 'framer-motion';
import Provider from './src/components/Cart/CartContext';

import './src/style/index.scss';
import 'typeface-averia-serif-libre';
import 'typeface-montserrat';

export const onClientEntry = () => smoothscroll.polyfill();

export const wrapRootElement = Provider;
export const shouldUpdateScroll = () => {
  window.scrollTo(0, 0);
  return false;
};

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);

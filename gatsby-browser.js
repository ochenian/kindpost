/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import Provider from './src/components/Cart/CartContext';

import './src/style/index.scss';

require('typeface-itim');
require('typeface-lato');
require('typeface-averia-sans-libre');
require('typeface-averia-serif-libre');
require('typeface-allura');
require('typeface-montserrat');

export const wrapRootElement = Provider;

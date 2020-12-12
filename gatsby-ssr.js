/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

 // You can delete this file if you're not using it


// const React = require("react")
// const CartHeader = require("./src/components/Cart").default
// const LineItem = require("./src/components/LineItem").default

// let warning = false

// exports.onRenderBody = ({ setPostBodyComponents }, options = {}) => {
// 	options = Object.assign({
// 		apiKey: process.env.SNIPCART_API_KEY,
// 		autopop: false,
// 		js: 'https://cdn.snipcart.com/themes/v3.0.10/default/snipcart.js',
// 		styles: 'https://cdn.snipcart.com/themes/v3.0.10/default/snipcart.css',
// 	}, options)

// 	if(!options.apiKey){
// 		if (!warning) {
// 			warning = true
// 			console.log('No Snipcart API key found')
// 		}
// 		return
// 	}

// 	const components = [

//     <div hidden key='snipcartDiv' id="snipcart" data-api-key={options.apiKey} data-autopop={options.autopop}>
//         <cart-header title="My Bag" showItemsCount="true" showAccountMenu="true" showSummary="true" backButtonTitle="true">
// 					<CartHeader></CartHeader>
// 				</cart-header>
//     </div>,
// 		<script key='snipcartJs' src={options.js} data-api-key={options.apiKey}></script>
// 	]

// 	if (options.styles){
// 		components.push(<link key='snipcartStyle' href={options.styles} type="text/css" rel="stylesheet" />)
// 	}
// 	return setPostBodyComponents(components)
// }

import Provider from './src/components/Cart/CartContext';

export const wrapRootElement = Provider;

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

 // You can delete this file if you're not using it


const React = require("react")
const CartHeader = require("./src/components/Cart").default
const LineItem = require("./src/components/LineItem").default

let warning = false

exports.onRenderBody = ({ setPostBodyComponents }, options = {}) => {
	options = Object.assign({
		apiKey: process.env.SNIPCART_API_KEY,
		autopop: false,
		js: 'https://cdn.snipcart.com/themes/v3.0.10/default/snipcart.js',
		styles: 'https://cdn.snipcart.com/themes/v3.0.10/default/snipcart.css',
	}, options)

	if(!options.apiKey){
		if (!warning) {
			warning = true
			console.log('No Snipcart API key found')
		}
		return
	}

	const components = [

    <div hidden key='snipcartDiv' id="snipcart" data-api-key={options.apiKey} data-autopop={options.autopop}>
        <cart-header title="My Bag" showItemsCount="true" showAccountMenu="true" showSummary="true" backButtonTitle="true">
					<CartHeader></CartHeader>
				</cart-header>

				{/* <item-line><LineItem></LineItem></item-line> */}

			{/* <item-line>
					<li class="snipcart__item__line snipcart__box">
							<div class="snipcart__item__line__product">
									<div class="snipcart__item__line__header">
											<h2 class="snipcart__item__line__header__title">
													{{ item.name }}
											</h2>

											<item-quantity class="snipcart__item__line__quantity" v-if="!adding"></item-quantity>
											<div class="snipcart__item__line__header__actions">
													<remove-item-action class="snipcart__button--icon">
															<icon name="trash" class="icon--red"  alt="item.remove_item"></icon>
													</remove-item-action>
											</div>
									</div>
							</div>
					</li>
			</item-line> */}
    </div>,
		<script key='snipcartJs' src={options.js} data-api-key={options.apiKey}></script>
	]

	if (options.styles){
		components.push(<link key='snipcartStyle' href={options.styles} type="text/css" rel="stylesheet" />)
	}
	return setPostBodyComponents(components)
}

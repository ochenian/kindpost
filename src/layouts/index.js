import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import '../style/index.scss'

const Layout = ({ children, site }) => (
  <div>
    <Helmet
      title="kindpost."
      link={[{
        href:"https://cdn.snipcart.com/themes/v3.0.7/default/snipcart.css",
        rel:"stylesheet",
        type:"text/css"
      }]} />
    <div className="Container">
      <div className="Header">
        <div className="Wrap" >
          <div className="Header__body">
            <h1 className="Header__title">
              <Link data-text={site.siteMetadata.siteName} to="/">
                {site.siteMetadata.siteName}<span className="Header__icon">&#10084;</span>
              </Link>
            </h1>
            <div className="Header__nav">
              <button className="Header__btn snipcart-customer-signin">account</button>
              <div>postcards</div>
              <button className="Header__btn snipcart-checkout">cart</button>
              <div>contact</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Wrap" >
        {children}
      </div>
      <div className="Wrap" >
        <div className="Footer">
          &copy; 2020 Brandon Kent built with <a href="https://www.gatsbyjs.org/">Gatsby</a>,
          <a href="https://snipcart.com/"> Snipcart</a> and <a href="https://www.datocms.com"> DatoCMS</a>.
        </div>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout


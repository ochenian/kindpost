import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from '../components/footer'
import Header from '../components/header'
import How from '../components/How'

import '../style/index.scss'

const Layout = ({ children, siteName, headerClass }) => (
  <div>
    <Helmet
      title="kindpost."
      link={[
        {
          href: 'https://cdn.snipcart.com/themes/v3.0.7/default/snipcart.css',
          rel: 'stylesheet',
          type: 'text/css',
        },
      ]}
    />
    <div className="Container">
      <Header siteName={siteName} headerClass={headerClass}></Header>
      <div className="Wrap Wrap__main_content">{children}</div>
      <How></How>
      <div className="Wrap">
        <Footer></Footer>
        {/* <div className="Footer">
          &copy; 2020 kindpost.
        </div> */}
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

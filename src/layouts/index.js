import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from '../components/footer'
import Header from '../components/header'
import BirthdaySvg from '../assets/svg/Occasion.svg'
import PostcardSvg from '../assets/svg/Postcard.svg'
import MailTruckSvg from '../assets/svg/Truck.svg'
import HappyFaceSvg from '../assets/svg/Happy-Face.svg'
import CartHeader from '../components/Cart'

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
      <div id="howTo" className="how-container">
          <div className="how-title">how it works</div>
          <div className="step-container">
            <div className="how-step">
              <BirthdaySvg className="occasion"/>
              <div>pick an occasion</div>
            </div>
            <div className="how-step">
              <PostcardSvg className="postcard"/>
              <div>we'll write a note</div>
            </div>
            <div className="how-step">
              <MailTruckSvg className="truck"/>
              <div>we'll send your postcard</div>
            </div>
            <div className="how-step">
              <HappyFaceSvg className="happy-face"/>
              <div>happy friend</div>
            </div>
          </div>
        </div>
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

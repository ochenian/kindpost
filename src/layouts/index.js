import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from '../components/footer'
import Header from '../components/header'
import How from '../components/How'
import Divider from '../components/Divider'
import Cart from '../components/Cart/ShopCart'
import CookieConsent from 'react-cookie-consent';
import CookieSvg from '../assets/svg/cookie-bite.svg'

import '../style/index.scss'

const Layout = ({ children, siteName, headerClass }) => {
  const [ cartStatus, setCartStatus ] = useState('closed')

  const toggle = () => {
    cartStatus === 'open' ? setCartStatus('closed') : setCartStatus('open')
  }

  return (
    <div>
      <Helmet
        title="kindpost."
      />
      <Cart cartStatus={cartStatus} toggle={toggle} />
      <div className="Container">
        <div className={`overlay ${cartStatus === 'open' ? 'fade' : ''}`}></div>
        <Header siteName={siteName} headerClass={headerClass} toggle={toggle}></Header>
        {/* <div style={{height: '106px'}}></div> */}
        <div className="Wrap Wrap__main_content">{children}</div>
        <Divider />
        <How></How>
        <CookieConsent
          overlay
          location="bottom"
          buttonText="Accept"
          enableDeclineButton
          declineButtonText="Decline"
          style={{
            background: "#fff",
            borderRadius: "4px",
            color: '#000',
            padding: '16px',
            alignItems: 'center',
          }}
          contentStyle={{
            display: 'flex',
          }}
          buttonText="Accept Cookies"
          buttonStyle={{
            background: 'none',
            border: 'solid #000 1px',
            borderRadius: '4px',
            color: '#000',
            fontFamily: 'Averia Serif Libre',
          }}
          declineButtonText="Do Not Sell My Personal Information"
          declineButtonStyle={{
            background: 'none',
            textDecoration: 'underline',
            color: '#000',
            fontFamily: 'Averia Serif Libre',
          }}
          cookieName="gatsby-gdpr-google-analytics">
            <CookieSvg style={{ width: '48px', marginRight: '16px' }}/>
            This website uses cookies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners.
        </CookieConsent>
        <div className="Wrap">
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

// Layout.propTypes = {
//   children: PropTypes.func,
// }

export default Layout

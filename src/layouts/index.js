import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from '../components/footer'
import Header from '../components/header'
import How from '../components/How'
import Divider from '../components/Divider'
import Cart from '../components/Cart/ShopCart'

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

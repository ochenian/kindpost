import React from 'react'
import Layout from '../layouts/index'
import Logo from '../assets/svg/KP_Thumbnail.svg'
import FacebookIcon from '../assets/svg/facebook.svg'
import InstagramIcon from '../assets/svg/instagram.svg'
import TwitterIcon from '../assets/svg/twitter.svg'

const Contact = () => (

    <Layout site="kindpost" headerClass="Header light">
      <div className="contact-container">
        <h1>CONTACT</h1>
        <Logo />
        <section>
          <a href="mailto:studio@kindpost.com">help@kindpost.com</a>
          <p>For any questions, comments, or insights. We welcome them all!</p>
        </section>
        <section>
          <a href="mailto:collaborate@kindpost.com">collaborate@kindpost.com</a>
          <p>Have an idea for a custom postcard? Let's hear it!</p>
        </section>
        <section>
          <a href="mailto:press@kindpost.com">media@kindpost.com</a>
          <p>Would you like to contact us about our story? We'd be happy to share!</p>
        </section>
        <section className="social-icons">
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
        </section>
      </div>
    </Layout>


)

export default Contact
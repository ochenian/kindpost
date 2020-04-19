import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts/index'
import Logo from '../assets/svg/KP_Thumbnail.svg'
import CompanyLogo from '../assets/svg/KP_Logo.svg'
import FacebookIcon from '../assets/svg/facebook.svg'
import InstagramIcon from '../assets/svg/instagram.svg'
import TwitterIcon from '../assets/svg/twitter.svg'

const Contact = () => {

  const data = useStaticQuery(graphql`
  query heroQuery {
    heroImg: file(relativePath: { eq: "Image9.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (  <Layout site="kindpost" headerClass="Header light">
      <div className="contact-container">
        <Img className="hero" fluid={data.heroImg.childImageSharp.fluid} />
        <div className="contact-content">
          <h1>ABOUT US</h1>
          <Logo />
          <section>
            <p>Hi There!</p>
          </section>
          <section>
            <p>Wondering what we're all about? You're in the right place!</p>
          </section>
          <section>
            <p>One gloomy day, one of our founders, <span className="color--primary">Cate</span>, was feeling down & had this thought:</p>
          </section>
          <section>
            <p>
              "I wish there was someone out there who would send me a note -
              something <span className="color--primary"> pretty </span> &
              <span className="color--primary"> inspirational </span> &
              <span className="color--primary"> hopeful </span> that I could pin on
              my bulletin board - telling me that everything is
              <span className="color--primary"> going to be ok </span>."
            </p>
          </section>

          <section>
            <p>
              And then she *just like that* thought,
            </p>
          </section>

          <section>
            <p>
              "If I'm feeling this way, surely others are too!"
            </p>
          </section>

          <section>
            <p>
              And so
              <CompanyLogo />
              was born.
            </p>
          </section>
          <section className="social-icons">
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
          </section>
        </div>

      </div>
    </Layout>)


}

export default Contact

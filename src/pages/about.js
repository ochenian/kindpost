import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts/index'
import Logo from '../assets/svg/KP_Thumbnail.svg'
import CompanyLogo from '../assets/svg/KP_Logo.svg'
import FacebookIcon from '../assets/svg/facebook.svg'
import TwitterIcon from '../assets/svg/twitter.svg'
import InstagramIcon from '../assets/svg/insta_icon.svg'
import styled from 'styled-components'

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

  const Container = styled.section`
    background: #43546a;
    /* background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, #43546a 15%, #43546a 85%, rgba(0,0,0,0.8) 100%); */
    /* background: radial-gradient(farthest-corner, #43546a 60%, rgba(0,0,0,0.6) 100%); */
    color: #fff;
    font-size: 0.9em;
    padding: 8em 10em;
    line-height: 2;
    letter-spacing: 1.25px;
    font-family: 'Averia Serif Libre';
  `

  const StyledTextHeader = styled.p`
    position: relative;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 4em;
    font-size: 1.25em;
    text-transform: lowercase;
    letter-spacing: 4px;
    width: fit-content;
    font-style: italic;

    &:before {
      content: "";
      position: absolute;
      left: 25%;
      bottom: -8px;
      height: 1px;
      width: 50%;
      border-bottom: 2px solid #f5bc5e;
    }
  `

  const TextBody = styled.div`
  margin: 0 auto;
  max-width: 550px;
  `

  const StyledTextSection = styled.p`
  margin-bottom: 2em;

    &:last-of-type {
      margin-bottom: 0;
    }
  `

  const StyledTextSignature = styled.p`
  margin-bottom: 0;
  color: #f5bc5e;
  font-style: italic;
  `

  const SocialIcons = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    margin: 0 auto;
    margin-top: 5em;

    svg {
      width: 24px;
      height: 24px;
      fill: #fff;
      cursor: pointer;
    }
  `

  const Logo = styled(CompanyLogo)`
    fill: #fff;
    width: 6rem;
    height: auto;
  `

  return (
    <Layout site="kindpost" headerClass="Header">
      {/* <div className="contact-container"> */}
        {/* <Img className="hero" fluid={data.heroImg.childImageSharp.fluid} /> */}
      <Container>
        {/* <div className="contact-content"> */}
        <TextBody>
          <StyledTextHeader>ABOUT US</StyledTextHeader>
          {/* <Logo /> */}
          <StyledTextSection>
            Hi There!
          </StyledTextSection>
          <StyledTextSection>
            We’re Kindpost!
          </StyledTextSection>
          <StyledTextSection>

              Over the years, we have thoughtfully curated a treasure trove of vintage postcards from around the globe.
              For occasions big and small, we have taken joy in sharing our collection by selecting a postcard and
              mailing a sweet, hand-lettered note on that postcard to family and friends.  As each bespoke piece has
              been sent, more and more people have inquired.

          </StyledTextSection>
          <StyledTextSection>

              So, we opened up shop to expand this community to you! On our site, you can select an occasion and purchase
              a postcard.  Once your order is placed, a member of our team will personally select for you one of our
              vintage postcards and will write a personalized, hand-lettered message to you or your loved one, based on
              the occasion that you have selected.

          </StyledTextSection>

          <StyledTextSection>

              Consider it a little love note.

          </StyledTextSection>

          <StyledTextSection>

              So, settle in and make yourself comfortable.  We’re excited to meet you.

          </StyledTextSection>
          <StyledTextSignature>Cate</StyledTextSignature>
          <Logo/>

          {/* <section>
            <p>
              And so
              <CompanyLogo />
              was born.
            </p>
          </section> */}
          <SocialIcons>
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
          </SocialIcons>
        </TextBody>
        {/* </div> */}
      </Container>
      {/* </div> */}
    </Layout>)


}

export default Contact

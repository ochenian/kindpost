import React, { useState } from 'react'
import Link from 'gatsby-link'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import TwitterLogo from '../assets/svg/Twitter_Logo_White.svg'
import InstaLogo from '../assets/svg/insta_icon.svg'
import FacebookLogo from '../assets/svg/facebook.svg'
import KpThumbnail from '../assets/svg/KP_Thumbnail.svg'
import addToMailchimp from 'gatsby-plugin-mailchimp';

const MobileLinksSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 64px 0;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }
`
const MobileLink = styled(Link)`
  padding: 8px;
  width: 100px;
  text-align: center;
`

const PrivacyText = styled.p`
  font-size: 0.75rem;
`

const SectionHeader = styled.div`
  font-size: 2rem;
  margin-bottom: 16px;
`

const EmailContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  width: 100%;

  & input {
    padding: 10px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    color: #fff;
    flex: 1;
  }

  & button {
    color: white;
    text-transform: uppercase;
    background: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #fff;
    cursor: pointer;
    letter-spacing: 0.1em;
    font-family: 'Averia Serif Libre';
  }
`

const StyledTwitterLogo = styled(TwitterLogo)`
  width: 64px;
  height: 64px;
  cursor: pointer;
`

const StyledInstaLogo = styled(InstaLogo)`
  width: 36px;
  height: 36px;
  fill: #fff;
  cursor: pointer;
`
const StyledFacebookLogo = styled(FacebookLogo)`
  width: 36px;
  height: 36px;
  fill: #fff;
  cursor: pointer;
`

const LegalContainer = styled.div`
  background: #000;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  padding: 16px;

  div, a {
    margin-right: 16px;
    color: #fff;
  }

  svg {
    margin-left: auto;
  }
`

const Footer = () => {
  const mobile = useMediaQuery({
    query: '(max-width: 900px)'
  })

  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    addToMailchimp(email)
      .then((data) => {
        console.log(data.result)
      })
      .catch((error) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <React.Fragment>
      <div className="siteInfoContainer">
          {
            !mobile &&
              <>
                <div className="links">
                  <SectionHeader>Info.</SectionHeader>
                  <Link to="/about">About us</Link>
                  <Link to="/faq">FAQ</Link>
                  <Link to="/contact">Contact us</Link>
                </div>

                <div className="links">
                <form onSubmit={handleSubmit}>
                  <SectionHeader>Subscribe.</SectionHeader>
                  <EmailContainer>
                    <input name="email" type="text" onChange={handleEmailChange} />
                    <button type="submit">Sign Up</button>
                  </EmailContainer>

                  <PrivacyText>YOUR EMAIL ADDRESS WILL BE USED IN ACCORDANCE WITH OUR <Link to="/privacy-policy" style={{ textDecoration: 'underline' }}>PRIVACY POLICY</Link></PrivacyText>
                </form>
                </div>

                <div className="links">
                  <SectionHeader>Follow.</SectionHeader>
                  <a href="https://twitter.com/kindpostco">Facebook</a>
                  <a href="https://www.instagram.com/kindpostco">Instagram</a>
                  <a href="https://www.facebook.com/kindpostco">Twitter</a>
                </div>
              </>
          }

          {
            mobile &&
              <>
                <MobileLinksSection>
                  <MobileLink to="/about">About us</MobileLink>
                  <MobileLink to="/faq">FAQ</MobileLink>
                  <MobileLink to="/contact">Contact us</MobileLink>
                </MobileLinksSection>
                <section>
                  <EmailContainer>
                    <input />
                    <button>Sign Up</button>
                  </EmailContainer>
                </section>
                <MobileLinksSection>
                  <a href="https://twitter.com/kindpostco">
                    <StyledTwitterLogo/>
                  </a>
                  <a href="https://www.instagram.com/kindpostco">
                    <StyledInstaLogo />
                  </a>
                  <a href="https://www.facebook.com/kindpostco">
                    <StyledFacebookLogo />
                  </a>
                </MobileLinksSection>
              </>
          }
      </div>
      <LegalContainer>
        <div>&copy; 2020 kindpost.</div>
        <div>made with ♡ in california</div>
        <Link to="/terms-of-service">terms of service</Link>
        <Link to="/privacy-policy">privacy policy</Link>
        <KpThumbnail style={{
          width: '24px',
          height: '24px',
          marginLeft: 'auto'
          }}
        />
      </LegalContainer>
    </React.Fragment>
  )
}

export default Footer


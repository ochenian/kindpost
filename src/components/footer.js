import React from 'react'
import Link from 'gatsby-link'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import TwitterLogo from '../assets/svg/Twitter_Logo_White.svg'
import InstaLogo from '../assets/svg/insta_icon.svg'
import FacebookLogo from '../assets/svg/facebook.svg'

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
  border: 2px solid #fff;
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

const Footer = () => {
  const mobile = useMediaQuery({
    query: '(max-width: 900px)'
  })

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
                  <SectionHeader>Subscribe.</SectionHeader>
                  <EmailContainer>
                    <input />
                    <button>Sign Up</button>
                  </EmailContainer>

                  <PrivacyText>YOUR EMAIL ADDRESS WILL BE USED IN ACCORDANCE WITH OUR PRIVACY POLICY</PrivacyText>
                </div>

                <div className="links">
                  <SectionHeader>Follow.</SectionHeader>
                  <div>Facebook</div>
                  <div>Instagram</div>
                  <div>Twitter</div>
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
                <section style={{ width: "66%" }}>
                  <EmailContainer>
                    <input />
                    <button>Sign Up</button>
                  </EmailContainer>
                </section>
                <MobileLinksSection>
                  <StyledInstaLogo />
                  <StyledTwitterLogo />
                  <StyledFacebookLogo />
                </MobileLinksSection>
              </>
          }
      </div>
      {/* <div className="legal-footer">
        <div>&copy; 2020 kindpost.</div>
        <div>terms & conditions</div>
        <div>privacy policy</div>
      </div> */}
    </React.Fragment>
  )
}

export default Footer


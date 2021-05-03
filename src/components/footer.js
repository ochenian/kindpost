import React, { useState } from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import scrollTo from './ScrollTo';
import { useMediaQuery } from '../hooks/useMediaQuery';
import TwitterLogo from '../assets/svg/Twitter_Logo_White.svg';
import InstaLogo from '../assets/svg/insta_icon.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  // flex-wrap: wrap;
  color: rgb(242, 235, 229);
  font-family: 'Montserrat';
  background: #282828;
  // align-items: center;
  padding: 6em 3em;
  text-transform: uppercase;

  a {
    color: rgb(242, 235, 229);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3em;
`;

const MobileLinksSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  align-items: center;
  margin: 3em 0;

  &:last-of-type {
    display: flex;
    margin-bottom: 0;
    width: 50%;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 0;
  }
`;
const MobileLink = styled.a`
  padding: 8px;
`;

const LinksSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 6em;
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;
  font-size: 0.75rem;

  a {
    padding: 8px 0;
  }
`;

const PrivacyText = styled.p`
  font-size: 0.5rem;
`;

const SectionHeader = styled.div`
  font-size: 1.75rem;
  margin-bottom: 16px;
  text-transform: lowercase;
  font-family: 'Averia Serif Libre';
`;

const SignUpDescription = styled.div`
  text-transform: none;
  margin-bottom: 1em;
  font-style: italic;
  font-size: 1rem;
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 8px;
  width: 100%;

  & input {
    padding: 10px;
    height: 40px;
    background: transparent;
    border: 1px solid #fff;
    border-right: none;
    color: #fff;
    flex: 1;
  }

  & button {
    color: white;
    text-transform: uppercase;
    background: none;
    border: 1px solid #fff;
    cursor: pointer;
    letter-spacing: 0.1em;
    // font-family: 'Averia Serif Libre';
    font-family: 'Montserrat';
    padding: 11px;
    height: 40px;
  }
`;

const StyledTwitterLogo = styled(TwitterLogo)`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

const StyledInstaLogo = styled(InstaLogo)`
  width: 32px;
  height: 32px;
  fill: #fff;
  cursor: pointer;
  margin-right: 12px;
`;

const SignUpButton = styled.button`
  margin: 0;
  padding: 11px;
  cursor: pointer;

  :hover {
    // background: #d4004c;
    background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
    transition: all 0.5s;
  }
`;

const ScrollToTop = styled.button`
  background: transparent;
  border: none;
  width: 50px;
  cursor: pointer;
`;

const Footer = () => {
  const mobile = useMediaQuery('(max-width: 768px)');

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const handleSubmit = event => {
    event.preventDefault();

    addToMailchimp(email)
      .then(data => {
        setStatus(data);
      })
      .catch(error => {
        setStatus('error');
      });
  };

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value);
  };

  const data = useStaticQuery(graphql`
    query Thumbnail {
      kpThumbnail: file(relativePath: { eq: "KP_Thumbnail_Off_White.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      toTop: file(relativePath: { eq: "to_top_white.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <Wrapper>
        {!mobile && (
          <>
            <Column>
              <form onSubmit={handleSubmit} style={{ marginBottom: '6em' }}>
                <SectionHeader>subscribe.</SectionHeader>
                <SignUpDescription>
                  Get uplifting stories and special offers delivered to your
                  inbox.
                </SignUpDescription>
                {status.result !== 'success' && (
                  <EmailContainer>
                    <input
                      name="email"
                      type="text"
                      aria-label="subscribe to email"
                      onChange={handleEmailChange}
                    />
                    <SignUpButton type="submit">join</SignUpButton>
                  </EmailContainer>
                )}
                {status.result === 'error' && <div>{status.msg}</div>}
                {status.result === 'success' && (
                  <div>
                    Thanks! You&apos;ll receive a confirmation email shortly.
                  </div>
                )}

                <PrivacyText>
                  YOUR EMAIL ADDRESS WILL BE USED IN ACCORDANCE WITH OUR&nbsp;
                  <a
                    href="/privacy-policy"
                    style={{ textDecoration: 'underline' }}
                  >
                    PRIVACY POLICY
                  </a>
                </PrivacyText>
              </form>
              <Img
                fluid={data.kpThumbnail.childImageSharp.fluid}
                style={{
                  width: '5vw',
                  marginTop: 'auto',
                  marginBottom: '1em',
                  maxWidth: '50px',
                }}
              />
              <div style={{ fontSize: '0.5rem' }}>
                made with ♡ in california
              </div>
              <div style={{ fontSize: '0.5rem' }}>
                &copy; {new Date().getFullYear()} kindpost llc. all rights
                reserved.
              </div>
            </Column>

            <Column>
              <LinksSectionWrapper>
                <LinksSection>
                  <SectionHeader>Info.</SectionHeader>
                  <a href="/about">Our Story</a>
                  <a href="/faq">FAQ</a>
                  <a href="/contact">Contact us</a>
                </LinksSection>

                <LinksSection>
                  <SectionHeader>Follow.</SectionHeader>
                  <a href="https://twitter.com/kindpostco">Twitter</a>
                  <a href="https://www.instagram.com/kindpostco">Instagram</a>
                </LinksSection>

                <LinksSection>
                  <SectionHeader>legal.</SectionHeader>
                  <a href="/terms-of-service">terms of service</a>
                  <a href="/privacy-policy">privacy policy</a>
                </LinksSection>
              </LinksSectionWrapper>
            </Column>
            <Column style={{ marginLeft: '-3em' }}>
              <ScrollToTop onClick={() => scrollTo('#top')}>
                <Img
                  fluid={data.toTop.childImageSharp.fluid}
                  style={{ width: '100%' }}
                />
              </ScrollToTop>
            </Column>
          </>
        )}

        {mobile && (
          <>
            <a href="/">
              <Img
                fluid={data.kpThumbnail.childImageSharp.fluid}
                style={{
                  width: '8vw',
                  marginBottom: '3em',
                  minwidth: '40px',
                  maxWidth: '60px',
                }}
              />
            </a>
            <form onSubmit={handleSubmit}>
              <section>
                {status.result !== 'success' && (
                  <>
                    {/* <SectionHeader>subscribe.</SectionHeader> */}
                    <SignUpDescription>
                      Get uplifting stories and special offers delivered to your
                      inbox.
                    </SignUpDescription>
                    <EmailContainer>
                      <input
                        name="email"
                        type="text"
                        onChange={handleEmailChange}
                      />
                      <SignUpButton type="submit">join</SignUpButton>
                    </EmailContainer>
                  </>
                )}
                {status.result === 'error' && <div>{status.msg}</div>}
                {status.result === 'success' && (
                  <div>
                    Thanks! You&apos;ll receive a confirmation email shortly.
                  </div>
                )}
              </section>
              <PrivacyText>
                YOUR EMAIL ADDRESS WILL BE USED IN ACCORDANCE WITH OUR&nbsp;
                <a
                  href="/privacy-policy"
                  style={{ textDecoration: 'underline' }}
                >
                  PRIVACY POLICY
                </a>
              </PrivacyText>
            </form>
            <MobileLinksSection>
              <MobileLink href="/faq">FAQ</MobileLink>
              <MobileLink href="/about">Our Story</MobileLink>
              <MobileLink href="/contact">Contact us</MobileLink>
              <MobileLink href="/privacy-policy">privacy policy</MobileLink>
              <MobileLink href="/terms-of-service">terms of service</MobileLink>
            </MobileLinksSection>
            <MobileLinksSection>
              <a href="https://twitter.com/kindpostco">
                <StyledTwitterLogo />
              </a>
              <a href="https://www.instagram.com/kindpostco">
                <StyledInstaLogo />
              </a>
            </MobileLinksSection>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default Footer;

import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/index';
import FacebookIcon from '../assets/svg/facebook.svg';
import TwitterIcon from '../assets/svg/twitter.svg';
import InstagramIcon from '../assets/svg/insta_icon.svg';

const Contact = () => {
  const Container = styled.section`
    background: #43546a;
    color: #fff;
    font-size: 0.9em;
    padding: 8em 4em;
    line-height: 2;
    letter-spacing: 1.25px;
    font-family: 'Averia Serif Libre';
  `;

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
      content: '';
      position: absolute;
      left: 25%;
      bottom: -8px;
      height: 1px;
      width: 50%;
      border-bottom: 2px solid #f5bc5e;
    }
  `;

  const TextBody = styled.div`
    margin: 0 auto;
    max-width: 550px;
  `;

  const StyledTextSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;

    &:last-of-type {
      margin-bottom: 0;
    }

    a {
      color: #f5bc5e;
    }
  `;

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
  `;

  return (
    <Layout site="kindpost" headerClass="Header">
      <Container>
        <TextBody>
          <StyledTextHeader>CONTACT</StyledTextHeader>
          <StyledTextSection>
            <a href="mailto:studio@kindpost.com">help@kindpost.com</a>
            Feel free to send us any questions on our products!
          </StyledTextSection>
          <StyledTextSection>
            <a href="mailto:collaborate@kindpost.com">
              collaborate@kindpost.com
            </a>
            For press inquiries to feature Kindpost, please contact us at the
            above address.
          </StyledTextSection>
          <StyledTextSection>
            <a href="mailto:press@kindpost.com">media@kindpost.com</a>
            To discuss collaborations, sponsorships, or social media
            engagements, please contact us at the above address.
          </StyledTextSection>
          <SocialIcons>
            <a href="https://twitter.com/kindpostco">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/kindpostco">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/kindpostco">
              <FacebookIcon />
            </a>
          </SocialIcons>
        </TextBody>
      </Container>
    </Layout>
  );
};

export default Contact;

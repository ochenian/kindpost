import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/index';
import TwitterIcon from '../assets/svg/twitter.svg';
import InstagramIcon from '../assets/svg/insta_icon.svg';

const Container = styled.section`
  // font-size: 0.9em;
  // padding: 8em 4em;
  // line-height: 2;
  letter-spacing: 1.25px;
  background: #fff;
  color: rgb(40, 40, 40);
  font-family: 'orpheuspro';
  padding-top: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledTextHeader = styled.p`
  position: relative;
  text-align: center;
  margin: 0 auto;
  // margin-bottom: 100px;
  font-size: 1.75em;
  text-transform: uppercase;
  letter-spacing: 4px;
  width: fit-content;
  // font-style: italic;
  font-family: 'tk-orpheuspro-n7';
  font-weight: bold;

  // &:before {
  //   content: '';
  //   position: absolute;
  //   left: 25%;
  //   bottom: -8px;
  //   height: 1px;
  //   width: 50%;
  //   border-bottom: 2px solid #f5bc5e;
  // }
`;

const Subtitle = styled.div`
  margin-bottom: 100px;
  text-align: center;
`;

const TextBody = styled.div`
  // margin: 200px auto;
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
    // color: #f5bc5e;
    color: #d4004c;
    font-weight: bold;
    font-size: 1.25rem;
  }
`;

const SocialIcons = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  margin: 0 auto;
  margin-top: 100px;

  svg {
    width: 24px;
    height: 24px;
    fill: rgb(40, 40, 40);
    cursor: pointer;

    &:hover {
      fill: #d4004c;

      path {
        fill: #d4004c;
      }
    }
  }
`;

const Contact = () => {
  return (
    <Layout site="kindpost" headerClass="Header light">
      <Container>
        <TextBody>
          <StyledTextHeader>Contact</StyledTextHeader>
          <Subtitle>Want to get in touch? We're here to help.</Subtitle>
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
          </SocialIcons>
        </TextBody>
      </Container>
    </Layout>
  );
};

export default Contact;

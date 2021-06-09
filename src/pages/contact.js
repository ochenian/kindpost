import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/index';
import TwitterIcon from '../assets/svg/twitter.svg';
import InstagramIcon from '../assets/svg/insta_icon.svg';

const Container = styled.section`
  letter-spacing: 1.25px;
  background: #fff;
  color: rgb(40, 40, 40);
  font-family: 'calluna';
  padding-top: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 900px) {
    height: auto;
    padding: 10em 32px;
  }
`;

const StyledTextHeader = styled.p`
  position: relative;
  text-align: center;
  margin: 0 auto;
  font-size: 1.75em;
  text-transform: uppercase;
  letter-spacing: 4px;
  width: fit-content;
  font-family: 'calluna';
  font-weight: bold;
`;

const Subtitle = styled.div`
  margin-bottom: 100px;
  text-align: center;

  @media (max-width: 600px) {
    margin-bottom: 64px;
  }
`;

const TextBody = styled.div`
  max-width: 550px;
`;

const StyledTextSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;

  font-family: 'futura-pt';

  &:last-of-type {
    margin-bottom: 0;
  }

  a {
    color: #d4004c;
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
          <Subtitle>
            Want to get in touch? <div>We're here to help.</div>
          </Subtitle>
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
            <a href="https://www.instagram.com/kindpostco">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com/kindpostco">
              <TwitterIcon />
            </a>
          </SocialIcons>
        </TextBody>
      </Container>
    </Layout>
  );
};

export default Contact;

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InstaLogo from '../assets/svg/instagram.svg';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 75vh;
  background: #fff;
`;

const Hashtag = styled.div`
  color: #d4004c;
  font-family: 'Averia Serif Libre';
  font-size: 1.5rem;
`;

const StyledInstaLogo = styled(InstaLogo)`
  margin-bottom: 2rem;
  width: 4vw;
  max-width: 50px;
  min-width: 33px;
`;

const FollowText = styled.div`
  font-size: 2rem;
  font-family: 'Montserrat';
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: #282828;
  text-align: center;
`;

const Instagram = () => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.config({
        nullTargetWarn: false,
      });
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals('ScrollTrigger', ScrollTrigger);
    }
  });
  return (
    <Wrapper>
      <a href="https://www.instagram.com/kindpostco" aria-label="Instagram">
        <StyledInstaLogo />
      </a>
      <FollowText>Follow us on Instagram</FollowText>
      <a href="https://www.instagram.com/kindpostco" aria-label="Instagram">
        <Hashtag>#kindpost</Hashtag>
      </a>
    </Wrapper>
  );
};

export default Instagram;

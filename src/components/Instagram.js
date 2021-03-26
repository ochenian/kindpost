import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import InstaLogo from '../assets/svg/instagram.svg';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 75vh;
`;

const Hashtag = styled.div`
  color: #d4004c;
  font-family: 'Averia Serif Libre';
  // text-transform: uppercase;
  font-size: 1.5rem;
`;

const StyledInstaLogo = styled(InstaLogo)`
  margin-bottom: 2rem;
  width: 4vw;
  max-width: 50px;
  min-width: 33px;
`;

const Instagram = () => {
  useEffect(() => {
    gsap.utils.toArray('.fadeInBlock').forEach((panel, i) => {
      gsap.from(panel, {
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom-=200',
        },
        autoAlpha: 0,
        translateY: '20%',
      });
    });
  });
  return (
    <Wrapper>
      <a
        href="https://www.instagram.com/kindpostco"
        aria-label="Instagram"
        className="fadeInBlock"
      >
        <StyledInstaLogo />
      </a>
      <div
        className="fadeInBlock"
        style={{ marginBottom: '2rem', fontSize: '2rem' }}
      >
        Follow us on Instagram
      </div>
      <a
        href="https://www.instagram.com/kindpostco"
        aria-label="Instagram"
        className="fadeInBlock"
      >
        <Hashtag>#kindpost</Hashtag>
      </a>
    </Wrapper>
  );
};

export default Instagram;

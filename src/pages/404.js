import React from 'react';
import styled, { keyframes } from 'styled-components';
import Layout from '../layouts/index';
import CtaButton from '../components/shared/Button';

const Wrapper = styled.div`
  background-color: #141114;
  background-image: linear-gradient(335deg, black 23px, transparent 23px),
    linear-gradient(155deg, black 23px, transparent 23px),
    linear-gradient(335deg, black 23px, transparent 23px),
    linear-gradient(155deg, black 23px, transparent 23px);
  background-size: 58px 58px;
  background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;

  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const flicker = keyframes`
  from {
    opacity: 1;
  }

  4% {
    opacity: 0.9;
  }

  6% {
    opacity: 0.85;
  }

  8% {
    opacity: 0.95;
  }

  10% {
    opacity: 0.9;
  }

  11% {
    opacity: 0.922;
  }

  12% {
    opacity: 0.9;
  }

  14% {
    opacity: 0.95;
  }

  16% {
    opacity: 0.98;
  }

  17% {
    opacity: 0.9;
  }

  19% {
    opacity: 0.93;
  }

  20% {
    opacity: 0.99;
  }

  24% {
    opacity: 1;
  }

  26% {
    opacity: 0.94;
  }

  28% {
    opacity: 0.98;
  }

  37% {
    opacity: 0.93;
  }

  38% {
    opacity: 0.5;
  }

  39% {
    opacity: 0.96;
  }

  42% {
    opacity: 1;
  }

  44% {
    opacity: 0.97;
  }

  46% {
    opacity: 0.94;
  }

  56% {
    opacity: 0.9;
  }

  58% {
    opacity: 0.9;
  }

  60% {
    opacity: 0.99;
  }

  68% {
    opacity: 1;
  }

  70% {
    opacity: 0.9;
  }

  72% {
    opacity: 0.95;
  }

  93% {
    opacity: 0.93;
  }

  95% {
    opacity: 0.95;
  }

  97% {
    opacity: 0.93;
  }

  to {
    opacity: 1;
  }`;

const shine = keyframes`
  0% {
    color: #6b1839;
    text-shadow: none;
  }
  100% {
    color: #ffe6ff;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
  }
`;

const blink = keyframes` 
  0%,
  22%,
  36%,
  75% {
    color: #ffe6ff;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
  }
  28%,
  33% {
    color: #ff65bd;
    text-shadow: none;
  }
  82%,
  97% {
    color: #ff2483;
    text-shadow: none;
  }`;

const Sign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(
    ellipse 50% 35% at 50% 50%,
    #6b1839,
    transparent
  );
  letter-spacing: 2;
  font-family: 'Averia Serif Libre';
  text-transform: lowercase;
  font-size: 6em;
  color: #ffe6ff;
  text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
    -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
    0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
  animation: ${shine} 2s forwards, ${flicker} 3s infinite;
`;

const FastFlicker = styled.span`
  animation: ${shine} 2s forwards, ${blink} 10s 1s infinite;
`;

const MediumFlicker = styled.span`
  animation: ${shine} 2s forwards, ${blink} 6.5s 1.5s infinite;
`;

const SlowFlicker = styled.span`
  animation: ${shine} 2s forwards, ${blink} 3s 2s infinite;
`;

const Heart = styled.span`
  font-size: 1.25rem;
  transform: rotateZ(15deg);
  align-self: flex-end;
  position: relative;
  bottom: 33px;
  left: 4px;
`;

const Button = styled(CtaButton)`
  margin-top: 36px;

  &&&&:hover {
    border-color: #fff;
    background: transparent;
  }
`;

const NotFoundPage = () => (
  <Layout
    title="404 | kindpost"
    description="Page not found."
    headerClass="Header"
  >
    <Wrapper>
      <Sign style={{ fontFamily: 'futura-pt' }}>404</Sign>
      <Sign>
        <FastFlicker>k</FastFlicker>ind
        <SlowFlicker>p</SlowFlicker>
        ost
        <Heart>
          <MediumFlicker>&hearts; </MediumFlicker>
        </Heart>
      </Sign>
      <Sign>
        <Button>HOME</Button>
      </Sign>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;

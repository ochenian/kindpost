import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ButtonLink from './ButtonLink';
import CtaButton from '../components/shared/Button';

const Background = styled.div`
  font-size: 1.5rem;
  font-family: 'calluna';
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  background: #d4004c12;
  padding: 5em;

  // @media (max-width: 650px) {
  //   padding: 3em;
  // }
`;

const Quote = styled.blockquote`
  margin-bottom: 1em;
  width: calc(100% - 72px);
  max-width: 54ch;
  font-family: 'Averia Serif Libre';

  &:before,
  &:after {
    position: absolute;
    color: #d4004c1f;
    font-size: 8rem;
    width: 4rem;
    height: 4rem;
  }

  &:before {
    content: '“';
    left: 0rem;
    top: -4rem;
  }

  &:after {
    content: '”';
    right: -1rem;
    bottom: 0rem;
  }
`;

const Signature = styled.div`
  font-family: 'Les Mores';
  font-size: 3em;
`;

const SignatureTitle = styled.div`
  font-size: 0.75em;
  font-family: 'futura-pt';
`;

const StoryLink = styled.div`
  font-size: 0.75em;
  cursor: pointer;
  color: rgb(40, 40, 40);
  font-weight: bold;
`;

const StyledButtonLink = styled(ButtonLink)`
  width: fit-content;
  margin: 0 auto;
  margin-top: 3em;
`;

const PinkText = styled.span`
  color: #d4004c;
`;

const StyledCtaButton = styled(CtaButton)`
  margin-top: 3rem;
  border-color: #282828;
  color: #282828;
`;

const QuoteBlock = () => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.config({
        nullTargetWarn: false,
      });
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals('ScrollTrigger', ScrollTrigger);
    }
    gsap.utils.toArray('.fadeIn').forEach((panel, i) => {
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
    <Background>
      <Quote className="fadeIn">
        Whether it’s a pick-me-up, <PinkText>inspiration</PinkText>, or a
        message of <PinkText>empowerment</PinkText>, our goal is promoting a
        sense of <PinkText>hope</PinkText> and building{' '}
        <PinkText>connection</PinkText> through the transformative nature
        of&nbsp;
        <PinkText>kindness</PinkText>.
      </Quote>

      <Signature className="fadeIn">Cate</Signature>
      <SignatureTitle className="fadeIn">Founder / CEO</SignatureTitle>
      <StyledCtaButton>Read Our Story</StyledCtaButton>
    </Background>
  );
};

export default QuoteBlock;

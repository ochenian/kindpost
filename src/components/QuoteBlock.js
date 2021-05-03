import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ButtonLink from './ButtonLink';

const Background = styled.div`
  height: 75vh;
  font-size: 1.5rem;
  font-family: 'calluna';
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background: #ffb5c23d;
  margin: 0 auto;
  border-radius: 12px;
  width: 90%;

  @media (max-width: 650px) {
    padding: 3em 0;
    height: auto;
  }
`;

const Quote = styled.p`
  margin-bottom: 1em;
  width: calc(100% - 72px);
  max-width: 50ch;
`;

const Signature = styled.div`
  font-family: 'Les Mores';
  font-size: 3em;
`;

const SignatureTitle = styled.div`
  font-size: 0.75em;
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
        “Whether it’s a pick-me-up, <PinkText>inspiration</PinkText>, or a
        message of <PinkText>empowerment</PinkText>, our goal is promoting a
        sense of <PinkText>hope</PinkText> and building{' '}
        <PinkText>connection</PinkText> through the transformative nature
        of&nbsp;
        <PinkText>kindness</PinkText>.”
      </Quote>

      <Signature className="fadeIn">Cate</Signature>
      <SignatureTitle className="fadeIn">Founder / CEO</SignatureTitle>
      <StyledButtonLink color="rgb(40,40,40)">
        <a className="fadeIn" href="/about">
          <StoryLink>Read Our Story</StoryLink>
        </a>
      </StyledButtonLink>
    </Background>
  );
};

export default QuoteBlock;

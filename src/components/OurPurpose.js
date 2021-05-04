import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10em;
  position: relative;

  @media (max-width: 1000px) {
    padding: 0;
  }
`;

const Heading = styled.div`
  font-size: 2rem;
  margin-bottom: 1em;
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Montserrat';
  text-align: center;
`;

const PurposeText = styled.div`
  width: 100%;
  max-width: 50ch;
  font-size: 1.25rem;
`;

const OurPurpose = () => {
  const wrapperRef = useRef();
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.config({
        nullTargetWarn: false,
      });
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals('ScrollTrigger', ScrollTrigger);
    }

    ScrollTrigger.matchMedia({
      '(min-width: 1000px)': function() {
        gsap.from(wrapperRef.current, {
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top bottom-=200',
          },
          autoAlpha: 0,
          translateY: '20%',
        });
      },
    });
  });

  return (
    <Wrapper ref={wrapperRef}>
      <Heading>To hold love in your hands.</Heading>
      <PurposeText>
        We love a handwritten note. We miss opening Grandma’s snail mailed
        letters, with her curlicue cursive and loving words of encouragement.
        And back when people were traveling, we happily awaited receiving
        postcards from friends on their travels.
        <div style={{ alignSelf: 'start', marginTop: '1em', color: '#d4004c' }}>
          We’re bringing that back.
        </div>
      </PurposeText>
    </Wrapper>
  );
};

export default OurPurpose;

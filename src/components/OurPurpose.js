import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin: 8em 0;
  // margin-bottom: 12em;
  /* margin-top: 12em; */
  // background: rgb(242, 235, 229);
  padding: 0 10em;
  position: relative;
  // top: -60px;
  // z-index: 10;
  // margin: 200px 0;

  @media (max-width: 1000px) {
    padding: 0;
    margin-bottom: 3em;
  }
`;

const Heading = styled.div`
  font-size: 2rem;
  margin: 0 1.5rem 1em 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  // font-style: italic;
  font-family: 'Montserrat';

  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

const PurposeText = styled.div`
  width: 100%;
  // margin-bottom: 0.5em;
  max-width: 50ch;
  font-size: 1rem;

  @media (max-width: 1000px) {
    // padding: 0 3em;
    width: 90%;
  }
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
      // desktop
      '(min-width: 1000px)': function() {
        // setup animations and ScrollTriggers for screens 800px wide or greater (desktop) here...
        // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

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

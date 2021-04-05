import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap, { ScrollTrigger } from 'gsap';

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
  margin: 200px 0;

  @media (max-width: 545px) {
    padding: 0;
  }
`;

const Heading = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5em;
  text-transform: uppercase;

  @media (max-width: 545px) {
    font-size: 1rem;
  }
`;

const PurposeText = styled.div`
  width: 100%;
  // margin-bottom: 0.5em;
  max-width: 50ch;
  font-size: 1.5rem;

  @media (max-width: 545px) {
    padding: 0 3em;
  }
`;

const OurPurpose = () => {
  const wrapperRef = useRef();
  useEffect(() => {
    gsap.core.globals('ScrollTrigger', ScrollTrigger);
    gsap.from(wrapperRef.current, {
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top bottom-=200',
      },
      autoAlpha: 0,
      translateY: '20%',
    });
  });

  return (
    <Wrapper ref={wrapperRef}>
      {/* <Heading>Our Purpose</Heading> */}
      <PurposeText>
        Kindpost was founded on the belief the everyone deserves to be loved.
        With a particular focus on mental health, we seek to provide a path to
        happiness for those who love and those who need love.
        <div style={{ alignSelf: 'start', marginTop: '1em' }}>
          We are and always will be&nbsp;
          <span style={{ fontWeight: 'bold' }}>here for you</span>.
        </div>
      </PurposeText>
    </Wrapper>
  );
};

export default OurPurpose;

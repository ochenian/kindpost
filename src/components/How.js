import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import BirthdaySvg from '../assets/svg/Occasion.svg';
import PostcardSvg from '../assets/svg/Postcard.svg';
import MailTruckSvg from '../assets/svg/Truck2.svg';
import HappyFaceSvg from '../assets/svg/HappyFace3.svg';
import Underline from '../assets/svg/marker_underline.svg';

import { useSpring, useTrail, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const StyledUnderline = styled(Underline)`
  width: 25%;
  margin: 0 auto;
  margin-bottom: 8em;
  position: relative;
  top: -8px;
`;

const How = () => {
  const ref = useRef();

  // const props = useSpring({ opacity: 1, from: {opacity: 0}, delay: 1000})
  const items = [
    'pick an occasion',
    "we'll write a note",
    "we'll send your postcard",
  ];
  const descriptions = [
    'Select an occasion that conveys the message you want to send',
    'We will hand-select a postcard and write a positive message for your chosen occasion',
    'Our delivery specialists will address, stamp, & handle the mailing of your postcard',
  ];
  const components = [
    <BirthdaySvg className="occasion" />,
    <PostcardSvg className="postcard" />,
    <MailTruckSvg className="truck" />,
  ];
  const config = { mass: 25, tension: 10000, friction: 1000 };

  const [inViewRef, inView] = useInView({
    // rootMargin: '-100px 0px',
    threshold: 0.05,
    triggerOnce: true,
  });

  // Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop
  const setRefs = useCallback(
    node => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef],
  );

  const props = useSpring({ opacity: inView ? 1 : 0 });
  const trail = useTrail(components.length, {
    config,
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 20,
    // height: inView ? 80 : 0,
    from: {
      opacity: 0,
      x: 20,
      // height: 0
    },
  });

  return (
    <animated.div id="howTo" className="how-container">
      <animated.div ref={setRefs} style={{ ...props }} className="how-title">
        how it works
      </animated.div>
      <StyledUnderline />
      <animated.div
        ref={setRefs}
        style={{ ...props }}
        className="step-container"
      >
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={index}
            className="how-step"
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.div className="how-icon" style={{ height }}>
              {components[index]}
            </animated.div>
            <animated.div className="how-type" style={{ height }}>
              {items[index]}
            </animated.div>
            <animated.div className="how-description" style={{ height }}>
              {descriptions[index]}
            </animated.div>
          </animated.div>
        ))}
      </animated.div>
    </animated.div>
  );
};

export default How;

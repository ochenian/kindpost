import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PostcardImgContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const Card = styled.div`
  transform-style: preserve-3d;
  transform: perspective(800px);
  position: relative;
  backface-visibility: hidden;
  margin: 0 auto;
`;

const CardFace = styled.div`
  position: absolute;
  overflow: hidden;
  box-shadow: 0 20px 30px -15px rgba(0, 0, 0, 0.5),
    0 40px 40px -20px rgba(0, 0, 0, 0.4), 0 70px 50px -30px rgba(0, 0, 0, 0.3),
    0 40px 60px -5px rgba(239, 204, 144, 0.3);

  &.front {
    position: relative;
  }

  &.back {
    backface-visibility: hidden;
    transform: rotateY(180deg);
    width: 100%;
    top: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const ThreeDPostcard = ({
  frontImg,
  backImg,
  // postcardContainerRef,
  className,
  // externalFlip,
  flip,
  onClick,
}) => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.config({
        nullTargetWarn: false,
      });
    }
  });

  // const [flipped, setFlipped] = useState(false);
  // const [externalFlipped, setExternalFlipped] = useState(false);
  const postcardRef = useRef();

  // useEffect(() => {
  //   if ((!flipped && externalFlipped) || flipped) {
  //     gsap.to(postcardRef.current, {
  //       rotateY: -180,
  //       ease: 'back',
  //     });
  //     setExternalFlipped(false);
  //   } else {
  //     gsap.to(postcardRef.current, {
  //       rotateY: 0,
  //       ease: 'back',
  //     });
  //   }
  // }, [flipped, externalFlipped]);

  // useEffect(() => {
  //   setExternalFlipped(externalFlip);
  // }, [externalFlip]);

  useEffect(() => {
    if (flip) {
      gsap.to(postcardRef.current, {
        rotateY: -180,
        ease: 'back',
      });
    } else {
      gsap.to(postcardRef.current, {
        rotateY: 0,
        ease: 'back',
      });
    }
  }, [flip]);

  return (
    <Wrapper
      role="button"
      // onClick={() => setFlipped(flippedState => !flippedState)}
      onClick={onClick}
    >
      <Card
        className={`${className} postcardContainer`}
        // ref={postcardContainerRef}
        ref={postcardRef}
      >
        <CardFace className="front">
          <Img fluid={frontImg} />
        </CardFace>
        <CardFace className="back">
          <Img fluid={backImg} />
        </CardFace>
      </Card>
    </Wrapper>
  );
};

export default ThreeDPostcard;

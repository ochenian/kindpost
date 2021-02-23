import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PostcardImgContainer = styled(motion.div)`
  position: relative;
  cursor: pointer;
`;

const ThreeDPostcard = ({ rotation, frontImg, backImg }) => {
  const AnimatedImg = animated(Img);

  const [frontOpacity, setFrontOpacity] = useState(1);
  const [backOpacity, setBackOpacity] = useState(0);

  useEffect(() => {
    rotation.onChange(() => {
      if (rotation.get() > 90) {
        setFrontOpacity(0);
        setBackOpacity(1);
      } else {
        setFrontOpacity(1);
        setBackOpacity(0);
      }
    });
  }, [rotation]);

  function transformTemplate(transformProps, transformedString) {
    return `perspective(600px) ${transformedString}`;
  }

  return (
    <>
      <PostcardImgContainer
        transformTemplate={transformTemplate}
        style={{
          willChange: 'transform, opacity',
          rotateY: rotation,
        }}
      >
        <AnimatedImg
          style={{
            opacity: frontOpacity,
            willChange: 'opacity',
            boxShadow: `0px 60px 50px -20px rgba(0, 0, 0, 0.4)`,
          }}
          fluid={frontImg}
        />

        <AnimatedImg
          style={{
            position: 'absolute',
            width: '100%',
            top: 0,
            opacity: backOpacity,
            transform: `rotateY(-180deg)`,
            willChange: 'opacity',
            boxShadow: `0px 60px 50px -20px rgba(0, 0, 0, 0.4)`,
          }}
          fluid={backImg}
        />
      </PostcardImgContainer>
    </>
  );
};

export default ThreeDPostcard;

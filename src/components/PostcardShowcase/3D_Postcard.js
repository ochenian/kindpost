import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Img from 'gatsby-image';
import styled from 'styled-components';
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

const ThreeDPostcard = ({ frontImg, backImg, postcardContainerRef }) => (
  <>
    <Card className="postcardContainer" ref={postcardContainerRef}>
      <CardFace className="front">
        <Img fluid={frontImg} />
      </CardFace>
      <CardFace className="back">
        <Img fluid={backImg} />
      </CardFace>
    </Card>
  </>
);

export default ThreeDPostcard;

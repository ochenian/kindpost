import React from "react"
import styled from "styled-components"
import { Spring } from "react-spring/renderprops"

const SlideContainer = styled.div`
  position: absolute;
  /* width: 100%; */
  height: 100%;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
  img {
    object-fit: scale-down;
    display: block;
    max-height: 100%;
  }
`;

// interface IProps {
//   content: JSX.Element;
//   onClick?: () => void;
//   offsetRadius: number;
//   index: number;
//   animationConfig: object;
// }

const Slide = ({
  content,
  offsetRadius,
  index,
  animationConfig,
  onClick
}) => {
  const offsetFromCenter = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;

  let distanceFactor = 1 - Math.abs(offsetFromCenter / (offsetRadius + 1));
  let rotateZ = '0deg'

  const translateXoffset =
    50 * (Math.abs(offsetFromCenter) / (offsetRadius + 1));
  let translateX = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateX = 0;
    } else if (index === totalPresentables - 1) {
      translateX = -100;
    }
  }

  if (offsetFromCenter !== 0) {
    distanceFactor = 0.8
  }

  if (offsetFromCenter > 0) {
    translateX += translateXoffset;
    rotateZ = '2deg'
  } else if (offsetFromCenter < 0) {
    translateX -= translateXoffset;
    rotateZ = '-2deg'
  }

  return (
    <Spring
      to={{
        transform: `translateY(-50%) translateX(${translateX}%) scale(${distanceFactor}) rotateZ(${rotateZ})`,
        left: `${
          offsetRadius === 0 ? 50 : 50 + (offsetFromCenter * 50) / offsetRadius
        }%`,
        // opacity: distanceFactor * distanceFactor
        opacity: 1
      }}
      config={animationConfig}
    >
      {style => (
        <SlideContainer
          style={{ ...style, zIndex: Math.abs(Math.abs(offsetFromCenter) - 2) }}
          onClick={onClick}
        >
          {content}
        </SlideContainer>
      )}
    </Spring>
  );
}

export default Slide

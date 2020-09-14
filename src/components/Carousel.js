import React, { useEffect, useState } from "react"
import Slide from "./Slide"
import leftNavigation from "../assets/LeftNavigation.png";
import rightNavigation from "../assets/RightNavigation.png";
// import PropTypes from "prop-types";
import styled, {keyframes} from "styled-components"
import { useStaticQuery, graphql} from 'gatsby'
import { config } from "react-spring";
import Circle from "../assets/svg/circle.svg"
import { useMediaQuery } from 'react-responsive'

// Arrow Keyframes
// const stroke = keyframes`
//   52% {
//       transform: rotate(-180deg);
//       stroke-dashoffset: 0;
//   }
//   52.1% {
//       transform: rotate(-360deg);
//       stroke-dashoffset: 0;
//   }
//   100% {
//       transform: rotate(-180deg);
//       stroke-dashoffset: 126;
//   }
// `

// const arrow = keyframes`
//  0%,
//     100% {
//         transform: translateX(0);
//         opacity: 1;
//     }
//     23% {
//         transform: translateX(17px);
//         opacity: 1;
//     }
//     24%,
//     80% {
//         transform: translateX(-22px);
//         opacity: 0;
//     }
//     81% {
//         opacity: 1;
//         transform: translateX(-22px);
//     }
// `

// const arrowUp = keyframes`
//   0%,
//     100% {
//         transform: rotate(-40deg) scaleX(1);
//     }
//     20%,
//     80% {
//         transform: rotate(0deg) scaleX(.1);
//     }
// `

// const arrowDown = keyframes`
//   0%,
//     100% {
//         transform: rotate(40deg) scaleX(1);
//     }
//     20%,
//     80% {
//         transform: rotate(0deg) scaleX(.1);
//     }
// `

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 6em;
  max-width: 945px;
  height: 50vw;
  margin: 0 48px;
`;

const NavigationButtons = styled.div`
  position: relative;
  display: flex;
  height: 40px;
  margin: 0 auto;
  width: 20%;
  margin-top: 1rem;
  justify-content: space-between;
  img {
    height: 100%;
  }
`;

const DEFAULT_GO_TO_SLIDE_DELAY = 200;

// interface IState {
//   index: number;
//   goToSlide: number | null;
//   prevPropsGoToSlide: number;
//   newSlide: boolean;
// }

// interface IProps {
//   slides: Slide[];
//   goToSlide?: number;
//   showNavigation: boolean;
//   offsetRadius: number;
//   animationConfig: object;
//   goToSlideDelay: number;
// }

const mod = (a, b) => {
  return ((a % b) + b) % b;
}

const Carousel = (props) => {
  const [state, setState] =  useState({
    index: 0,
    goToSlide: null,
    prevPropsGoToSlide: 0,
    newSlide: false
  })

  const [attributes, setAttributes] = useState({
    goToSlide: 0,
    offsetRadius: 10,
    showNavigation: true,
    config: config.gentle,
    goToSlideDelay: 200,
  })

  const [animate, setAnimate] = useState({left: false, right: false})

  let goToIn

  // static propTypes = {
  //   slides: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       key: PropTypes.any,
  //       content: PropTypes.object
  //     })
  //   ).isRequired,
  //   goToSlide: PropTypes.number,
  //   showNavigation: PropTypes.bool,
  //   offsetRadius: PropTypes.number,
  //   animationConfig: PropTypes.object,
  //   goToSlideDelay: PropTypes.number,
  // };

  // props = {
  //   offsetRadius: props.offsetRadius || 2,
  //   animationConfig: props.animationConfig || { tension: 120, friction: 14 },
  //   goToSlideDelay: props.goToSlideDelay || DEFAULT_GO_TO_SLIDE_DELAY,
  // };

  const getDerivedStateFromProps = (props) => {
    const { goToSlide } = attributes;

    if (goToSlide !== state.prevPropsGoToSlide) {
      return { prevPropsGoToSlide: goToSlide, goToSlide, newSlide: true };
    }

    return null;
  }

  useEffect(() => {
    const { goToSlideDelay } = attributes;
    const { index, goToSlide, newSlide } = state;

    if (typeof goToSlide === "number") {
      if (newSlide) {
        handleGoToSlide();
      } else if (index !== goToSlide && typeof window !== "undefined") {
        window.clearTimeout(goToIn);
        goToIn = window.setTimeout(handleGoToSlide, goToSlideDelay);
      } else if (typeof window !== "undefined") {
        window.clearTimeout(goToIn);
      }
    }
    return () => {
      if (typeof window !== "undefined") {
        window.clearTimeout(goToIn);
      }
    }
  }, [state, attributes])

  // componentDidUpdate() {
  //   const { goToSlideDelay } = this.props;
  //   const { index, goToSlide, newSlide } = this.state;
  //   if (typeof goToSlide === "number") {
  //     if (newSlide) {
  //       this.handleGoToSlide();
  //     } else if (index !== goToSlide && typeof window !== "undefined") {
  //       window.clearTimeout(this.goToIn);
  //       this.goToIn = window.setTimeout(this.handleGoToSlide, goToSlideDelay);
  //     } else if (typeof window !== "undefined") {
  //       window.clearTimeout(this.goToIn);
  //     }
  //   }
  // }

  // componentWillUnmount() {
  //   if (typeof window !== "undefined") {
  //     window.clearTimeout(this.goToIn);
  //   }
  // }

  const modBySlidesLength = (index) => {
    return mod(index, props.slides.length);
  };

  const moveSlide = (direction) => {
    setState({
      index: modBySlidesLength(state.index + direction),
      goToSlide: null
    });
  };

  const getShortestDirection = (from, to) => {
    if (from > to) {
      if (from - to > props.slides.length - 1 - from + to) {
        return 1;
      } else return -1;
    } else if (to > from) {
      if (to - from > from + props.slides.length - 1 - to) {
        return -1;
      } else return 1;
    }
    return 0;
  }

  const handleGoToSlide = (state) => {
    if (typeof state.goToSlide !== "number") {
      return;
    }

    const { index } = state;

    const goToSlide = mod(state.goToSlide, props.slides.length);

    if (goToSlide !== index) {
      let direction = getShortestDirection(index, goToSlide);
      const isFinished =
        modBySlidesLength(index + direction) === goToSlide;

       setState({
        index: modBySlidesLength(index + direction),
        newSlide: isFinished,
        goToSlide: isFinished ? null : goToSlide
      });
    }
  };

  const clampOffsetRadius = (offsetRadius) => {
    const { slides } = props;
    const upperBound = Math.floor((slides.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  }

  const getPresentableSlides = () => {
    const { slides } = props;
    const { index } = state;
    let { offsetRadius } = attributes;
    offsetRadius = clampOffsetRadius(offsetRadius);
    const presentableSlides = new Array();

    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      presentableSlides.push(slides[modBySlidesLength(index + i)]);
    }

    return presentableSlides;
  }


    const { animationConfig, offsetRadius, showNavigation } = attributes;

    let navigationButtons = null;
    if (showNavigation) {
      navigationButtons = (
        <NavigationButtons>
          <img
            src={leftNavigation}
            onClick={() =>  nextSlide(-1)}
            style={{ marginRight: "2rem" }}
          />

          <img
            src={rightNavigation}
            onClick={() =>  nextSlide(1)}
            style={{ marginLeft: "2rem" }}
          />
        </NavigationButtons>
      );
    }

    const nextSlide = (direction) => {
      if (direction > 0) {
        setAnimate({left: false, right: true})
      } else if (direction < 0) {
        setAnimate({left: true, right: false})
      }

      setTimeout(() => {
        setAnimate({left: false, right: false})
      }, 1600)

      moveSlide(direction)
    }

    const mobile = useMediaQuery({
      query: '(max-width: 900px)'
    })

    return (
      <React.Fragment>
        <div onClick={() =>  nextSlide(-1)} className={`${!mobile ? 'arrow left' : ''} ${!mobile && animate.left ? 'animate': ''}`}>
          <i></i>
          <Circle />
        </div>

        <Wrapper>
          {getPresentableSlides().map(
            (slide, presentableIndex) => (
              <Slide
                key={slide.key}
                content={slide.content}
                onClick={slide.onClick}
                offsetRadius={clampOffsetRadius(offsetRadius)}
                index={presentableIndex}
                animationConfig={animationConfig}
              />
            )
          )}
        </Wrapper>
        {/* {navigationButtons} */}
        <div onClick={() =>  nextSlide(1)} className={`${!mobile ? 'arrow' : ''} ${!mobile && animate.right ? 'animate': ''}`}>
          <i></i>
          <Circle />
        </div>
      </React.Fragment>
    );

}

export default Carousel

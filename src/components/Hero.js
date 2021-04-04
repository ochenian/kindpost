import React, { useEffect, useRef } from 'react';
import { useSpring, useTrail, animated, config } from 'react-spring';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { Ease, gsap } from 'gsap';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import TwitterLogo from '../assets/svg/Twitter_Logo_White.svg';
import InstaLogo from '../assets/svg/insta_icon.svg';
import KpLogo from '../assets/svg/KP_Thumbnail_white.svg';
import TextRotator from './TextRotaor';
import CtaButton from './shared/Button';
import { useMediaQuery } from '../hooks/useMediaQuery';

const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  z-index: 10;
  position: absolute;
  bottom: 5vh;
  left: 4em;

  @media (max-width: 1024px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const StyledTwitterLogo = styled(TwitterLogo)`
  width: 36px;
  height: 36px;
  cursor: pointer;

  .cls-1 {
    fill: none;
  }

  :hover {
    .cls-2 {
      fill: #d4004c;
    }
  }
`;

const StyledInstaLogo = styled(InstaLogo)`
  margin: 6px 24px;
  fill: #fff;
  cursor: pointer;

  :hover {
    fill: #d4004c;
  }
`;

const Description = styled.div`
  letter-spacing: 2px;
  // width: 660px;
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: 2em;

  div {
    overflow: hidden;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
    // width: 90vw;
    margin: 2rem auto;
    letter-spacing: 1px;
    max-width: 75ch;
  }
`;

const Overlay = styled.div`
  height: 100%;
  background: rgb(191, 158, 154);
  position: relative;
  z-index: 100;
  y: 0;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledKpLogo = styled(KpLogo)`
  width: 100%;
  min-width: 25px;
  max-width: 100px;
  position: relative;
`;

const SendYourText = styled.div`
  margin-right: 0.25em;
  overflow: hidden;
  text-shadow: 1px 1px 1px rgb(0 0 0 / 80%);
`;

const ANewWayText = styled.div`
  overflow: hidden;
  font-size: 2em;
  letter-spacing: 0.18em;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    font-size: 24px;
  }

  margin-bottom: 0.5em;
`;

const Hero = () => {
  const mobile = useMediaQuery('(max-width: 600px)');
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 2000]);
  let trailConfig = { mass: 5, tension: 1000, friction: 100 };
  gsap.config({
    nullTargetWarn: false,
  });

  const overlayRef = useRef();
  const videoRef = useRef();

  const textSpring = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
  });
  const videoSpring = useSpring({ opacity: 1, from: { opacity: 0 } });

  const videoText = ['send', 'your'];

  const trail = useTrail(videoText.length, {
    config: config.wobbly,
    opacity: 1,
    transform: 'translateY(0)',
    from: {
      transform: 'translateY(16px)',
      opacity: 0,
    },
    // config: {duration: 1000}
    delay: 1000,
  });

  const buttonAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: {
      opacity: 0,
      transform: 'scale(0.75)',
    },
    delay: 3000,
    config: config.wobbly,
  });

  const data = useStaticQuery(graphql`
    query CloudinaryVideo {
      allCloudinaryMedia(filter: { resource_type: { eq: "video" } }) {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `);

  const rotatedText = [
    {
      text: 'inspiration',
      className: 'classA',
      animation: 'fade',
    },
    {
      text: 'appreciation',
      className: 'classA',
      animation: 'fade',
    },
    {
      text: 'gratitude',
      className: 'classA',
      animation: 'fade',
    },
    {
      text: 'positivity',
      className: 'classA',
      animation: 'fade',
    },
    {
      text: 'well wishes',
      className: 'classA',
      animation: 'fade',
    },
    {
      text: 'best',
      className: 'classA',
      animation: 'fade',
    },
    {
      text: 'love',
      className: 'classA',
      animation: 'fade',
    },
  ];
  const clVideo = data.allCloudinaryMedia.edges[0];

  const logoRef = useRef();
  const rotatorTextRef = useRef();
  const timelineSettings = {
    staggerValue: 0.014,
    charsDuration: 0.5,
  };

  useEffect(() => {
    Splitting({ by: 'chars' });
    const tl = gsap.timeline();
    tl.from(logoRef.current, {
      autoAlpha: 0,
    })
      .set('.line-1 .char, .large-text .char', {
        y: '100%',
      })
      .set('.desc > div', { y: '100%', autoAlpha: 0 })
      .set('.text-container a', { y: '100%', autoAlpha: 0 })
      .set(rotatorTextRef.current, {
        autoAlpha: 0,
      })
      .to('.text-container', {
        autoAlpha: 1,
      })
      .staggerTo(
        '.line-1 .char, .large-text .char',
        timelineSettings.charsDuration,
        {
          ease: 'Power3.easeOut',
          y: '0%',
        },
        timelineSettings.staggerValue,
      )
      .to(rotatorTextRef.current, { autoAlpha: 1 })
      .to('.desc > div', {
        ease: 'Power3.easeOut',
        y: '0%',
        autoAlpha: 1,
      })
      .to('.text-container a', {
        ease: 'Power3.easeOut',
        y: '0%',
        autoAlpha: 1,
      });
  });

  return (
    <div className="Hero">
      <div className="video-text">
        <div className="text-container">
          <ANewWayText className="line-1" data-splitting>
            a new way to
          </ANewWayText>
          <div className="large-text">
            <SendYourText data-splitting>send your</SendYourText>
            <div ref={rotatorTextRef}>
              {!mobile && (
                <TextRotator
                  className="rotator"
                  content={rotatedText}
                  time={4000}
                  startDelay={1000}
                />
              )}
            </div>
          </div>
          {mobile && (
            <TextRotator
              className="rotator"
              content={rotatedText}
              time={4000}
              startDelay={1000}
            />
          )}
          <Description className="desc">
            <div>
              Delivering inspirational and uplifting messages of positivity.
            </div>
            <div>
              Handwritten on beautiful, sustainably-sourced, vintage postcards.
            </div>
            <div>For you or yours in kindness.</div>
          </Description>

          <a href="product">
            <CtaButton>send</CtaButton>
          </a>
        </div>
        <video
          ref={videoRef}
          muted
          src={clVideo.node.secure_url}
          autoPlay
          loop
          playsInline
        />
      </div>
      <SocialIcons>
        <a href="https://twitter.com/kindpostco" aria-label="Twitter">
          <StyledTwitterLogo />
        </a>
        <a href="https://www.instagram.com/kindpostco" aria-label="Instagram">
          <StyledInstaLogo />
        </a>
      </SocialIcons>
    </div>
  );
};

export default Hero;

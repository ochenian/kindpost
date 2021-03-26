import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import ButtonLink from './ButtonLink';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import gsap, { ScrollTrigger } from 'gsap';

const Background = styled.div`
  background-color: #f2ebe5;
  padding: 6em 8em;
  font-size: 1.5em;
  font-family: 'orpheuspro';
  text-align: center;

  @media (max-width: 650px) {
    padding: 1.5em 2em;
  }
`;

const Quote = styled.p`
  margin-bottom: 1em;
`;

const Signature = styled.div`
  font-family: 'Les Mores';
  font-size: 3em;
`;

const SignatureTitle = styled.div`
  font-size: 0.75em;
`;

const StoryLink = styled.div`
  font-size: 0.75em;
  cursor: pointer;
  color: rgb(40, 40, 40);
  font-weight: bold;
`;

const StyledButtonLink = styled(ButtonLink)`
  width: fit-content;
  margin: 0 auto;
  margin-top: 3em;
`;

const QuoteBlock = () => {
  useEffect(() => {
    // Splitting({ by: 'lines' });

    const timelineSettings = {
      staggerValue: 0.014,
      charsDuration: 0.5,
    };

    // gsap.set('.line', {
    //   y: '100%',
    //   autoAlpha: 0,
    // });

    const tl = gsap.timeline();

    // tl.staggerTo(
    //   '.line',
    //   timelineSettings.charsDuration,
    //   {
    //     scrollTrigger: {
    //       trigger: '.line',
    //       start: 'top bottom-=200',
    //     },
    //     y: 0,
    //     autoAlpha: 1,
    //   },
    //   timelineSettings.staggerValue,
    // );

    // .staggerTo(
    //     '.line',
    //     timelineSettings.charsDuration,
    //     {
    //       ease: 'Power3.easeOut',
    //       y: '0%',
    //     },
    //     timelineSettings.staggerValue,
    //     // '-=0.5',
    //   )
    gsap.utils.toArray('.fadeIn').forEach((panel, i) => {
      gsap.from(panel, {
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom-=200',
        },
        autoAlpha: 0,
        translateY: '20%',
      });
    });
  });
  return (
    <Background>
      {/* <div style={{ overflow: 'hidden' }}> */}
      <Quote className="fadeIn">
        “Whether it’s a pick-me-up, inspiration, or a message of empowerment,
        our goal is promoting a sense of hope and building connection through
        the transformative nature of kindness.”
      </Quote>
      {/* </div> */}

      <Signature className="fadeIn">Cate</Signature>
      <SignatureTitle className="fadeIn">Founder / CEO</SignatureTitle>
      <StyledButtonLink color="rgb(40,40,40)">
        <a className="fadeIn" href="/about">
          <StoryLink>Read Our Story</StoryLink>
        </a>
      </StyledButtonLink>
    </Background>
  );
};

export default QuoteBlock;

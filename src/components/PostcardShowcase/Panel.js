import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import RotatingPostcard from './RotatingImage';
import CaStamp from '../../assets/svg/ca_stamp3.svg';
import Writing from '../../assets/svg/pc_writing.svg';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.5em;
  text-align: center;
  color: white;
  position: relative;
  box-sizing: border-box;
  // padding: 10px;
  padding: 0;
  margin: 0;
`;

const PinTarget = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.5em;
  text-align: center;
  color: white;
  position: relative;
  box-sizing: border-box;
  // padding: 10px;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  // height: 1024px;
`;

const TrimContainer = styled.div`
  position: absolute;
  width: 100%;
`;

const StyledRotatingPostcard = styled(RotatingPostcard)`
  padding: 0 !important;
`;

const StyledStamp = styled(CaStamp)`
  position: absolute;
  top: -2%;
  left: ${props => (props.index % 2 === 0 ? `-2%` : `28.5%`)};
  width: 73%;
  fill: #fff;
  opacity: 0.6;

  & .cls-1 {
    fill: none;
  }
`;

const WritingContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  transform: rotate(-2deg);
  width: 33%;
`;

const StyledWriting = styled(Writing)`
  // position: absolute;
  // top: 5%;
  // left: 5%;
  // transform: rotate(-2deg);
  // width: 33%;
  fill: #fff;
  // opacity: 0.6;

  & .cls-1 {
    fill: none;
  }
`;

const ShopNowBtn = styled.a`
  padding: 24px 72px;
  font-size: 1.25rem;
  background: transparent;
  border-color: #d4004c;
  color: #d4004c;
  cursor: pointer;
  transition: 0.5s all ease-out;
  border: 1px solid #d4004c;

  :hover {
    color: #fff;
    background: linear-gradient(180deg, #d4004c 0%, #f40075 100%);
  }
`;

const BgImg = styled(Img)`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  opacity: 0.6;
`;

const Panel = ({ imgFront, imgBack, imgReveal, index }) => {
  const orangeRef = useRef(null);
  const postcardRef = useRef(null);
  const imageCoverRef = useRef(null);
  const postcardContainerRef = useRef(null);
  const writingRef = useRef(null);

  const data = useStaticQuery(graphql`
    query kpStampQuery {
      kpStampImg: file(relativePath: { eq: "pc_stamp_white_lines.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  useEffect(() => {
    const pcTl = gsap.timeline({
      scrollTrigger: {
        trigger: orangeRef.current,
        // scroller: '.smooth-scroll',
        scrub: 1,
        pin: true,
        start: 'bottom bottom',
        end: '+=150%',
      },
    });

    pcTl
      .from(postcardRef.current, {
        autoAlpha: 0,
        yPercent: 50,
        // top: '50%',
      })
      // .from(writingRef.current, {
      //   autoAlpha: 0,
      //   y: '50%',
      // })
      .to(imageCoverRef.current, {
        translateY: '105%',
      })
      .to(postcardContainerRef.current, {
        rotateY: '-180deg',
        ease: 'back',
      });
  });
  return (
    <Wrapper ref={orangeRef}>
      {/* <PinTarget ref={orangeRef}> */}
      {/* <WritingContainer ref={writingRef}>
        <StyledWriting />
      </WritingContainer> */}
      <BgImg
        style={{ position: 'absolute' }}
        fluid={data.kpStampImg.childImageSharp.fluid}
      />
      <TrimContainer ref={postcardRef} className="postcard">
        {/* <StyledStamp
          index={index}
          style={{
            transform: `rotate(${index % 2 === 0 ? `25deg` : `-25deg`})`,
          }}
        /> */}
        <StyledRotatingPostcard
          imageCoverRef={imageCoverRef}
          postcardContainerRef={postcardContainerRef}
          index="Congratulations"
          imgFront={imgFront}
          imgBack={imgBack}
          imgReveal={imgReveal}
        />
        <ShopNowBtn href="/product">Shop</ShopNowBtn>
      </TrimContainer>

      {/* </PinTarget> */}
    </Wrapper>
  );
};

export default Panel;

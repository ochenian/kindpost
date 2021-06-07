import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Circle from '../assets/svg/circle.svg';
import { useMediaQuery } from '../hooks/useMediaQuery';
import SectionHeader from '../components/SectionHeader';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 96px;
`;
const CopyWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.mobile ? 'column;' : 'row-reverse;')}
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1024px) {
    &:nth-of-type(2) {
      flex-direction: column-reverse;
    }
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex: 1 1 50%;
  max-width: 600px;

  @media (max-width: 1024px) {
    width: 50%;
    margin-bottom: 1rem;
  }
`;

const YouMatterImg = styled(Img)`
  width: 100%;
  max-width: 500px;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'futura-pt';
  margin: 0 auto;
  max-width: 600px;
  margin-right: 64px;

  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    margin: 2rem 0 0 0;
    padding-left: 0;
    text-align: center;
  }
`;
const Text = styled.div`
  max-width: 50ch;
  font-family: 'futura-pt';
  margin: 1em 0 2em 0;
  @media (max-width: 1024px) {
    width: 65vw;
  }
`;

const HeadText = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #282828;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const ShopNowBtn = styled.a`
  padding: 12px 32px;
  background: transparent;
  border-color: #d4004c;
  color: #d4004c;
  cursor: pointer;
  transition: 0.5s all ease-out;
  border: 2px solid #d4004c;
  width: fit-content;
  text-transform: uppercase;
  font-family: 'tk-futura-pt-n7';

  :hover {
    color: #fff;
    background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
    border: 2px solid transparent;
  }
`;

const YouMatter = () => {
  const mobile = useMediaQuery('(max-width: 1024px)');

  const data = useStaticQuery(graphql`
    query YouMatterCard {
      youMatterImg: file(relativePath: { eq: "Encouragement.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fancyYouMatterImg: file(relativePath: { eq: "Bicycling.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const copyWrapperRef = useRef();

  useEffect(() => {
    if (!mobile) {
      if (typeof window !== `undefined`) {
        gsap.config({
          nullTargetWarn: false,
        });
        gsap.registerPlugin(ScrollTrigger);
        gsap.core.globals('ScrollTrigger', ScrollTrigger);
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.blurb-img',
          start: 'center bottom',
        },
      });
      tl.from('.blurb-img', {
        autoAlpha: 0,
        translateY: '20%',
      }).from('.blurb-text', {
        autoAlpha: 0,
        translateY: '20%',
      });
    }
  });

  return (
    <Wrapper>
      <SectionHeader title="a postcard-sized hug" />
      <CopyWrapper mobile={mobile} ref={copyWrapperRef}>
        <ImgContainer className="blurb-img">
          <YouMatterImg fluid={data.youMatterImg.childImageSharp.fluid} />
        </ImgContainer>

        {/* <YouMatterImg fluid={data.fancyYouMatterImg.childImageSharp.fluid} /> */}

        <TextBlock className="blurb-text">
          <HeadText>A Sharing of Support</HeadText>
          <Text>
            Whether you want to brighten someone's day, or just need a
            pick-me-up. One kindpost can make all the difference. Let's all
            support one another.
          </Text>
          <ShopNowBtn href="/shop">Shop</ShopNowBtn>
        </TextBlock>
      </CopyWrapper>
    </Wrapper>
  );
};

export default YouMatter;

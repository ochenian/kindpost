import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Circle from '../assets/svg/circle.svg';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fdfbf5;
  padding: 8em 0;
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
  position: relative;
  max-width: 600px;
  top: 16px;

  @media (max-width: 1024px) {
    width: 50%;
    margin-bottom: 1rem;
  }
`;
const ImgBackground = styled.div`
  position: absolute;
  width: 75%;
  height: 75%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: pink;
`;

const StyledCircle = styled(Circle)`
  position: absolute;
  width: 100%;
  height: 150%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  fill: pink;
`;

const YouMatterImg = styled(Img)`
  width: 100%;
  max-width: 500px;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'proxima-nova';
  margin: 0 auto;
  max-width: 600px;
  padding-left: 32px;

  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    margin: 2rem 0 0 0;
    padding-left: 0;
    text-align: center;
  }
`;
const Text = styled.div`
  width: 40ch;
  font-family: 'skolar latin';
  // margin-bottom: 0.5rem;
  margin: 1em 0 2em 0;
  @media (max-width: 1024px) {
    width: 65vw;
  }
`;

const HeadText = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #282828;
  text-transform: uppercase;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Link = styled.a`
  display: flex;
    margin-top: 1rem;
    letter-spacing: 1px;
    font-size: 1rem;
    // text-transform: uppercase;
}
`;

const ShopNowBtn = styled.a`
  padding: 12px 32px;
  // font-size: 1.25rem;
  background: transparent;
  border-color: #d4004c;
  color: #d4004c;
  cursor: pointer;
  transition: 0.5s all ease-out;
  border: 1px solid #d4004c;
  width: fit-content;
  text-transform: uppercase;

  :hover {
    color: #fff;
    // background: linear-gradient(180deg, #d4004c 0%, #f40075 100%);
    background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
    border: 1px solid transparent;
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
      fancyYouMatterImg: file(
        relativePath: { eq: "postcards_envelope_mirror_hi.png" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardCutout: file(relativePath: { eq: "postcard_blob_cutout.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardFront: file(
        relativePath: { eq: "postcard_front_off_white.png" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardBack: file(relativePath: { eq: "postcard_back_off_white.png" }) {
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

  const youDeserveImgRef = useRef();
  const youDeserveTextRef = useRef();
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
      <CopyWrapper
        mobile={mobile}
        ref={copyWrapperRef}
        style={{ marginBottom: '8em' }}
      >
        <ImgContainer className="blurb-img">
          <YouMatterImg fluid={data.postcardFront.childImageSharp.fluid} />
        </ImgContainer>

        <TextBlock className="blurb-text">
          <HeadText>Vintage</HeadText>
          <HeadText>Postcards</HeadText>
          <Text>
            Each kindpost starts with a selection from our curated collection of
            beautiful linen + chrome vintage postcards.
          </Text>
          {/* <div style={{ fontWeight: 'bold', margin: '1rem 0' }}>
            We&apos;ve got you.
          </div> */}
          <ShopNowBtn href="/shop">Shop</ShopNowBtn>
        </TextBlock>
      </CopyWrapper>
      <CopyWrapper
        mobile={mobile}
        style={{
          paddingLeft: 0,
        }}
      >
        <TextBlock
          className="blurb-text"
          style={{ right: 0, zIndex: 10, width: '40%' }}
        >
          <HeadText>Positively</HeadText>
          <HeadText>Handwritten</HeadText>
          <Text>
            All kindposts include a message of positivity uniquely created +
            hand-lettered by our team.
          </Text>
          {/* <div style={{ fontWeight: 'bold', margin: '1rem 0' }}>
            We&apos;ve got you.
          </div> */}
          <ShopNowBtn href="/shop">Shop</ShopNowBtn>
        </TextBlock>

        <ImgContainer className="blurb-img">
          <YouMatterImg fluid={data.postcardBack.childImageSharp.fluid} />
        </ImgContainer>
      </CopyWrapper>
    </Wrapper>
  );
};

export default YouMatter;

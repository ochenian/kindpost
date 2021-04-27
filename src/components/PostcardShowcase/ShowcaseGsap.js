import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RotatingPostcard from './RotatingImage';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Container = styled.div`
  font-family: 'proxima-nova';

  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  width: fit-content;
  margin-top: auto;
  margin-bottom: 3em;
  position: relative;
  z-index: 10;
  box-shadow: 10px 10px 14px 1px rgb(0 0 0 / 20%);
  text-transform: uppercase;

  :hover {
    color: #fff;
    background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
    border: 1px solid transparent;
  }
`;

const StyledRotatingPostcard = styled(RotatingPostcard)`
  padding: 0 !important;
`;

const TrimContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Showcase = () => {
  const mobile = useMediaQuery('(max-width: 1215px)');
  const data = useStaticQuery(graphql`
    query Postcards3Query {
      postcardOrangesImg: file(relativePath: { eq: "Oranges.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardOrangesReveal: file(
        relativePath: { eq: "congrats_reveal_shadow.png" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardCongratulationsImg: file(
        relativePath: { eq: "Congratulations.jpg" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardTwilightImg: file(relativePath: { eq: "Twilight.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardLoveImg: file(relativePath: { eq: "Love.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardLoveReveal: file(relativePath: { eq: "love_reveal_shadow.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardRedwoodsImg: file(relativePath: { eq: "Redwoods.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardEncouragementImg: file(
        relativePath: { eq: "Encouragement.jpg" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardEncouragementReveal: file(
        relativePath: { eq: "encourage_reveal_shadow.png" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardWavesImg: file(relativePath: { eq: "Waves.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      birthdayReveal: file(relativePath: { eq: "birthday_reveal_shadow.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardBirthdayImg: file(
        relativePath: { eq: "Birthday-no-border.jpg" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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

  const containerRef = useRef();

  const postcardRef = useRef(null);
  const imageCoverRef = useRef(null);
  const postcardContainerRef = useRef(null);

  const lovePostcardRef = useRef(null);
  const loveImageCoverRef = useRef(null);
  const lovePostcardContainerRef = useRef(null);

  const encouragePostcardRef = useRef(null);
  const encourageImageCoverRef = useRef(null);
  const encouragePostcardContainerRef = useRef(null);

  const birthdayPostcardRef = useRef(null);
  const birthdayImageCoverRef = useRef(null);
  const birthdayPostcardContainerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.config({
        nullTargetWarn: false,
      });
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals('ScrollTrigger', ScrollTrigger);
    }
  });

  useEffect(() => {
    const postcards = gsap.utils.toArray('.postcard');
    postcards.forEach(card => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: card.querySelector('.postcardContainer'),
            start: 'top center',
            end: 'top top',
            scrub: 1,
          },
        })
        .to(card.querySelector('.imageCover'), {
          translateY: '105%',
        })
        .to(
          card.querySelector('.postcardContainer'),
          {
            rotateY: -180,
            ease: 'back',
          },
          '>',
        );
    });
  });

  return (
    <Container ref={containerRef}>
      <TrimContainer ref={postcardRef} className="postcard">
        <StyledRotatingPostcard
          imageCoverRef={imageCoverRef}
          postcardContainerRef={postcardContainerRef}
          index="Congratulations"
          imgFront={data.postcardOrangesImg.childImageSharp.fluid}
          imgBack={data.postcardCongratulationsImg.childImageSharp.fluid}
          imgReveal={data.postcardOrangesReveal.childImageSharp.fluid}
        />
      </TrimContainer>
      <TrimContainer ref={lovePostcardRef} className="postcard">
        <StyledRotatingPostcard
          imageCoverRef={loveImageCoverRef}
          postcardContainerRef={lovePostcardContainerRef}
          imgFront={data.postcardTwilightImg.childImageSharp.fluid}
          imgBack={data.postcardLoveImg.childImageSharp.fluid}
          imgReveal={data.postcardLoveReveal.childImageSharp.fluid}
        />
      </TrimContainer>
      <TrimContainer ref={encouragePostcardRef} className="postcard">
        <StyledRotatingPostcard
          imageCoverRef={encourageImageCoverRef}
          postcardContainerRef={encouragePostcardContainerRef}
          imgFront={data.postcardRedwoodsImg.childImageSharp.fluid}
          imgBack={data.postcardEncouragementImg.childImageSharp.fluid}
          imgReveal={data.postcardEncouragementReveal.childImageSharp.fluid}
        />
      </TrimContainer>
      <TrimContainer ref={birthdayPostcardRef} className="postcard">
        <StyledRotatingPostcard
          imageCoverRef={birthdayImageCoverRef}
          postcardContainerRef={birthdayPostcardContainerRef}
          imgFront={data.postcardWavesImg.childImageSharp.fluid}
          imgBack={data.postcardBirthdayImg.childImageSharp.fluid}
          imgReveal={data.birthdayReveal.childImageSharp.fluid}
        />
      </TrimContainer>

      <ShopNowBtn href="/shop">Shop</ShopNowBtn>
    </Container>
  );
};

export default Showcase;

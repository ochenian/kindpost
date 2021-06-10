import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RotatingPostcard from './RotatingImage';
import CircularLogo from '../../assets/svg/kp_circular.svg';
import ThumbnailLogo from '../../assets/svg/KP_Thumbnail_black-pink.svg';

const Container = styled.div`
  font-family: 'futura-pt';

  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #d4004c12;
  width: 100%;
  margin: 0 auto;
`;

const ShopNowBtn = styled.a`
  padding: 24px 72px;
  font-size: 1.25rem;
  background: transparent;
  border-color: #d4004c;
  color: #d4004c;
  cursor: pointer;
  transition: 0.5s all ease-out;
  border: 2px solid #d4004c;
  width: fit-content;
  margin-top: auto;
  margin-bottom: 3em;
  position: relative;
  z-index: 10;
  // box-shadow: 10px 10px 14px 1px rgb(0 0 0 / 20%);
  text-transform: uppercase;
  font-family: 'tk-futura-pt-n7';

  :hover {
    color: #fff;
    background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
    border: 2px solid transparent;
  }
`;

const StyledRotatingPostcard = styled(RotatingPostcard)`
  padding: 0 !important;
`;

const TrimContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  position: absolute;
  z-index: 100;
`;

const CardWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledCircularLogo = styled(CircularLogo)`
  position: absolute;
  top: 48px;
  right: 48px;
  width: 10%;

  text {
    fill: #000;
  }

  @media (max-width: 800px) {
    width: 20%;
    top: 32px;
    right: 32px;
  }

  @media (max-width: 500px) {
    width: 40%;
    left: 50%;
    transform: translateX(-50%) !important;
  }
`;

const StyledThumbnailLogo = styled(ThumbnailLogo)`
  position: absolute;
  top: 48px;
  left: 48px;
  width: 5%;

  @media (max-width: 800px) {
    width: 10%;
    top: 32px;
    left: 32px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 3em;
  width: 100%;
}
`;

const Title = styled.h1`
  font-size: 6rem;
  font-family: 'Les Mores';
  margin: 0 auto;
  position: relative;

  &:after {
    content: '';
    height: 5px;
    width: 50%;
    background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
    display: block;
    margin: 0 auto;
    border-radius: 12px;
  }

  @media (max-width: 900px) {
    font-size: 4rem;
  }
`;

const Showcase = () => {
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
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=400%',
        pin: true,
        scrub: true,
      },
    });

    postcards.forEach((card, i) => {
      if (i !== 0) {
        gsap.set(card, {
          translateY: `100vh`,
        });

        timeline.add(
          gsap.to(card, {
            translateY: '0%',
          }),
        );
      }

      timeline.add(
        gsap.to(card.querySelector('.imageCover'), {
          translateY: '105%',
        }),
      );
      timeline.add(
        gsap.to(
          card.querySelector('.postcardContainer'),
          {
            rotateY: -180,
            ease: 'back',
          },
          '>',
        ),
      );

      if (i !== 3) {
        timeline.add(
          gsap.to(card, {
            translateY: '-105vh',
          }),
        );
      }
    });
  });

  useEffect(() => {
    gsap.to('.circular', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=400%',
        scrub: true,
      },
      rotateZ: 360,
    });
  });

  return (
    <>
      <Container ref={containerRef}>
        {/* <StyledThumbnailLogo /> */}
        <Header>
          <Title>a few examples</Title>
        </Header>
        <CardWrapper className="card-wrapper">
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
        </CardWrapper>
        {/* <StyledCircularLogo className="circular" /> */}
      </Container>
    </>
  );
};

export default Showcase;

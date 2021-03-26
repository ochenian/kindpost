import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import Panel from './Panel';
import RotatingPostcard from './RotatingImage';
import KPThumb from '../../assets/svg/KP_Thumbnail_white.svg';

const Container = styled.div`
  // background-color: #fdfaee;
  font-family: 'orpheuspro';
  // background: linear-gradient(
  //   180deg,
  //   hsl(279deg 66% 90%),
  //   hsl(210deg 62% 90%),
  //   hsl(146deg 62% 90%),
  //   hsl(60deg 62% 90%)
  // );

  position: relative;
  overflow: hidden;
  padding: 3em 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // &:after {
  //   content: '';
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 25vw;
  //   z-index: 1;
  //   background-image: linear-gradient(
  //     to bottom,
  //     #ededdd,
  //     #faefe6,
  //     #fef3f2,
  //     #fef9fc,
  //     #ffffff
  //   );

  //   pointer-events: none;
  // }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 100%;
`;

const StyledKpThumb = styled(KPThumb)``;

const BgImg = styled(Img)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  opacity: 0.6;
  max-width: 600px;
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

  :hover {
    color: #fff;
    background: linear-gradient(180deg, #d4004c 0%, #f40075 100%);
  }
`;

const StyledRotatingPostcard = styled(RotatingPostcard)`
  padding: 0 !important;
`;

const TrimContainer = styled.div`
  position: absolute;
  width: 100%;
  // opacity: 0;
`;

const Showcase = () => {
  // useEffect(() => {
  //   if (typeof window !== `undefined`) {
  //     gsap.registerPlugin(ScrollTrigger);
  //     gsap.core.globals('ScrollTrigger', ScrollTrigger);
  //   }
  // });
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
  const logoRef = useRef();

  gsap.set(postcardRef.current, { autoAlpha: 0 });
  gsap.set(lovePostcardRef.current, { autoAlpha: 0 });
  gsap.set(encouragePostcardRef.current, { autoAlpha: 0 });
  gsap.set(birthdayPostcardRef.current, { autoAlpha: 0 });
  // gsap.set(logoRef.current, { autoAlpha: 0, fill: '#000' });
  gsap.set(containerRef.current, {
    backgroundColor: 'rgb(242, 235, 229)',
    autoAlpha: 1,
  });

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals('ScrollTrigger', ScrollTrigger);
    }
    const pcTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
        pin: true,
        start: 'top top',
        end: '+=1600%',
        // markers: true,
        anticipatePin: 1,
      },
    });

    gsap.set(containerRef.current, { autoAlpha: 0 });

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
        start: 'top bottom',
        // markers: true,
      },
      backgroundColor: '#e8ddee',
      autoAlpha: 1,
      // duration: 1,
      // markers: true,
    });

    // gsap.to('.logo', {
    //   scrollTrigger: {
    //     trigger: containerRef.current,
    //     start: 'top center',
    //     // markers: true,
    //   },
    //   // autoAlpha: 1,
    //   fill: '#000',
    //   stroke: '#000',
    //   duration: 1,
    //   // markers: true,
    // });

    pcTl
      // .to(containerRef.current, {
      //   backgroundColor: '#e8ddee',
      // })
      // .to(
      //   '.logo',
      //   {
      //     fill: '#fff',
      //     stroke: '#fff',
      //     duration: 1,
      //   },
      //   '-=1.5',
      // )
      .from(postcardRef.current, {
        autoAlpha: 0,
        // yPercent: 50,
        xPercent: 50,
        // duration: 1,
      })
      .to(imageCoverRef.current, {
        translateY: '105%',
      })
      .to(postcardContainerRef.current, {
        rotateY: '-180deg',
        ease: 'back',
      })
      .to(postcardRef.current, {
        autoAlpha: 0,
        xPercent: -50,
      })
      .to(containerRef.current, { backgroundColor: '#dde5ed' })
      .from(lovePostcardRef.current, {
        autoAlpha: 0,
        xPercent: 50,
      })
      .to(loveImageCoverRef.current, {
        translateY: '105%',
      })
      .to(lovePostcardContainerRef.current, {
        rotateY: '-180deg',
        ease: 'back',
      })
      .to(lovePostcardRef.current, {
        autoAlpha: 0,
        xPercent: -50,
      })
      .to(containerRef.current, { backgroundColor: '#ddede4' })
      .from(encouragePostcardRef.current, {
        autoAlpha: 0,
        xPercent: 50,
      })
      .to(encourageImageCoverRef.current, {
        translateY: '105%',
      })
      .to(encouragePostcardContainerRef.current, {
        rotateY: '-180deg',
        ease: 'back',
      })
      .to(encouragePostcardRef.current, {
        autoAlpha: 0,
        xPercent: -50,
      })
      .to(containerRef.current, { backgroundColor: '#ededdd' })
      .from(birthdayPostcardRef.current, {
        autoAlpha: 0,
        xPercent: 50,
      })
      .to(birthdayImageCoverRef.current, {
        translateY: '105%',
      })
      .to(birthdayPostcardContainerRef.current, {
        rotateY: '-180deg',
        ease: 'back',
      })
      .to(lovePostcardRef.current, {
        autoAlpha: 0,
        xPercent: -50,
      });
  });

  function goToSection(i, anim) {
    gsap.to(window, {
      // eslint-disable-next-line no-undef
      scrollTo: { y: i * window.innerHeight, autoKill: false },
      duration: 1,
    });

    if (anim) {
      anim.restart();
    }
  }

  gsap.utils.toArray('.postcard').forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      onEnter: () => goToSection(i),
    });

    ScrollTrigger.create({
      trigger: panel,
      start: 'bottom bottom',
      onEnterBack: () => goToSection(i),
    });
  });

  return (
    <Container ref={containerRef} style={{ backgroundColor: '#e8ddee' }}>
      <BgImg
        style={{ position: 'absolute' }}
        fluid={data.kpStampImg.childImageSharp.fluid}
      />
      {/* <LogoContainer ref={logoRef}>
        <StyledKpThumb />
      </LogoContainer> */}

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
          index="Love"
          imgFront={data.postcardTwilightImg.childImageSharp.fluid}
          imgBack={data.postcardLoveImg.childImageSharp.fluid}
          imgReveal={data.postcardLoveReveal.childImageSharp.fluid}
        />
      </TrimContainer>
      <TrimContainer ref={encouragePostcardRef} className="postcard">
        <StyledRotatingPostcard
          imageCoverRef={encourageImageCoverRef}
          postcardContainerRef={encouragePostcardContainerRef}
          index="Love"
          imgFront={data.postcardRedwoodsImg.childImageSharp.fluid}
          imgBack={data.postcardEncouragementImg.childImageSharp.fluid}
          imgReveal={data.postcardEncouragementReveal.childImageSharp.fluid}
        />
      </TrimContainer>
      <TrimContainer ref={birthdayPostcardRef} className="postcard">
        <StyledRotatingPostcard
          imageCoverRef={birthdayImageCoverRef}
          postcardContainerRef={birthdayPostcardContainerRef}
          index="Love"
          imgFront={data.postcardWavesImg.childImageSharp.fluid}
          imgBack={data.postcardBirthdayImg.childImageSharp.fluid}
          imgReveal={data.birthdayReveal.childImageSharp.fluid}
        />
      </TrimContainer>
      <ShopNowBtn href="/product">Shop</ShopNowBtn>
      {/* <StyledKpThumb /> */}
      {/* <div ref={panel1Ref}>
        <Panel
          index="0"
          imgFront={data.postcardOrangesImg.childImageSharp.fluid}
          imgBack={data.postcardCongratulationsImg.childImageSharp.fluid}
          imgReveal={data.postcardOrangesReveal.childImageSharp.fluid}
        />
      </div>
      <div ref={panel2Ref}>
        <Panel
          // ref={panel2Ref}
          index="1"
          imgFront={data.postcardTwilightImg.childImageSharp.fluid}
          imgBack={data.postcardLoveImg.childImageSharp.fluid}
          imgReveal={data.postcardLoveReveal.childImageSharp.fluid}
        />
      </div>

      <div ref={panel3Ref}>
        <Panel
          // ref={panel3Ref}
          index="2"
          imgFront={data.postcardRedwoodsImg.childImageSharp.fluid}
          imgBack={data.postcardEncouragementImg.childImageSharp.fluid}
          imgReveal={data.postcardEncouragementReveal.childImageSharp.fluid}
        />
      </div>

      <div ref={panel4Ref}>
        <Panel
          // ref={panel4Ref}
          index="3"
          imgFront={data.postcardWavesImg.childImageSharp.fluid}
          imgBack={data.postcardBirthdayImg.childImageSharp.fluid}
          imgReveal={data.birthdayReveal.childImageSharp.fluid}
        />
      </div> */}
    </Container>
  );
};

export default Showcase;

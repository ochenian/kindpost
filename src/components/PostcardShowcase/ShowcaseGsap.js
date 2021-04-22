import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RotatingPostcard from './RotatingImage';

const Container = styled.div`
  font-family: 'proxima-nova';

  position: relative;
  overflow: hidden;
  padding: 3em 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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
  position: absolute;
  width: 100%;
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

  gsap.set(postcardRef.current, { autoAlpha: 0 });
  gsap.set(lovePostcardRef.current, { autoAlpha: 0 });
  gsap.set(encouragePostcardRef.current, { autoAlpha: 0 });
  gsap.set(birthdayPostcardRef.current, { autoAlpha: 0 });
  gsap.set(containerRef.current, {
    backgroundColor: 'rgb(242, 235, 229)',
    autoAlpha: 1,
  });

  // const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.config({
        nullTargetWarn: false,
      });
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
        // onUpdate: self => console.log(self.progress),
      },
    });

    pcTl
      .from(postcardRef.current, {
        xPercent: 100,
      })
      .to(imageCoverRef.current, {
        translateY: '105%',
      })
      .to(postcardContainerRef.current, {
        rotateY: '-180deg',
        ease: 'back',
      })
      .to(postcardRef.current, {
        xPercent: -100,
      })
      .to(containerRef.current, {
        background:
          'linear-gradient(to right top, #dde5ed, #dce4ed, #dce2ed, #dce1ed, #dddfed)',
      })
      .from(lovePostcardRef.current, {
        xPercent: 100,
      })
      .to(loveImageCoverRef.current, {
        translateY: '105%',
      })
      .to(lovePostcardContainerRef.current, {
        rotateY: '-180deg',
        ease: 'back',
      })
      .to(lovePostcardRef.current, {
        xPercent: -100,
      })
      .to(containerRef.current, {
        background:
          'linear-gradient(to right top, #ededdd, #edebdd, #eeeadd, #ede8dd, #ede7dd)',
      })
      .from(encouragePostcardRef.current, {
        xPercent: 100,
      })
      .to(encourageImageCoverRef.current, {
        translateY: '105%',
      })
      .to(encouragePostcardContainerRef.current, {
        rotateY: '-180deg',
        ease: 'back',
      })
      .to(encouragePostcardRef.current, {
        xPercent: -100,
      })
      .to(containerRef.current, {
        background:
          'linear-gradient(to right top, #ddede4, #ddede3, #ddede1, #ddede0, #ddedde)',
      })
      .from(birthdayPostcardRef.current, {
        xPercent: 100,
      })
      .to(birthdayImageCoverRef.current, {
        translateY: '105%',
      })
      .to(birthdayPostcardContainerRef.current, {
        rotateY: '-180deg',
        ease: 'back',
      })
      .to(lovePostcardRef.current, {
        xPercent: -100,
      });
  });

  // function goToSection(i, anim) {
  //   gsap.to(window, {
  //     // eslint-disable-next-line no-undef
  //     scrollTo: { y: i * window.innerHeight, autoKill: false },
  //     duration: 1,
  //   });

  //   if (anim) {
  //     anim.restart();
  //   }
  // }

  // if (typeof window !== 'undefined') {
  //   gsap.utils.toArray('.postcard').forEach((panel, i) => {
  //     ScrollTrigger.create({
  //       trigger: panel,
  //       onEnter: () => goToSection(i),
  //     });

  //     ScrollTrigger.create({
  //       trigger: panel,
  //       start: 'bottom bottom',
  //       onEnterBack: () => goToSection(i),
  //     });
  //   });
  // }

  return (
    <Container
      ref={containerRef}
      style={{
        background:
          'linear-gradient(to right top, #e8ddee, #ebdcea, #eddce6, #eedde3, #eedde0)',
      }}
    >
      <BgImg
        style={{ position: 'absolute' }}
        fluid={data.kpStampImg.childImageSharp.fluid}
      />

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
      <ShopNowBtn href="/shop">Shop</ShopNowBtn>
    </Container>
  );
};

export default Showcase;

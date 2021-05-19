import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CtaButton from './shared/Button';

const SectionWrapper = styled.section`
  width: calc(100% - 32px);
  max-width: 1800px;
  padding: 1rem;
  margin: 1.5rem auto;
  border-radius: 16px;

  background: linear-gradient(180deg, #d4004c2e, #ffffff, #d4004c2e);
  position: relative;
  overflow: hidden;
`;

const TextBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 1rem;
  width: 100%;
  color: #172345;
  position: relative;
  z-index: 10;
`;

const HeaderText = styled.h1`
  font-size: 5rem;
  width: 100%;
  text-align: center;
  font-family: 'proxima-nova';
  font-weight: 600;
  line-height: 1.25;

  @media (max-width: 550px) {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 360px) {
    font-size: 2rem;
  }

  @media (max-width: 250px) {
    font-size: 1.5rem;
  }
`;

const SubText = styled.p`
  font-size: 2rem;
  width: 100%;
  text-align: center;

  margin-bottom: 2rem;

  @media (max-width: 550px) {
    font-size: 1.5rem;
  }

  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

const StyledCtaButton = styled(CtaButton)`
  background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
  border: none;
  letter-spacing: 0;
  border-radius: 16px;

  @media (max-width: 600px) {
    padding: 16px;
  }

  &&:hover {
    background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
    border: none;
  }
`;

const Postcard = styled(Img)`
  width: 20%;
  min-width: 160px;
  max-width: 300px;
  position: absolute !important;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 70vh;

  ${Postcard}:nth-of-type(1) {
    left: 5%;
    bottom: -10%;
  }

  ${Postcard}:nth-of-type(2) {
    right: 20%;
    bottom: -90%;
  }

  ${Postcard}:nth-of-type(3) {
    bottom: -60%;
    left: 15%;
  }

  ${Postcard}:nth-of-type(4) {
    bottom: -30%;
    right: 5%;
  }
`;

const ParallaxSection = () => {
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
    const postcards = gsap.utils.toArray('.parallax-postcard');
    postcards.forEach((postcard, index) => {
      gsap.to(postcard, {
        scrollTrigger: {
          trigger: '#parallax-section',
          start: 'top bottom',
          scrub: true,
        },
        // y: (i, target) => {
        //   return 200 * target.dataset.speed;
        // },
        // ease: 'none',
        yPercent: -1000,
        ease: 'none',
        rotateZ: index % 2 === 0 ? 70 * (index + 1) : -140 * (index + 1),
      });
    });
  });

  const data = useStaticQuery(graphql`
    query Postcards6Query {
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

  return (
    <SectionWrapper id="parallax-section">
      <TextContainer>
        <Postcard
          className="parallax-postcard"
          fluid={data.postcardWavesImg.childImageSharp.fluid}
        />
        <Postcard
          className="parallax-postcard"
          fluid={data.postcardTwilightImg.childImageSharp.fluid}
        />
        <Postcard
          className="parallax-postcard"
          fluid={data.postcardBirthdayImg.childImageSharp.fluid}
        />
        <Postcard
          className="parallax-postcard"
          fluid={data.postcardEncouragementImg.childImageSharp.fluid}
        />
        <TextBlock>
          <HeaderText>Postcards, reimagined</HeaderText>
          <SubText>
            No robots. No printers.{' '}
            <div>Handwritten by humans for kindness.</div>
          </SubText>
          <StyledCtaButton>Get started</StyledCtaButton>
        </TextBlock>
      </TextContainer>
    </SectionWrapper>
  );
};

export default ParallaxSection;

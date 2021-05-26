import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InstaLogo from '../assets/svg/instagram.svg';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;
  height: 75vh;
  background: #fff;
  max-width: 1200px;
  margin: 0 auto;
`;

const Hashtag = styled.div`
  color: #d4004c;
  font-family: 'Averia Serif Libre';
  font-size: 1.5rem;
`;

const StyledInstaLogo = styled(InstaLogo)`
  margin-bottom: 2rem;
  width: 4vw;
  max-width: 50px;
  min-width: 33px;
`;

const MicroInstaLogo = styled(InstaLogo)`
  width: 2vw;
  max-width: 40px;
  min-width: 20px;
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const FollowText = styled.div`
  font-size: 2rem;
  font-family: 'Montserrat';
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: #282828;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const MediaContainer = styled.div`
  position: absolute;
  transition: all 0.25s;

  &:hover {
    filter: brightness(0.5);

    ${MicroInstaLogo} {
      display: block;
    }
  }

  &:first-of-type {
    border-radius: 1rem 0 0 1rem;
    height: 13rem;
    right: 0;
    top: 10rem;
    width: 23rem;

    @media (max-width: 600px) {
          width: 9rem;
    height: 7rem;
    top: 1rem;
}
    }
  }

  &:nth-of-type(2) {
    height: 14rem;
    right: 14rem;
    top: 22.8rem;
    width: 12rem;

    @media (max-width: 600px) {
      width: 6rem;
    height: 7rem;
    right: 4rem;
    top: 12rem;
    }
  }

  &:nth-of-type(3) {
    height: 16rem;
    left: 6rem;
    top: 6rem;
    width: 13rem;
    z-index: 1;

    @media (max-width: 600px) {
      height: 8rem;
    width: 6rem;
    left: 1rem;
    top: 15rem;
    }
  }

  &:nth-of-type(4) {
    height: 13rem;
    left: 1rem;
    top: 24.3rem;
    width: 23rem;

    @media (max-width: 600px) {
          width: 11rem;
    height: 6rem;
    top: 37rem;
    }
  }
`;

const StyledImg = styled(Img).attrs(({ dataSpeed }) => ({
  'data-speed': dataSpeed,
}))`
  border-radius: 1rem;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query InstaPhotos {
      mtnSwitchback: file(
        relativePath: { eq: "mountain_switchback_backlit.jpg" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardAssembly: file(relativePath: { eq: "rocky_beach_on_the_rocks.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardOnRock: file(relativePath: { eq: "harbor_on_the_rocks.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      orangesGarden: file(relativePath: { eq: "oranges_in_the_garden.jpg" }) {
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
    if (typeof window !== `undefined`) {
      gsap.config({
        nullTargetWarn: false,
      });
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals('ScrollTrigger', ScrollTrigger);
    }

    gsap.to('.parallax', {
      scrollTrigger: {
        trigger: '#wrapper',
        start: 'top bottom',
        scrub: true,
      },
      y: (i, target) => {
        return 200 * target.dataset.speed;
      },
      ease: 'none',
    });
  });
  return (
    <Wrapper id="wrapper">
      <MediaContainer data-speed="1.5" className="parallax">
        <a href="https://www.instagram.com/kindpostco" aria-label="Instagram">
          <MicroInstaLogo />
          <StyledImg fluid={data.mtnSwitchback.childImageSharp.fluid} />
        </a>
      </MediaContainer>

      <MediaContainer data-speed="-0.5" className="parallax">
        <a href="https://www.instagram.com/kindpostco" aria-label="Instagram">
          <MicroInstaLogo />
          <StyledImg fluid={data.cardAssembly.childImageSharp.fluid} />
        </a>
      </MediaContainer>

      <MediaContainer data-speed="1" className="parallax">
        <a href="https://www.instagram.com/kindpostco" aria-label="Instagram">
          <MicroInstaLogo />
          <StyledImg fluid={data.cardOnRock.childImageSharp.fluid} />
        </a>
      </MediaContainer>

      <MediaContainer data-speed="-2" className="parallax">
        <a href="https://www.instagram.com/kindpostco" aria-label="Instagram">
          <MicroInstaLogo />
          <StyledImg fluid={data.orangesGarden.childImageSharp.fluid} />
        </a>
      </MediaContainer>

      <a href="https://www.instagram.com/kindpostco" aria-label="Instagram">
        <StyledInstaLogo />
      </a>
      <a href="https://www.instagram.com/kindpostco" aria-label="Instagram">
        <FollowText>
          <div>Follow us on</div>
          <div>Instagram</div>
        </FollowText>
      </a>
      <a href="https://www.instagram.com/kindpostco" aria-label="Instagram">
        <Hashtag>#kindpost</Hashtag>
      </a>
    </Wrapper>
  );
};

export default Instagram;

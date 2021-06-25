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
  background: #fff;
  max-width: 2000px;
  margin: 0 auto;
  padding: 5em 0;
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
  font-family: 'futura-pt';
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: #282828;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const MediaContainer = styled.div`
  transition: all 0.25s;
  width: 100%;
  min-width: 200px;

  &:hover {
    filter: brightness(0.5);

    ${MicroInstaLogo} {
      display: block;
    }
  }
`;

const StyledImg = styled(Img).attrs(({ dataSpeed }) => ({
  'data-speed': dataSpeed,
}))`
  // border-radius: 1rem;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
`;

const PostsWrapper = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  margin-top: 96px;
  position: relative;
  overflow: auto;
`;

const Gradient = styled.span`
  background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query InstaPhotos {
      postcards_falling: file(
        relativePath: { eq: "postcards_falling_alt_4.png" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardAssembly: file(relativePath: { eq: "macaron_encouragement.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardOnRock: file(relativePath: { eq: "2021-05-24 - 5.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      orangesGarden: file(
        relativePath: { eq: "Lilacs and Trees - Cropped.jpg" }
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

  // useEffect(() => {
  //   if (typeof window !== `undefined`) {
  //     gsap.config({
  //       nullTargetWarn: false,
  //     });
  //     gsap.registerPlugin(ScrollTrigger);
  //     gsap.core.globals('ScrollTrigger', ScrollTrigger);
  //   }

  //   gsap.to('.parallax', {
  //     scrollTrigger: {
  //       trigger: '#wrapper',
  //       start: 'top bottom',
  //       scrub: true,
  //     },
  //     y: (i, target) => {
  //       return 200 * target.dataset.speed;
  //     },
  //     ease: 'none',
  //   });
  // });
  return (
    <Wrapper id="wrapper">
      <a href="https://www.instagram.com/kindpostco" aria-label="Instagram">
        <StyledInstaLogo />
      </a>
      <a href="https://www.instagram.com/kindpostco" aria-label="Instagram">
        <FollowText>
          <div>Follow us</div>
          <div>
            <Gradient>@kindpostco</Gradient>
          </div>
        </FollowText>
        <div></div>
      </a>
      <a href="https://www.instagram.com/kindpostco" aria-label="Instagram">
        <Hashtag>#kindpost</Hashtag>
      </a>
      <PostsWrapper>
        <MediaContainer data-speed="1.5" className="parallax">
          <a href="https://www.instagram.com/kindpostco" aria-label="Instagram">
            <MicroInstaLogo />
            <StyledImg fluid={data.orangesGarden.childImageSharp.fluid} />
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
            <StyledImg fluid={data.postcards_falling.childImageSharp.fluid} />
          </a>
        </MediaContainer>
      </PostsWrapper>
    </Wrapper>
  );
};

export default Instagram;

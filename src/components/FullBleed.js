import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Link from 'gatsby-link';
import CtaButton from './shared/Button';

const Container = styled.div`
  width: 100vw;
  position: relative;
  margin: 6em auto;
  // background: radial-gradient(transparent, rgba(0, 0, 0, 0.5) 90%);
`;

const TextContainer = styled.div`
  position: absolute;
  color: #fff;
  z-index: 10;
  font-size: 2em;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  // letter-spacing: 5px;
  // text-transform: lowercase;
  // text-shadow: 0 0 16px rgba(0, 0, 0, 1);
  padding: 0 2rem;
  width: 50%;
  margin-left: 50%;
  font-family: 'Montserrat';
  font-size: 4rem;

  @media (max-width: 600px) {
    font-size: 2rem;
    padding: 0;
  }
`;

const Text = styled.div`
  // margin-bottom: 2rem;
  text-align: center;
  line-height: 1.2;
  margin-top: 32px;

  @media (max-width: 600px) {
    margin-top: 0;
    margin-bottom: 16px;
  }
`;

const GrayscaleImg = styled(Img)`
  // filter: brightness(60%) grayscale(0.5);
  // height: 75vh;
  // position: relative;
  // z-index: -10;
`;

const StyledCtaButton = styled(CtaButton)`
  background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
  border: none;
  letter-spacing: 0;

  @media (max-width: 600px) {
    padding: 16px;
  }

  &&:hover {
    background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
    border: none;
  }
`;

const FullBleed = () => {
  const data = useStaticQuery(graphql`
    query {
      mtnSwitchback: file(
        relativePath: { eq: "mountain_switchback_campsite.jpg" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Container>
      <TextContainer>
        <Text>TREAT YOURSELF</Text>
        <Link to="/shop">
          <StyledCtaButton>SHOP</StyledCtaButton>
        </Link>
      </TextContainer>
      <GrayscaleImg fluid={data.mtnSwitchback.childImageSharp.fluid} />
    </Container>
  );
};

export default FullBleed;

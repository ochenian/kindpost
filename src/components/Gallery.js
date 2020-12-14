import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledImg = styled(Img)`
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 0px 4px rgba(0, 0, 0, 0.12),
    0px 0px 8px rgba(0, 0, 0, 0.12), 0px 0px 16px rgba(0, 0, 0, 0.12),
    0px 0px 32px rgba(0, 0, 0, 0.12);

  width: 100% !important;
  height: auto !important;
  padding-top: 63.3%;
`;
const GalleryText = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  background: rgb(255, 227, 227);
  justify-content: center;
  align-items: center;
  font-size: 2em;
  letter-spacing: 0.1em;
  text-transform: lowercase;
  margin: 6rem 0 6rem 0;

  @media (max-width: 550px) {
    margin: 4rem 0 2rem 0;
  }

  &:last-of-type {
    margin: 4rem 0 8rem 0;

    @media (max-width: 550px) {
      margin: 2rem 0 4rem 0;
    }
  }

  div {
    font-size: 7.5rem;
    font-weight: 900;
    font-family: 'Allura';
    line-height: 1;
    text-shadow: #fff 2px 2px 2px;
    text-align: center;

    @media (max-width: 700px) {
      font-size: 6rem;
    }

    @media (max-width: 550px) {
      font-size: 4.5rem;
    }
  }

  span {
    text-align: center;
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 5px;

    @media (max-width: 700px) {
      font-size: 2rem;
    }

    @media (max-width: 550px) {
      font-size: 1.5rem;
    }
  }
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffe3e3;
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffe3e3;
`;

const Gallery = () => {
  const [state, setState] = useState({
    goToSlide: 0,
  });

  const data = useStaticQuery(graphql`
    query Postcard5Query {
      postcardSampleImg: file(relativePath: { eq: "Sample.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 900) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      postcardOrangesImg: file(relativePath: { eq: "Oranges.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 900) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      postcardDesertImg: file(relativePath: { eq: "Desert.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 900) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const slides = [
    {
      key: 1,
      content: (
        <StyledImg
          className="img-wrapper"
          fixed={data.postcardSampleImg.childImageSharp.fixed}
        />
      ),
    },
    {
      key: 2,
      content: (
        <StyledImg
          className="img-wrapper"
          fixed={data.postcardOrangesImg.childImageSharp.fixed}
        />
      ),
    },
    {
      key: 3,
      content: (
        <StyledImg
          className="img-wrapper"
          fixed={data.postcardDesertImg.childImageSharp.fixed}
        />
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  return (
    <GalleryContainer>
      <GalleryText>
        <div>handwritten</div>
        <span>messages of kindness</span>
      </GalleryText>
      <CarouselContainer
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#ffe3e3',
        }}
      >
        <Carousel slides={slides} goToSlide={state.goToSlide} />
      </CarouselContainer>
      <GalleryText>
        <div>vintage</div>
        <span>linens + chromes</span>
      </GalleryText>
    </GalleryContainer>
  );
};

export default Gallery;

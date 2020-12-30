import React, { useState } from 'react';
import Pager from '../components/Pager';
import Carousel from '../components/Carousel';
import { config } from 'react-spring';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledImg = styled(Img)`
  width: 100%;
`;

const PagerPage = ({}) => {
  // <div className="pp-container">
  //  <Pager />
  // </div>

  const [state, setState] = useState({
    goToSlide: 0,
  });

  const data = useStaticQuery(graphql`
    query Postcard4Query {
      postcardSampleImg: file(relativePath: { eq: "Sample.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
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
    }
  `);

  const slides = [
    {
      key: 1,
      content: (
        <StyledImg fixed={data.postcardSampleImg.childImageSharp.fixed} />
      ),
    },
    {
      key: 2,
      content: (
        <StyledImg fixed={data.postcardSampleImg.childImageSharp.fixed} />
      ),
    },
    {
      key: 3,
      content: (
        <StyledImg fixed={data.postcardSampleImg.childImageSharp.fixed} />
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  return (
    <div style={{ width: '80%', height: '500px', margin: '0 auto' }}>
      <Carousel slides={slides} goToSlide={state.goToSlide} />
    </div>
  );
};

export default PagerPage;

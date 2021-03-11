import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Wrapper = styled.div`
  display: flex;
`;

const InspirationImg = styled(Img)`
  // margin: 20em 0;
  width: 100%;
  flex: 1;
`;
const PostcardsFalling = () => {
  const data = useStaticQuery(graphql`
    query PostcardsFalling {
      postcardsFallingImg: file(
        relativePath: { eq: "postcards_falling_alt_3.png" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <Wrapper>
        <InspirationImg
          fluid={data.postcardsFallingImg.childImageSharp.fluid}
        />
      </Wrapper>
    </>
  );
};

export default PostcardsFalling;

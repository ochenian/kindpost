import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Wrapper = styled.div`
  display: flex;
  height: 75vh;
  // justify-content: center;
  // align-items: center;
`;

const ShopNowButton = styled.button`
  background: #000;
  color: white;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InspirationImg = styled(Img)`
  // margin: 20em 0;
  width: 100%;
  flex: 1;
`;
const PostcardRows = () => {
  const data = useStaticQuery(graphql`
    query PostcardRows {
      postcardRowsImg: file(relativePath: { eq: "postcard_rows_high.png" }) {
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
        {/* <ShopNowButton>Shop Now</ShopNowButton> */}
        <InspirationImg fluid={data.postcardRowsImg.childImageSharp.fluid} />
      </Wrapper>
    </>
  );
};

export default PostcardRows;

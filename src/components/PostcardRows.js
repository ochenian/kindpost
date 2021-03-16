import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Wrapper = styled.div`
  display: flex;
  height: 75vh;
  // justify-content: center;
  // align-items: center;
  position: relative;
`;

const ShopTheCollectionWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: rgba(0, 0, 0, 0.8);
  width: 50vw;
  height: 308px;
  z-index: 10;
  padding: 2em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  width: fit-content;
`;

const Line = styled.div`
  border-top: 1px solid #fff;
  width: 100%;
`;

const ShopHereBtn = styled.a`
  background: black;
  padding: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 1rem;
  width: 75%;
  background: rgb(242, 235, 229);
  color: rgb(35, 34, 33);
  letter-spacing: 3px;
  cursor: pointer;
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
        <ShopTheCollectionWrapper>
          <div
            style={{
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'rgb(243, 235, 229)',
              lineHeight: 1,
            }}
          >
            Shop Our Collection
          </div>
          <Line />
          <ShopHereBtn>Shop Here</ShopHereBtn>
        </ShopTheCollectionWrapper>
        <InspirationImg fluid={data.postcardRowsImg.childImageSharp.fluid} />
      </Wrapper>
    </>
  );
};

export default PostcardRows;

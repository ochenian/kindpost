import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import Circle from '../assets/svg/circle.svg';
import Blob from '../assets/svg/postcard_blob.svg';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  // height: 100vh;
  justify-content: center;

  // @media (max-width: 1024px) {
  //   height: 100%;
  //   margin: 6em;
  // }
`;
const CopyWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.mobile ? 'column;' : 'row;')}
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex: 1 1 50%;
  position: relative;

  @media (max-width: 1024px) {
    width: 50%;
    margin-bottom: 1rem;
  }
`;
const ImgBackground = styled.div`
  position: absolute;
  width: 75%;
  height: 75%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: pink;
`;

const StyledCircle = styled(Circle)`
  position: absolute;
  width: 100%;
  height: 150%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  fill: pink;
`;

const StyledBlob = styled(Blob)`
  position: absolute;
  width: 100%;
  width: 80%;
  // height: 150%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  fill: pink;
`;

const YouMatterImg = styled(Img)`
  // width: 50%;
  width: 100%;
  top: 12px;
  left: 22px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const TextBlock = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  // align-items: center;

  @media (max-width: 1024px) {
    // display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;

    @media (max-width: 1024px) {
      margin-top: 2rem;
    }
  }
`;
const Text = styled.div`
  width: 75%;
  // margin-bottom: 0.5rem;
  @media (max-width: 1024px) {
    width: 65vw;
  }
`;

const HeadText = styled.div`
  font-size: 5rem;
  white-space: nowrap;
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
`;

const Link = styled.a`
  display: flex;
    margin-top: 1rem;
    letter-spacing: 1px;
    font-size: 1rem;
    // text-transform: uppercase;
}
`;

const ShopNowBtn = styled.a`
  padding: 12px 32px;
  // font-size: 1.25rem;
  background: transparent;
  border-color: #d4004c;
  color: #d4004c;
  cursor: pointer;
  transition: 0.5s all ease-out;
  border: 1px solid #d4004c;
  width: fit-content;

  :hover {
    color: #fff;
    background: linear-gradient(180deg, #d4004c 0%, #f40075 100%);
    border-radius: 48px;
  }
`;

const YouMatter = () => {
  const mobile = useMediaQuery('(max-width: 1024px)');

  const data = useStaticQuery(graphql`
    query YouMatterCard {
      youMatterImg: file(relativePath: { eq: "Encouragement.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fancyYouMatterImg: file(
        relativePath: { eq: "postcards_envelope_mirror_hi.png" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardCutout: file(relativePath: { eq: "postcard_blob_cutout.png" }) {
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
    <Wrapper>
      <CopyWrapper mobile={mobile}>
        <ImgContainer>
          {/* <StyledCircle /> */}
          {/* <StyledBlob /> */}
          <YouMatterImg fluid={data.postcardCutout.childImageSharp.fluid} />
        </ImgContainer>

        <TextBlock>
          <HeadText>We all matter.</HeadText>
          <Text>
            Nervous for a test? Anxious about an interview? Need a last minute
            birthday idea? Had a bad day or want to brighten one for someone
            else?
          </Text>
          <div style={{ fontWeight: 'bold', margin: '0.5rem 0' }}>
            We&apos;ve got you.
          </div>
          <ShopNowBtn href="/product">Shop Here</ShopNowBtn>
        </TextBlock>
      </CopyWrapper>
      {/* <Link>Shop Here</Link> */}
    </Wrapper>
  );
};

export default YouMatter;

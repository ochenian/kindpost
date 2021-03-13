import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import Circle from '../assets/svg/circle.svg';
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
    width: 100%;
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
const YouMatterImg = styled(Img)`
  width: 50%;
  // width: 100%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const TextBlock = styled.div`
  width: 50%;

  // display: flex;
  // flex-direction: column;
  // align-items: center;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
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
  margin-bottom: 0.5rem;
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
    }
  `);
  return (
    <Wrapper>
      <CopyWrapper mobile={mobile}>
        <ImgContainer>
          <StyledCircle />
          <YouMatterImg fluid={data.youMatterImg.childImageSharp.fluid} />
        </ImgContainer>

        <TextBlock>
          <HeadText>We all matter.</HeadText>
          <Text>
            Nervous for a test? Anxious about an interview? Need a last minute
            birthday idea? Had a bad day or want to brighten one for someone
            else?
          </Text>
          <div style={{ fontWeight: 'bold' }}>We&apos;ve got you.</div>
          <Link href="/product">Shop Here &#x2192;</Link>
        </TextBlock>
      </CopyWrapper>
      {/* <Link>Shop Here</Link> */}
    </Wrapper>
  );
};

export default YouMatter;

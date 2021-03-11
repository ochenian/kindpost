import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import Circle from '../assets/svg/circle.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  justify-content: center;
`;
const CopyWrapper = styled.div`
  display: flex;
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
`;

const TextBlock = styled.div`
  width: 50%;
`;
const Text = styled.div`
  width: 75%;
  margin-bottom: 0.5rem;
`;

const HeadText = styled.div`
  font-size: 5rem;
`;

const Link = styled.div`
  display: flex;
    margin-top: 1rem;
    letter-spacing: 1px;
    font-size: 1rem;
    // text-transform: uppercase;
}
`;

const YouMatter = () => {
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
    }
  `);
  return (
    <Wrapper>
      <CopyWrapper>
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
          <div style={{ fontWeight: 'bold' }}>We've got you.</div>
          <Link>Shop Here &#x2192;</Link>
        </TextBlock>
      </CopyWrapper>
      {/* <Link>Shop Here</Link> */}
    </Wrapper>
  );
};

export default YouMatter;

import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../layouts/index';
import Circle from '../assets/svg/circle.svg';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'orpheuspro';
`;
const HeaderContainer = styled.div`
  width: 100%;
  position: relative;
`;
const HeaderImg = styled(Img)`
  width: 100%;
`;

const HeaderOverlay = styled.div`
  position: absolute;
  background: linear-gradient(#00000088 30%, #ffffff44 100%);
  width: 100%;
  height: 100%;
  z-index: 10;
`;

const TextImgWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background: rgb(253, 250, 238);
  padding-top: 12em;
`;

const BodyImg = styled(Img)`
  width: 100%;
  flex: 1;
`;

const BodyTextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
`;

const BodyTextHeader = styled.h3`
  font-weight: bold;
  margin-bottom: 2em;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const BodyText = styled.div`
  margin: 0 8em;
  margin-bottom: 2em;
  line-height: 1.5;
`;

const PostcardWrapper = styled.div`
  flex: 1;
  background: rgb(253, 250, 238);
  position: relative;
`;

const PostcardImg = styled(Img)`
  width: 50%;
  margin: 0 auto;
  z-index: 10;
`;

const CenteredCircle = styled(Circle)`
  position: absolute;
  width: 55%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: rgb(242, 212, 215);
`;

const Stamp = styled(Img)`
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.05;
`;

const Contact = () => {
  const data = useStaticQuery(graphql`
    query headerQuery {
      headerImg: file(relativePath: { eq: "KP_Card_Spread_BlueBg.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tableOfPostcards: file(relativePath: { eq: "pc_table.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
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
      californiaStamp: file(relativePath: { eq: "californiastamp.png" }) {
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
    <Layout site="kindpost" headerClass="Header">
      <Container>
        <HeaderContainer>
          <HeaderOverlay />
          <HeaderImg fluid={data.headerImg.childImageSharp.fluid} />
        </HeaderContainer>
        <TextImgWrapper>
          <BodyImg fluid={data.tableOfPostcards.childImageSharp.fluid} />
          <BodyTextWrapper>
            <BodyTextHeader>Showing We Care.</BodyTextHeader>
            <BodyText>
              Kindpost was born out of the belief that finding a thoughtful,
              caring note in your mailbox can rival the greatest experiences in
              life.
            </BodyText>
            <BodyText>
              A simple act of kindness can remind us that the feeling of love
              and being loved is essential to being human.
            </BodyText>
          </BodyTextWrapper>
        </TextImgWrapper>
        <TextImgWrapper style={{ height: '75vh', paddingBottom: '12em' }}>
          <BodyTextWrapper>
            <BodyTextHeader>Tangible means more.</BodyTextHeader>
            <BodyText>
              There is something to be said about receiving a handwritten note.
              Nathaniel Hawthorne is said to have washed his hands before
              reading his wife’s letters, lest he sully them in the slightest.
            </BodyText>
            <BodyText>
              To this day, some of my most prized possessions are past notes
              written to me. No, not printed emails, or recorded Zoom calls, but
              actual handwritten notes that I frequently revisit for when my
              mood calls for a dose of nostalgic warmth.
            </BodyText>
            <Stamp
              style={{ position: 'absolute' }}
              fluid={data.californiaStamp.childImageSharp.fluid}
            />
          </BodyTextWrapper>
          <PostcardWrapper>
            <PostcardImg
              fluid={data.postcardEncouragementImg.childImageSharp.fluid}
            />
            <CenteredCircle />
          </PostcardWrapper>
        </TextImgWrapper>
      </Container>
    </Layout>
  );
};

export default Contact;

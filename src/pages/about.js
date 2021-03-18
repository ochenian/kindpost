import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../layouts/index';
import Circle from '../assets/svg/circle.svg';
import OurPurpose from '../components/OurPurpose';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'orpheuspro';
  background: rgb(253, 250, 238);
  // background: rgb(230 164 228);
`;
const HeaderContainer = styled.div`
  width: 100%;
  position: relative;
      // margin-bottom: 12em;
}
`;
const HeaderImg = styled(Img)`
  width: 100%;
`;

const HeaderOverlay = styled.div`
  position: absolute;
  background: radial-gradient(#00000099 50%, #00000080 100%);
  width: 100%;
  height: 100%;
  z-index: 10;
  font-size: 2rem;
  font-weight: bold;
  color: rgb(242, 235, 229);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  letter-spacing: 24px;
  text-shadow: 1px 2px 4px rgb(0 0 0 / 90%);
`;

const TextImgWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background: rgb(253, 250, 238);
  margin-bottom: 12em;

  @media (max-width: 545px) {
    flex-direction: column-reverse;

    &:last-of-type {
      flex-direction: column;
    }
  }
`;

const BodyImg = styled(Img)`
  width: 100%;
  flex: 1;
  z-index: 10;
`;

const BodyTextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  padding: 10em;
  background: rgb(242, 235, 229);
`;

const BodyTextHeader = styled.h3`
  // font-weight: bold;
  font-size: 2rem;
  // margin-bottom: 2em;
  // letter-spacing: 3px;
  // text-transform: uppercase;
  text-align: center;
  margin: 0 1.5rem 1em 1.5rem;
  text-transform: uppercase;

  @media (max-width: 545px) {
    font-size: 1rem;
  }
`;

const BodyText = styled.div`
  margin: 0 3rem;
  margin-bottom: 2em;
  line-height: 1.5;
  max-width: 50ch;
`;

const PostcardWrapper = styled.div`
  flex: 1;
  background: rgb(253, 250, 238);
  position: relative;

  @media (max-width: 545px) {
    width: 100%;
  }
`;

const PostcardImg = styled(Img)`
  // width: 50%;
  width: 100%;
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

const StyledOurPurpose = styled(OurPurpose)`
  margin-bottom: 12em;
`;

const FinalMessage = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  width: 50%;
  text-align: center;
  margin-bottom: 3em;
  letter-spacing: 4px;
`;

const Contact = () => {
  const data = useStaticQuery(graphql`
    query headerQuery {
      headerImg: file(relativePath: { eq: "our_story.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardScatterImg: file(relativePath: { eq: "postcard_scatter.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      envelopeGoldImg: file(relativePath: { eq: "envelope_gold.jpg" }) {
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
      postcardsFallingImg: file(
        relativePath: { eq: "postcards_falling_alt_4.png" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardsReflectionImg: file(
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
    <Layout site="kindpost" headerClass="Header">
      <Container>
        {/* <div
          style={{
            height: '20vh',
            background: 'rgb(223, 168, 224)',
            width: '100%',
          }}
        /> */}
        <HeaderContainer>
          <HeaderOverlay />
          <HeaderImg fluid={data.headerImg.childImageSharp.fluid} />
        </HeaderContainer>
        {/* <div
          style={{
            height: '10vh',
            background:
              'linear-gradient(to bottom, #e6a4e4, #ffb3cb, #ffcbc2, #ffe5d0, #fdfaee)',
            width: '100%',
          }}
        /> */}
        <StyledOurPurpose />
        <TextImgWrapper>
          <BodyImg
            fluid={data.postcardScatterImg.childImageSharp.fluid}
            style={{ left: '60px' }}
          />
          <BodyTextWrapper>
            <BodyTextHeader>Showing We Care.</BodyTextHeader>
            <BodyText>
              We believe that finding a thoughtful, caring note in your mailbox
              can rival the greatest experiences in life. So we've established a
              platform that allows others to know the joyful feelings of those
              who care.
            </BodyText>
            <BodyText>
              A simple act of kindness can remind us that the feeling of love
              and being loved is essential to being human.
            </BodyText>
          </BodyTextWrapper>
        </TextImgWrapper>
        <TextImgWrapper style={{ height: '75vh' }}>
          <BodyTextWrapper>
            <BodyTextHeader>Tangible Means More.</BodyTextHeader>
            <BodyText>
              There is something to be said about receiving a handwritten note.
              Nathaniel Hawthorne is said to have washed his hands before
              reading his wife’s letters, lest he sully them in the slightest.
            </BodyText>
            <BodyText>
              To this day, some of our most prized possessions are past notes
              written to us. No, not printed emails, or recorded Zoom calls, but
              actual handwritten notes that we frequently revisit for when our
              mood calls for a dose of nostalgic warmth.
            </BodyText>
            {/* <Stamp
              style={{ position: 'absolute' }}
              fluid={data.californiaStamp.childImageSharp.fluid}
            /> */}
          </BodyTextWrapper>
          <PostcardWrapper>
            <PostcardImg
              fluid={data.envelopeGoldImg.childImageSharp.fluid}
              style={{ right: '60px' }}
            />
            {/* <CenteredCircle /> */}
          </PostcardWrapper>
        </TextImgWrapper>
        <FinalMessage>
          Thoughtfully Selected & Handcrafted With Positivity In Mind Because
          <span style={{ color: '#d4004c', fontWeight: 'bold' }}>
            {' '}
            We All Matter
          </span>
        </FinalMessage>
      </Container>
    </Layout>
  );
};

export default Contact;

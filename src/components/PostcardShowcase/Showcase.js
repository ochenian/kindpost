import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import 'intersection-observer';
import { useInView } from 'react-intersection-observer';
import ThreeDPostcard from './3D_Postcard';
import RotatingPostcard from './RotatingImage';

const Container = styled.div`
  background-color: #fdfaee;
  padding: 3em;
  display: flex;
  width: 100%;
  font-family: 'orpheuspro';
`;

const Column = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: 100%;
  // margin: 3em;
  position: relative;
`;

const CenteredColumn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  flex-basis: 100%;
  // margin: 3em;
  position: relative;
  padding: 8em 0;
`;

const CardType = styled(motion.div)`
  position: sticky;
  top: 50%;
  font-size: 3rem;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.25);
  letter-spacing: 6px;
`;

const Showcase = () => {
  const data = useStaticQuery(graphql`
    query Postcards2Query {
      postcardOrangesImg: file(relativePath: { eq: "Oranges.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardOrangesReveal: file(relativePath: { eq: "congrats_reveal.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardCongratulationsImg: file(
        relativePath: { eq: "Congratulations.jpg" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardTwilightImg: file(relativePath: { eq: "Twilight.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardLoveImg: file(relativePath: { eq: "Love.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardLoveReveal: file(relativePath: { eq: "love_reveal.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardRedwoodsImg: file(relativePath: { eq: "Redwoods.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
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
      postcardEncouragementReveal: file(
        relativePath: { eq: "encourage_reveal.png" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardWavesImg: file(relativePath: { eq: "Waves.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      birthdayReveal: file(relativePath: { eq: "birthday_reveal.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardBirthdayImg: file(
        relativePath: { eq: "Birthday-no-border.jpg" }
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

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = index => {
    console.log(index);
    setCurrentStepIndex(index);
  };

  const [inViewRef, inView] = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    if (inView) {
      setCurrentStepIndex('Congrats');
    }
  }, [inView, currentStepIndex]);
  console.log(currentStepIndex);
  console.log(inView);

  return (
    <Container>
      <Column>
        <RotatingPostcard
          ref={inViewRef}
          index="Congratulations"
          onStepEnter={onStepEnter}
          imgFront={data.postcardOrangesImg.childImageSharp.fluid}
          imgBack={data.postcardCongratulationsImg.childImageSharp.fluid}
          imgReveal={data.postcardOrangesReveal.childImageSharp.fluid}
        />

        <RotatingPostcard
          index="Love"
          onStepEnter={onStepEnter}
          imgFront={data.postcardTwilightImg.childImageSharp.fluid}
          imgBack={data.postcardLoveImg.childImageSharp.fluid}
          imgReveal={data.postcardLoveReveal.childImageSharp.fluid}
        />

        <RotatingPostcard
          index="Encouragement"
          onStepEnter={onStepEnter}
          imgFront={data.postcardRedwoodsImg.childImageSharp.fluid}
          imgBack={data.postcardEncouragementImg.childImageSharp.fluid}
          imgReveal={data.postcardEncouragementReveal.childImageSharp.fluid}
        />

        <RotatingPostcard
          index="Birthday"
          onStepEnter={onStepEnter}
          imgFront={data.postcardWavesImg.childImageSharp.fluid}
          imgBack={data.postcardBirthdayImg.childImageSharp.fluid}
          imgReveal={data.birthdayReveal.childImageSharp.fluid}
        />
      </Column>
      {/* <CenteredColumn>
        <CardType>{currentStepIndex}</CardType>
      </CenteredColumn> */}
    </Container>
  );
};

export default Showcase;

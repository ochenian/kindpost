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
import ParallaxIcon from './ParallaxIcon';
import Hearts from '../../assets/svg/hearts_minimal.svg';
import CongratsText from '../../assets/svg/congrats_text.svg';
import BeGood from '../../assets/svg/be_good.svg';

const Container = styled(motion.div)`
  background-color: #fdfaee;
  // padding: 3em;
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
  max-width: 900px;
  margin: 0 auto;
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

const BackgroundText = styled(motion.div)`
  position: sticky;
  width: 100%;
  margin: 0;
  top: 25vh;
  height: 50vh;
  left: 0;
  margin: 50vh 0;
  font-size: 12rem;
  line-height: 1;
  text-align: center;

  &.last {
    margin-bottom: 100vh;
  }
`;

const StyledHearts = styled(Hearts)`
  position: absolute;
  width: 10%;
  left: -10%;
  transform: rotate(-25deg);
`;

const StyledCongratsText = styled(CongratsText)`
  position: absolute;
  width: 10%;
  left: -10%;
  transform: rotate(-25deg);
`;

const TrimContainer = styled.div`
  position: relative;
`;

const StyledBeGood = styled(BeGood)`
  path {
    fill: none;
    opacity: 1;
  }
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

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  const bgVariants = {
    congrats: { 'background-color': '#fdfaee' },
    love: { 'background-color': 'rgb(242,212,115)' },
    encourage: { 'background-color': 'rgb(89,95,112)' },
    birthday: { 'background-color': 'rgb(112,112,112)' },
  };

  const [refCongrats, congratsInView] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: false,
  });

  const [refLove, loveInView] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: false,
  });

  const [refEncouragement, encourageInView] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: false,
  });

  const [refBirthday, birthdayInView] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: false,
  });

  function changeBgColor() {
    console.log('change');
    if (congratsInView) {
      return 'congrats';
    }

    if (loveInView) {
      return 'love';
    }

    if (encourageInView) {
      return 'encourage';
    }

    if (birthdayInView) {
      return 'birthday';
    }

    return 'congrats';
  }

  // console.log(cardInView);

  return (
    <Container
      variants={bgVariants}
      animate={changeBgColor()}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <Column>
        <BackgroundText
          animate={congratsInView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <BeGood />
        </BackgroundText>
        <TrimContainer ref={refCongrats}>
          {/* <ParallaxIcon svgIcon={StyledCongratsText} /> */}
          <RotatingPostcard
            index="Congratulations"
            onStepEnter={onStepEnter}
            imgFront={data.postcardOrangesImg.childImageSharp.fluid}
            imgBack={data.postcardCongratulationsImg.childImageSharp.fluid}
            imgReveal={data.postcardOrangesReveal.childImageSharp.fluid}
          />
        </TrimContainer>

        <BackgroundText
          animate={loveInView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Be Caring.
        </BackgroundText>
        <TrimContainer ref={refLove}>
          <RotatingPostcard
            index="Love"
            onStepEnter={onStepEnter}
            imgFront={data.postcardTwilightImg.childImageSharp.fluid}
            imgBack={data.postcardLoveImg.childImageSharp.fluid}
            imgReveal={data.postcardLoveReveal.childImageSharp.fluid}
          />
        </TrimContainer>

        <BackgroundText
          animate={encourageInView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Be Connected.
        </BackgroundText>
        <TrimContainer ref={refEncouragement}>
          <RotatingPostcard
            index="Encouragement"
            onStepEnter={onStepEnter}
            imgFront={data.postcardRedwoodsImg.childImageSharp.fluid}
            imgBack={data.postcardEncouragementImg.childImageSharp.fluid}
            imgReveal={data.postcardEncouragementReveal.childImageSharp.fluid}
          />
        </TrimContainer>

        <BackgroundText
          animate={birthdayInView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="last"
        >
          Be Thoughtful.
        </BackgroundText>
        <TrimContainer ref={refBirthday}>
          <RotatingPostcard
            index="Birthday"
            onStepEnter={onStepEnter}
            imgFront={data.postcardWavesImg.childImageSharp.fluid}
            imgBack={data.postcardBirthdayImg.childImageSharp.fluid}
            imgReveal={data.birthdayReveal.childImageSharp.fluid}
          />
        </TrimContainer>
      </Column>
      {/* <CenteredColumn>
        <CardType>{currentStepIndex}</CardType>
      </CenteredColumn> */}
    </Container>
  );
};

export default Showcase;

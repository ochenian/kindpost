import React, { useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Wrapper = styled(motion.div)`
  background: linear-gradient(
    180deg,
    rgba(255, 227, 227, 1) 0%,
    rgba(238, 231, 247, 1) 35%
  );
  display: flex;
`;

// const BlendSpacer = styled.div`
//   background: linear-gradient(
//     0deg,
//     rgba(238, 241, 237, 0.05) 35%,
//     rgba(255, 227, 227, 1) 100%
//   );
//   flex: 1;
// `;
const InspirationImg = styled(Img)`
  margin: 20em 0;
  width: 100%;
  flex: 1;
`;
const InspirationShowcase = () => {
  const data = useStaticQuery(graphql`
    query InspirationShowcaseQuery {
      inspirationShowcaseImg: file(relativePath: { eq: "pc_bunch.png" }) {
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

  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  const boxVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 5,
      },
    },
  };
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  console.log(inView);

  return (
    <Wrapper
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={boxVariants}
    >
      {/* <BlendSpacer /> */}
      <InspirationImg
        fluid={data.inspirationShowcaseImg.childImageSharp.fluid}
      />
    </Wrapper>
  );
};

export default InspirationShowcase;

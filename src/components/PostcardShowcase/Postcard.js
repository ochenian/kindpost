import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import ButtonLink from '../ButtonLink';

const Container = styled.div`
  background-color: #fdfaee;
  padding: 3em;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'orpheuspro';
`;

const ColumnsContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin-bottom: 3em;
`;

const PostcardColumn = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: 100%;
  margin: 3em;
  position: relative;
`;

const ColumnDivider = styled.div`
  border-left: 4px solid rgb(56, 84, 118);
  height: 100%;
  position: absolute;
  left: 50%;
  top: 0;
`;

const FadedHeading = styled.div`
  color: rgba(56, 84, 118, 0.25);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 3em;
  letter-spacing: 4px;
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const AnimatedImageCoverContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 20;
`;
const ImageCover = styled(Img)`
  width: 100%;
  z-index: 10;
`;

const StyledButtonLink = styled(ButtonLink)`
  width: fit-content;
  margin: 0 auto;
  letter-spacing: 4px;
`;

const ShopButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ShopLink = styled.div`
  font-size: 1.75em;
  cursor: pointer;
  color: #385476;
  font-weight: bold;
  letter-spacing: 4px;
`;

const PostcardShowcase = () => {
  const data = useStaticQuery(graphql`
    query PostcardsQuery {
      postcardOrangesImg: file(relativePath: { eq: "Oranges.jpg" }) {
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
      postcardOrangesReveal: file(relativePath: { eq: "congrats_reveal.png" }) {
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

  const ref = useRef();
  const { scrollY } = useViewportScroll();
  const [offsetTop, setOffsetTop] = useState(0);

  // eslint-disable-next-line consistent-return
  useLayoutEffect(() => {
    if (!ref.current) return null;
    setOffsetTop(ref.current.getBoundingClientRect().top);
  }, [ref]);

  const y = useSpring(
    useTransform(scrollY, [offsetTop - 500, offsetTop + 10], ['0%', '100%']),
  );

  return (
    <Container>
      <ColumnsContainer>
        <PostcardColumn>
          <FadedHeading>CURATED POSTCARDS</FadedHeading>
          <ImageContainer>
            <AnimatedImageCoverContainer
              ref={ref}
              initial={{ y: 0 }}
              style={{ y }}
            >
              <ImageCover
                style={{ position: 'absolute' }}
                fluid={data.postcardOrangesReveal.childImageSharp.fluid}
              />
            </AnimatedImageCoverContainer>
            <Img fluid={data.postcardOrangesImg.childImageSharp.fluid} />
          </ImageContainer>
        </PostcardColumn>
        <ColumnDivider />
        <PostcardColumn>
          <FadedHeading>MESSAGES OF POSITIVITY</FadedHeading>
          <Img fluid={data.postcardEncouragementImg.childImageSharp.fluid} />
        </PostcardColumn>
      </ColumnsContainer>
      <ShopButtonContainer>
        <StyledButtonLink color="#385476">
          <Link to="/shop">
            <ShopLink>SHOP</ShopLink>
          </Link>
        </StyledButtonLink>
      </ShopButtonContainer>
    </Container>
  );
};

export default PostcardShowcase;

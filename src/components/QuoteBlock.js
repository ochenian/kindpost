import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import ButtonLink from './ButtonLink';

const Background = styled.div`
  background-color: #f2ebe5;
  padding: 6em 8em;
  font-size: 1.5em;
  font-family: 'orpheuspro';
  text-align: center;

  @media (max-width: 650px) {
    padding: 1.5em 2em;
  }
`;

const Quote = styled.p`
  margin-bottom: 1em;
`;

const Signature = styled.div`
  font-family: 'Les Mores';
  font-size: 3em;
`;

const SignatureTitle = styled.div`
  font-size: 0.75em;
`;

const StoryLink = styled.div`
  font-size: 0.75em;
  cursor: pointer;
  color: rgb(40, 40, 40);
  font-weight: bold;
`;

const StyledButtonLink = styled(ButtonLink)`
  width: fit-content;
  margin: 0 auto;
  margin-top: 3em;
`;

const QuoteBlock = () => (
  <Background>
    <Quote>
      “Whether it’s a pick-me-up, inspiration, or a message of empowerment, our
      goal is promoting a sense of hope and building connection through the
      transformative nature of kindness.”
    </Quote>
    <Signature>Cate</Signature>
    <SignatureTitle>Founder / CEO</SignatureTitle>
    <StyledButtonLink color="rgb(40,40,40)">
      <Link to="/about">
        <StoryLink>Read Our Story</StoryLink>
      </Link>
    </StyledButtonLink>
  </Background>
);

export default QuoteBlock;

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8em 0;
`;

const Heading = styled.div`
  font-size: 5rem;
  margin-bottom: 0.5em;
`;

const PurposeText = styled.div`
  width: 50ch;
  margin-bottom: 0.5em;
`;

const OurPurpose = () => {
  return (
    <Wrapper>
      <Heading>Our Purpose</Heading>
      <PurposeText>
        Kindpost was founded on the belief the everyone deserves to be loved and
        we all matter. With a particular focus on mental health, we seek to
        provide a path to happiness for those who love and those who need love.
      </PurposeText>
      <div style={{ alignSelf: 'start' }}>
        We are and always will be&nbsp;
        <span style={{ fontWeight: 'bold' }}>here for you</span>.
      </div>
    </Wrapper>
  );
};

export default OurPurpose;

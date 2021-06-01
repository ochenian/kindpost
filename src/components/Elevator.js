import React from 'react';
import styled from 'styled-components';

const ElevatorWrapper = styled.section`
  font-family: 'futura-pt';
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 96px 32px 48px;
  width: 50ch;
  margin: 0 auto;
  color: #282828;
`;

const SuperStatement = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #d4004c;
  margin-bottom: 8px;
`;

const Statement = styled.p`
  font-weight: bold;
  font-size: 1.5rem;

  &:last-of-type {
    margin-bottom: 16px;
  }
`;

const Keywords = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const Divider = styled.span`
  margin: 0 16px;
`;

const Elevator = () => {
  return (
    <ElevatorWrapper>
      <SuperStatement>ANY KINDNESS MATTERS, NO MATTER HOW SMALL</SuperStatement>
      <Statement>
        We create handwritten messages of positivity personalized
      </Statement>
      <Statement>for you & your loved ones on vintage postcards.</Statement>
      <Keywords>
        SIMPLE <Divider>|</Divider> PERSONAL <Divider>|</Divider> KIND
      </Keywords>
    </ElevatorWrapper>
  );
};

export default Elevator;

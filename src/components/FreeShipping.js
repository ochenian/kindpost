import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
  color: #fff;
  font-family: 'futura-pt';
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  height: 24px;
  padding: 0 8px;
`;

const FreeShipping = () => <Wrapper>Free Shipping on All U.S. Orders!</Wrapper>;

export default FreeShipping;

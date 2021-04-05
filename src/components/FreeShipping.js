import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8px;
  background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
  color: #fff;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  height: 24px;
`;

const FreeShipping = () => <Wrapper>Free Shipping on All Orders!</Wrapper>;

export default FreeShipping;

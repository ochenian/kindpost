import React from 'react';
import styled from 'styled-components';
import CartListItem from './CartListItem';

import { colors, spacing } from '../../utils/styles';

const CartListRoot = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Headers = styled(`div`)`
  // border-bottom: 1px solid ${colors.brandBright};
  display: flex;
  justify-content: space-between;

  span {
    color: ${colors.textLight};
    // flex-basis: 60px;
    flex-basis: 20%;
    flex-grow: 0;
    font-size: 0.8rem;
    padding-bottom: ${spacing.xs}px;
    text-align: center;
    text-transform: uppercase;

    &:first-of-type {
      flex-grow: 1;
      text-align: left;
    }
  }
`;

const CartList = ({
  items,
  toggle,
  setCartLoading,
  isCartLoading
}) => (
    <>
      <Headers>
        {/* <span>Product</span>
        <span>Price</span>
        <span>Qty</span>
        <span>Total</span> */}
      </Headers>
      <CartListRoot>
        {items.map(item => (
          <CartListItem
            key={item.id}
            item={item}
            toggle={toggle}
            setCartLoading={setCartLoading}
            isCartLoading={isCartLoading}
          />
        ))}
      </CartListRoot>
    </>
  );

export default CartList;

import React from 'react';
import styled from 'styled-components';
import CartListItem from './CartListItem';

const CartListRoot = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CartList = ({ items, toggle, setCartLoading, isCartLoading }) => (
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
);

export default CartList;

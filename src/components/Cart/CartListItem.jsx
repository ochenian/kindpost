import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import {
  useUpdateItemQuantity,
  useRemoveItemFromCart,
  useCartItems,
  useCart,
  useSetCartUnsafe,
} from 'gatsby-theme-shopify-manager';
import Delete from '../../assets/svg/delete_outline-24px.svg';
import { Input } from '../shared/FormElements';
import { Button } from '../shared/Buttons';
import CartThumbnail from './CartThumbnail';
import { breakpoints, colors, spacing } from '../../utils/styles';

const CartListItemRoot = styled('li')`
  align-items: center;
  border-bottom: 1px solid ${colors.brandLight};
  display: flex;
  /* justify-content: space-between; */
  padding: ${spacing.md}px 0;
  max-height: 105px;
`;

const Thumbnail = styled(CartThumbnail)`
  flex-grow: 0;
  margin-left: ${spacing['2xs']}px;
  margin-right: 16px;
  width: 12%;
  max-width: 115px;
  height: 100%;
`;

const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PrimaryLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SecondaryLine = styled.div`
  display: flex;
  margin: 4px 0;
`;

const ProductName = styled.div`
  font-size: 1.25rem;
  line-height: 1.1;
  text-transform: uppercase;
`;

const PriceDeleteContainer = styled.div`
  display: flex;
`;

const Price = styled.div`
  margin-right: 24px;
`;

const Meta = styled('span')`
  color: #f40075;
  display: block;
  font-size: 0.95rem;
  font-style: normal;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
`;

const QtyContainer = styled.div`
  display: flex;
  /* margin-top: 1em; */
`;

const Quantity = styled(Input)`
  border: none;
  flex-grow: 0;
  height: 22px;
  /* margin-right: ${spacing.xs}px; */
  padding: 0 ${spacing.xs}px 0;
  text-align: center;
  width: 25px;

  @media (min-width: ${breakpoints.desktop}px) {
    width: 50px;
  }
`;

const QtyChange = styled(Button)`
  border: 1px solid ${colors.textLighter};
  display: flex;
  height: 22px;
  justify-content: center;
  /* margin-right: ${spacing['2xs']}px; */
  padding: 0;
  width: 22px;
  color: #000;

  svg {
    height: 16px;
    margin: 0;
    width: 16px;
  }
`;

const DeleteIcon = styled(Delete)`
  cursor: pointer;
`;

export default ({ item, toggle, setCartLoading, isCartLoading }) => {
  const cartItems = useCartItems();
  const setCart = useSetCartUnsafe();
  let cart = useCart();
  const updateItemQuantity = useUpdateItemQuantity();
  const removeItemFromCart = useRemoveItemFromCart();
  const [quantity, setQuantity] = useState(item.quantity);
  const quantityEl = useRef(null);

  async function updateQuantity(qty) {
    if (item.variant.id == null) {
      return;
    }

    try {
      await updateItemQuantity(item.variant.id, qty);
    } catch (e) {
      console.log(e);
    }
  }

  async function removeItem(itemId) {
    if (itemId == null) {
      return;
    }

    if (cartItems.length < 1) {
      return;
    }

    try {
      await removeItemFromCart(item.variant.id);
    } catch (e) {
      console.log(e);
    }
  }

  const handleInputChange = event => {
    if (isCartLoading) {
      return;
    }

    const value = event.target.value;

    // Make sure the quantity is always at least 1.
    const safeValue = Math.max(Number(value), 0);

    // No need to update if the value hasn’t updated.
    if (value === quantity) {
      return;
    }

    // If the field is empty, update the state but don’t do anything else.
    if (value === '') {
      setQuantity(value);
      return;
    }

    // Otherwise, trigger the loading state and set the quantity in state.
    // setCartLoading(true);
    setQuantity(safeValue);

    // If the quantity is set to 0, remove the item.
    if (safeValue === 0) {
      removeItem(item.variant.id);
      return;
    }

    // If we get here, update the quantity.
    updateQuantity(safeValue);
  };

  const handleRemoveItem = event => {
    removeItem(item.variant.id);
  };

  const increment = event => {
    quantityEl.current.stepUp();
    // setNativeValue(quantityEl.current, quantityEl.current.value);
    quantityEl.current.dispatchEvent(new Event('change', { bubbles: true }));
  };

  const decrement = event => {
    quantityEl.current.stepDown();
    quantityEl.current.dispatchEvent(new Event('change', { bubbles: true }));
  };

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  return (
    <CartListItemRoot>
      <Thumbnail
        id={item.variant.image.id}
        fallback={item.variant.image.src}
        alt={item.variant.image.altText}
      />
      <LineContainer>
        <PrimaryLine>
          <ProductName>{item.title}</ProductName>
          <PriceDeleteContainer>
            <Price>${item.variant.price}</Price>
            <DeleteIcon onClick={handleRemoveItem} />
          </PriceDeleteContainer>
        </PrimaryLine>
        <SecondaryLine>
          <Meta>{item.variant.selectedOptions[0].value}</Meta>
        </SecondaryLine>
      </LineContainer>
    </CartListItemRoot>
  );
};
